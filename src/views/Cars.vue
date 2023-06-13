<template>
  <div class="cardContainer">
    <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="index"
    />

    <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="index"
    />

    <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="index"
    />
  </div>
</template>

<script>
import CarCard from "../components/CarCard";
import jsonData from "../assets/data.json";

export default {
  components: {
    CarCard,
  },
  props: {
    userData: Array,
  },
  data() {
    return {
      jsonData,
    };
  },
};
</script>

<style>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.carCardClass {
  margin: 10px;
}
</style>