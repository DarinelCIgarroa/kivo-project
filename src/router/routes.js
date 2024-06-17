const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "how-does-it-work",
        name: "how-work",
        component: () => import("@/pages/HowWorks.vue"),
      },
      {
        path: "client-services",
        name: "client-services",
        component: () => import("src/pages/SearchService.vue"),
      },
      {
        path: "my-profiel",
        name: "my-profile",
        component: () => import("src/pages/MyProfile.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
