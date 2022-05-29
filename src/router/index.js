import Home from "../views/Home.vue";

// https://vueschool.io/lessons/installing-and-setting-up-vue-router-with-vite-vite-only
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("@/auth/Auth.vue"),
    },
    {
      path: "/add",
      name: "AddProduct",
      component: () => import("@/api/AddProduct.vue"),
    },
  ],
});

export default router;
