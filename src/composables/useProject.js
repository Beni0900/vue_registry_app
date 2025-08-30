import { defineStore } from "pinia";
import { ref } from "vue";
import Project from "../model/Project";

export const useProject = defineStore("projectStore", () => {
  const projects = ref(JSON.parse(localStorage.getItem("projects") || "[]"));

  function saveProjects() {
    localStorage.setItem("projects", JSON.stringify(projects.value));
  }

  function addProject(project) {
    const newProject = new Project({
      ...project,
      id: Date.now(),
    });
    projects.value.push(newProject);
    saveProjects();
  }

  function updateProject(updatedProject) {
    const index = projects.value.findIndex((p) => p.id === updatedProject.id);
    if (index !== -1) {
      projects.value[index] = updatedProject;
      saveProjects();
    }
  }

  function deleteProject(id) {
    projects.value = projects.value.filter((p) => p.id !== id);
    saveProjects();
  }

  return { projects, addProject, updateProject, deleteProject };
});
