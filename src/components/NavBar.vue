<!-- eslint-disable max-len -->
<template>
<li v-for="route in router.options.routes" :key="route.name"> <router-link :to="{name: route.name}">{{ route.name }}</router-link></li>

</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
console.log({ router });
</script>
