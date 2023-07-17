import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", default: true, component: () => import("@/views/HomeView.vue") },
  { path: "/about", component: () => import("@/views/AboutView.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;