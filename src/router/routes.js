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
        path: "how-work",
        name: "how-work",
        component: () => import("pages/HowWorks.vue"),
      },
      {
        path: "client-services",
        name: "client-services",
        component: () => import("pages/SearchService.vue"),
      },
      {
        path: "my-profile",
        name: "my-profile",
        component: () => import("pages/MyProfile.vue"),
      },
      {
        path: "my-services",
        name: "my-services",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
