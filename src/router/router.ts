import { createWebHashHistory, createRouter } from "vue-router";

import errorPage from "./../view/Error/error.vue";

const routes = [{ path: "/", component: errorPage }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
