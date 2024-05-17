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
        path: "home-search-service",
        component: () => import("components/HomeSearchService.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
