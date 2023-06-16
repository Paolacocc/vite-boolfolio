import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProjectPage from "./pages/SingleProjectPage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue"
import ContactUsPage from './pages/ContactUsPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: HomePage,
      },
      {
        path: "/projects",
        name: "projects",
        component: ProjectsPage,
      },
      {
        path: "/projects/:slug",
        name: "single-project",
        component: SingleProjectPage,
      },
      {
        path: "/about",
        name: "about",
        component: AboutUsPage,
      },
      {
        path: "/contact",
        name: "contact",
        component: ContactUsPage,
      }
    ],
});
export { router };