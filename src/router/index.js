import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('@/views/HomeView.vue'),
  //   meta: {
  //     title: 'home Page',
  //   },
  // },
  // {
  //   path: '/mixin',
  //   name: 'mixin',
  //   component: () => import('@/views/MixinView.vue'),
  //   meta: {
  //     title: 'Mixin Page',
  //   },
  // },
  {
    path: '/',
    name: 'add todo ',
    component: () => import('@/views/AddTodo.vue'),
    meta: {
      title: 'Apply Page',
    },
  },
  {
    path: '/to-do',
    name: 'show todos list',
    component: () => import('@/views/TodosList.vue'),
    meta: {
      title: 'to Do Page',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  console.log({ To: to });
  document.title = to.meta.title;
  next();
});
export default router;
