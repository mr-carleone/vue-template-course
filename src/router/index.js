import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/team",
      component: () => import("../views/Team.vue"),
    },
    {
      path: "/contacts",
      component: () => import("../views/Contacts.vue"),
    },
    {
      path: "/settings",
      component: () => import("../views/Settings.vue"),
    },
    {
      path: "/dislocations",
      component: () => import("../views/Dislocations.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
