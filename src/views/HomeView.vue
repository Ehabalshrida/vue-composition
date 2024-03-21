<template>
  <div>
    this is home page
    <!-- <div>{{ name}}</div>
   <div>{{ age}}</div>
   <hr>
   <div>{{ myName}}</div>
   <div>{{ myAge}}</div> -->
    <hr />
    <!-- <div>{{ myNameRef }}</div>
    <div>{{ myAgeRef }}</div>
    <hr />
    <div>{{ student.name }}</div>
    <div>{{ grads[2] }}</div>
    <button @click="increaseAge">increase</button>
    <button @click="decreaseAge">Decrease</button> -->
    <div ref="handleRef">{{ increamentAge }}</div>
    <div>
      <PropComponent :age="myAgeRef" :name="student.name" @increaseAgeBy5="increaseAgeBy5" />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  inject,
} from 'vue';
import PropComponent from '@/components/PropComponent.vue';
// use reactive for reference type and ref for all data types
// Data
// const myNameRef = ref('ehab');
const myAgeRef = ref(22);
const title = ref('frontEnd Developer');
const student = reactive({ id: 1, name: 'shaker' });
// const grads = reactive([18, 19, 20]);
// to handle ref in composition api
const handleRef = ref(null);
console.log({ handleRef: handleRef.value });

setTimeout(() => {
  console.log({ handleRef: handleRef.value });
}, 200);

// Methods
// const increaseAge = () => {
//   console.log(myAgeRef.value);
//   myAgeRef.value += 1;
// };
// function decreaseAge() {
//   console.log(myAgeRef.value);
//   myAgeRef.value -= 1;
// }
const sayHello = () => {
  console.log('hello');
};
const increaseAgeBy5 = (val) => {
  myAgeRef.value += val;
};
// computed
const increamentAge = computed(
  () => `Mr ${student.name} your age after one year is: ${myAgeRef.value + 1}`,
);
// provide and enject
provide('myTitle', title.value);
provide('hello', sayHello);
// component life cycle

onBeforeMount(() => {
  console.log('before mounted');
});
// onMounted(() => {
//   console.log('mounted');
// });
onBeforeUpdate(() => {
  console.log('before update');
});
onUpdated(() => {
  console.log('updated');
});
// globalEmitter
const emitter = inject('emitter');
onMounted(() => {
  emitter.on('globalEmit', (e) => {
    console.log(e);
  });
});
// export default {
//   data() {
//     return {
//       name: 'ali',
//       age: 27,
//     };
//   },
//   setup() {
//     const myName = 'hasan';
//     const myAge = 23;
//     return { myName, myAge };
//   },
// };
</script>
