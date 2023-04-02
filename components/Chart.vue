<template>
  <div>
    <!-- タイトル表示 -->
    <h2 class="title">都道府県を選択</h2>
    <!-- 都道府県のチェックボックスのコンテナ -->
    <div class="prefectures-container">
      <!-- 都道府県ごとのチェックボックスとラベル -->
      <div
        v-for="prefecture in prefectures"
        :key="prefecture.prefCode"
        class="prefecture-item"
      >
        <input
          :id="prefecture.prefCode"
          v-model="selectedPrefectures"
          type="checkbox"
          :value="prefecture.prefCode"
          :disabled="state.loading"
          @change="onPrefectureChange"
        />
        <label :for="prefecture.prefCode">{{ prefecture.prefName }}</label>
      </div>
    </div>
    <highchart :options="chartOptions" />
    <!-- <Loading :is-loading="isLoading" /> -->
  </div>
</template>

<script setup>
// セキュリティ APIキーとAPIのURLを定数で定義
// const config = useRuntimeConfig();
// const X_API_KEY = config.apiKey;

// とりあえずAPIキーを直接書いてみる
const X_API_KEY = "ST9um6onAEbC10KaCaeCdJOXWjj51ZgRsnwhsP1z";
const API_PREFECTURES =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";
const API_PREF_POPULATION =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

// グラフのオプション
const chartOptions = ref({
  title: {
    text: "年度別総人口推移",
    style: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
  xAxis: {
    title: {
      text: "年度",
    },
    categories: [],
  },
  yAxis: {
    title: {
      text: "総人口",
    },
    labels: {
      formatter: function () {
        return this.value;
      },
    },
    tickInterval: 1000000,
  },
  series: [],
  plotOptions: {
    series: {
      lineWidth: 2,
      marker: {
        radius: 4,
      },
      label: {
        connectorAllowed: false,
      },
    },
  },
});
// ローディングFLAG
// const isLoading = ref(false);
const loadingStore = useLoadingStore();
const { state } = loadingStore;

// 都道府県データと選択された都道府県のリストを保持するref
const prefectures = ref([]);
const selectedPrefectures = ref([]);

// 都道府県データを取得する非同期関数
async function fetchPrefectures() {
  const response = await fetch(API_PREFECTURES, {
    headers: { "X-API-KEY": X_API_KEY },
  });
  const data = await response.json();
  prefectures.value = data.result;
}

// 都道府県別の人口データを取得する非同期関数
async function fetchPopulation(prefCode) {
  const response = await fetch(`${API_PREF_POPULATION}?prefCode=${prefCode}`, {
    headers: { "X-API-KEY": X_API_KEY },
  });
  const data = await response.json();
  return data.result.data[0].data;
}

// 都道府県が選択された時に呼び出される関数
async function onPrefectureChange() {
  // isLoading.value = true;
  loadingStore.setLoading(true);
  // 都道府県別の人口データを取得する非同期関数を呼び出す
  const populationPromises = selectedPrefectures.value.map((prefCode) =>
    fetchPopulation(prefCode)
  );
  // 都道府県別の人口データを取得する
  const populationData = await Promise.all(populationPromises);

  const series = selectedPrefectures.value.map((prefCode, index) => {
    const prefData = populationData[index];
    const data = prefData.map((data) => data.value);
    // 年度の配列を生成
    const years = populationData[0].map((data) => data.year.toString());
    // chartOptionsのxAxis.categoriesに年度を設定
    chartOptions.value.xAxis.categories = years;
    // 都道府県名を取得
    const pref = prefectures.value.find((pref) => pref.prefCode === prefCode);
    // 都道府県名が取得できない場合は東京都を設定
    const prefName = pref ? pref.prefName : "東京都";

    // グラフのデータを作成
    return {
      name: prefName,
      data,
    };
  });
  chartOptions.value.series = series;
  loadingStore.setLoading(false);
}

// 都道府県データを取得
onMounted(async () => {
  await fetchPrefectures();
  selectedPrefectures.value = ["13"];
  await onPrefectureChange();
});
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
}

.prefectures-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  overflow-y: auto;
  height: 20vh;
  margin-bottom: 16px;
}

.prefecture-item {
  text-align: center;
}
</style>
