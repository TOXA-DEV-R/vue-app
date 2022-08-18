/** @format */

import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Card from "../views/Card.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
