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
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/interior-design",
        name: "interior-design",
        component: () => import("@/views/InteriorDesignViews.vue"),
      },
      {
        path: "/Showroom",
        name: "Showroom",
        component: () => import("@/views/Showroomviews.vue"),
      },
      {
        path: "/our-brands",
        name: "ourBrands",
        component: () => import("@/views/ourBrandsViews.vue"),
      },
      {
        path: "/about-us",
        name: "aboutUs",
        component: () => import("@/views/aboutUsViews.vue"),
      },
      {
        path: "/Send-Request",
        name: "Request",
        component: () => import("@/views/RequestViews.vue"),
      },
      {
        path: "/interior-design/Projects/:name",
        name: "Projects",
        component: () => import("@/views/projectsView.vue"),
      },
      {
        path: "/Showroom/products/:name",
        name: "products",
        component: () => import("@/views/productsView.vue"),
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
