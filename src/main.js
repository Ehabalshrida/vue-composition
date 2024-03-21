import { createApp } from 'vue';
import mitt from 'mitt';
import App from './App.vue';
import router from './router';
import store from './store';

const emitter = mitt();
const vueApp = createApp(App);
vueApp.provide('emitter', emitter).use(store).use(router).mount('#app');
