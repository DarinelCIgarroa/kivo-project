const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/IndexPage.vue") },
      {
        path: "how-does-it-work",
        component: () => import("@/pages/HowWorks.vue"),
      },
      {
        path: "home-search-service",
        component: () => import("src/pages/SearchService.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
