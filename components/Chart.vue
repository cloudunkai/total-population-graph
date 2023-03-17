<template>
  <highchart :options="chartOptions" />
</template>

<script setup>
import { ref, onMounted } from "vue";

const X_API_KEY = "ST9um6onAEbC10KaCaeCdJOXWjj51ZgRsnwhsP1z";
const API_PREFECTURES =
  "https://opendata.resas-portal.go.jp/api/v1/prefectures";
const API_PREF_POPULATION =
  "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

const chartOptions = ref({
  chart: {
    renderTo: "container",
    type: "bar",
  },
  title: {
    text: "Fruit Consumption",
  },
  xAxis: {
    categories: ["Apples", "Bananas", "Oranges"],
  },
  yAxis: {
    title: {
      text: "Fruit eaten",
    },
  },
  series: [
    {
      name: "Jane",
      data: [1, 0, 4],
    },
    {
      name: "John",
      data: [5, 7, 3],
    },
  ],
});

// async function fetchPopulationData() {
//   const response = await fetch(API_PREFECTURES, {
//     headers: { "X-API-KEY": X_API_KEY },
//   });
//   const data = await response.json();
//   const prefectureCodes = data.result.map((pref) => pref.prefCode);

//   const populationPromises = prefectureCodes.map(async (code) => {
//     const response = await fetch(`${API_PREF_POPULATION}?prefCode=${code}`, {
//       headers: { "X-API-KEY": X_API_KEY },
//     });
//     const data = await response.json();
//     return data.result.data[0].data;
//   });

//   const populationData = await Promise.all(populationPromises);

//   const series = populationData.map((data, index) => {
//     return {
//       name: data.result[index].prefName,
//       data: data.map((yearData) => yearData.value),
//     };
//   });

//   const categories = populationData[0].map((yearData) => yearData.year);

//   chartOptions.value.xAxis[0].categories = categories;
//   chartOptions.value.series = series;
// }

// onMounted(fetchPopulationData);
</script>
