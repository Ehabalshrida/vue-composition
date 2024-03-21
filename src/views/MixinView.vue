<template>
  <h1>counter: {{ counter }}</h1>
  <button v-color="'blue'" @click="increaseCounter">Increase</button>
  <hr />
  <button v-color="'red'" @click="decreaseCounter">Decrease</button>
  <hr />
  <button @click="arr.push(counter)">pushToArr</button>
</template>
<script setup>
import handleCounter from '@/mixins/counter';
import { watch, ref } from 'vue';

const vColor = {
  mounted: (ele, val) => {
    const element = ele;
    element.style.color = val.value;
  },
};
const { counter, increaseCounter, decreaseCounter } = handleCounter();
const arr = ref([]);
watch(
  () => counter.value,
  (newVal, oldVal) => {
    console.log({ newVal, oldVal });
  },
);
watch(
  () => arr.value,
  (arrNew) => {
    console.log({ arrNew });
  },
  { deep: true },
);
</script>
