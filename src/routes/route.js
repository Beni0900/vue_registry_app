import { createRouter, createWebHistory } from "vue-router";
import ProjectsList from "../views/ProjectList.vue";
import ProjectFields from "../views/ProjectFields.vue";

const routes = [
  { path: "/projects", component: ProjectsList },
  { path: "/projects/new", component: ProjectFields },
  {
    path: "/projects/:id/edit",
    name: "editProject",
    component: ProjectFields,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
