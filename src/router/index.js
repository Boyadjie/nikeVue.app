import { createRouter, createWebHistory } from "vue-router";
import MenView from "@/views/Men.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "men",
      component: MenView,
    },
    {
      path: "/customise",
      name: "customise",
      component: () => import("@/views/Customise.vue"),
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
