import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  scrollBehavior() {
    return { top: 0, left: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang",
      children: [
        {
          path: "",
          name: "home",
          component: () => import("../views/HomePage.vue"),
        },
        
      ],
    },
  ],
});
router.beforeEach((to, from, next) => {
  const lang = to.params.lang;
  const storedLocale = localStorage.getItem("locale");

  if (storedLocale && lang !== storedLocale) {
    // return next({
    //   path: `/${storedLocale}${to.path.slice(3)}`,
    //   query: to.query, 
    // });
  }
  if (!lang) {
    return next({
      path: `/${storedLocale || "oz"}`,
      query: to.query, 
    });
  }
  next();
});

export default router;
