import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppProjects from "./pages/AppProjects.vue";
import SingleProject from "./pages/SingleProject.vue";
import NotFound from "./pages/NotFound.vue";
import AppContact from "./pages/AppContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
      meta: { transition: "fade" },
    },
    {
      path: "/projects",
      name: "projects",
      component: AppProjects,
      meta: { transition: "fade" },
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
      meta: { transition: "fade" },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContact,
      meta: { transition: "fade" },
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

export default router;
