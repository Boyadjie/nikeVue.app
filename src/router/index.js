import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/men",
      name: "men",
      component: () => import("@/views/Men.vue"),
    },
    {
      path: "/women",
      name: "women",
      component: () => import("@/views/Women.vue"),
    },
    {
      path: "/kids",
      name: "kids",
      component: () => import("@/views/Kids.vue"),
    },
  ],
});

export default router;
