<template>
  <div >
    <!-- タイトル表示 -->
    <h2 class="title">都道府県を選択</h2>
    <!-- 都道府県のチェックボックスのコンテナ -->
    <div class="prefectures-container">
      <!-- 都道府県ごとのチェックボックスとラベル -->
      <div
        class="prefecture-item"
        v-for="prefecture in prefectures"
        :key="prefecture.prefCode"
      >
        <input
          type="checkbox"
          :id="prefecture.prefCode"
          :value="prefecture.prefCode"
          v-model="selectedPrefectures"
          @change="onPrefectureChange"
        />
        <label :for="prefecture.prefCode">{{ prefecture.prefName }}</label>
      </div>
    </div>
    <highchart :options="chartOptions" />
  </div>
</template>

<script setup>
const X_API_KEY = "ST9um6onAEbC10KaCaeCdJOXWjj51ZgRsnwhsP1z";
const API_PREFECTURES =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";
const API_PREF_POPULATION =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

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
    categories: ["1990", "2000", "2010", "2020"],
    tickInterval: 1,
  },
  yAxis: {
    title: {
      text: "総人口 (万人)",
    },
    labels: {
      formatter: function () {
        return this.value / 100000;
      },
    },
    tickInterval: 1000000,
  },
  series: [
    {
      name: "東京都",
      data: [12000000, 13000000, 13500000, 14000000],
    },
    {
      name: "大阪府",
      data: [8500000, 8800000, 9000000, 9200000],
    },
  ],
  plotOptions: {
    series: {
      lineWidth: 2,
      marker: {
        radius: 4,
      },
    },
  },
});

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

// 都道府県データを取得
fetchPrefectures();
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
}

.prefecture-item {
  text-align: center;
}
</style>
