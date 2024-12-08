import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/glasses",
      name: "glasses",

      component: () => import("../views/GlassesView.vue"),
    },
    {
      path: "/sunglasses",
      name: "sunglasses",

      component: () => import("../views/SunglassesView.vue"),
    },
    {
      path: "/contactlens",
      name: "contactlens",

      component: () => import("../views/ContactlensView.vue"),
    },
    {
      path: "/accessories",
      name: "accessories",

      component: () => import("../views/AccessoriesView.vue"),
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/fav",
      name: "fav",

      component: () => import("../views/FavView.vue"),
    },
    {
      path: "/shoppingcart",
      name: "shoppingcart",

      component: () => import("../views/ShoppingcartView.vue"),
    },
    {
      path: "/aboutlens",
      name: "aboutlens",

      component: () => import("../views/AboutlensView.vue"),
    },
    {
      path: "/warranty",
      name: "warranty",

      component: () => import("../views/WarrantyView.vue"),
    },
    {
      path: "/service",
      name: "service",

      component: () => import("../views/ServiceView.vue"),
    },
    {
      path: "/faq",
      name: "faq",

      component: () => import("../views/FaqView.vue"),
      redirect: "/warrantypolicy",
      children: [
        {
          path: "/warrantypolicy",
          name: "warrantypolicy",
          component: () => import("../components/WarrantyPolicy.vue"),
        },
        {
          path: "/productpolicy",
          name: "productpolicy",
          component: () => import("../components/ProductPolicy.vue"),
        },
        {
          path: "/cspolicy",
          name: "cspolicy",
          component: () => import("../components/CsPolicy.vue"),
        },
        {
          path: "/onlineshoppingpolicy",
          name: "onlineshoppingpolicy",
          component: () => import("../components/OnlineshoppingPolicy.vue"),
        },
      ],
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/RegisterView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // 預設捲動到頁面頂部
      return { top: 0 };
    }
  },
});

export default router;
