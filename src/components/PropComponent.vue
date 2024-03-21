<template>
this is component
<h1 v-color="'yellow'">{{ props.name }}</h1>
<h2>{{ props.age }}</h2>
<h3>my title: {{ title }}</h3>
<hr>
<button @click="sayHello">hello</button>
<hr>
<button @click="emits('increaseAgeBy5',5)"> Increase By 5</button>
</template>
<script setup>
import { defineProps, defineEmits, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const vColor = {
  mounted: (item, properity) => {
    const ele = item;
    ele.style.color = properity.value;
    console.log({ item, properity });
  },
};
console.log({ route, router });
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(['increaseAgeBy5']);
const title = inject('myTitle');
const sayHello = inject('hello');
</script>
