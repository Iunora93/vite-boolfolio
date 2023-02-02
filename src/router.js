import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import SingleProject from "./pages/SingleProject.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "homepage",
        component: HomePage,
      },
      {
        path: "/blog/:slug",
        name: "single-project",
        component: SingleProject,
      },
      
    ],
});

export default router;
