<template>
  <button @click="fireEmitt"> fireEmitt</button>
</template>
<script setup>
import { inject } from 'vue';

const emitter = inject('emitter');

const fireEmitt = () => {
  emitter.emit('globalEmit', 'ahmad');
};
</script>
