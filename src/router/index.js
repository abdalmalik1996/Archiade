// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/interior-design",
        name: "interior-design",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/views/InteriorDesignViews.vue"
          ),
      },
      {
        path: "/Showroom",
        name: "Showroom",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Showroomviews.vue"),
      },
      {
        path: "/our-brands",
        name: "ourBrands",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/ourBrandsViews.vue"),
      },
      {
        path: "/about-us",
        name: "aboutUs",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/aboutUsViews.vue"),
      },
      {
        path: "/Send-Request",
        name: "Request",
        component: () => import("@/views/RequestViews.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-red",
});

export default router;
