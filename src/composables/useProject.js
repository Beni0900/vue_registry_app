import { ref, watch } from "vue";
import Project from "../model/Project";

export function useProjectStorage() {
  const projects = ref(JSON.parse(localStorage.getItem("projects") || "[]"));

  watch(
    projects,
    (newProjects) => {
      localStorage.setItem("projects", JSON.stringify(newProjects));
    },
    { deep: true }
  );

  function addProject(project) {
    const newProject = new Project({
      ...project,
      id: Date.now(),
    });
    projects.value.push(newProject);
  }

  function updateProject(updatedProject) {
    const index = projects.value.findIndex((p) => p.id === updatedProject.id);
    if (index !== -1) {
      projects.value[index] = updatedProject;
    }
  }

  function deleteProject(id) {
    projects.value = projects.value.filter((p) => p.id !== id);
  }

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
  };
}
