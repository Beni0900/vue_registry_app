<template>
  <div>
    <Navbar @navigate="view = $event" />
    <main class="p-6">
      <ProjectList
        v-if="view === 'list'"
        :projects="projects"
        @edit="startEdit"
        @delete="deleteProject"
      />
      <ProjectForm
        v-else
        :project="editedProject"
        @save="saveProject"
        @cancel="cancelEdit"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import ProjectList from "./components/ProjectList.vue";
import ProjectForm from "./components/ProjectForm.vue";

const view = ref("list");
const projects = ref([]);
const editedProject = ref(null);

onMounted(() => {
  const savedProjects = localStorage.getItem("projects");
  projects.value = savedProjects ? JSON.parse(savedProjects) : [];
});

const saveToStorage = () => {
  localStorage.setItem("projects", JSON.stringify(projects.value));
};

const saveProject = (project) => {
  if (editedProject.value) {
    const index = projects.value.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      projects.value[index] = project;
    }
    alert("Projekt sikeresen módosítva!");
  } else {
    project.id = Date.now();
    projects.value.push(project);
    alert("Projekt sikeresen hozzáadva!");
  }
  saveToStorage();
  editedProject.value = null;
  view.value = "list";
};

const startEdit = (project) => {
  editedProject.value = { ...project };
  view.value = "form";
};

const cancelEdit = () => {
  editedProject.value = null;
  view.value = "list";
};

const deleteProject = (id) => {
  projects.value = projects.value.filter((p) => p.id !== id);
  saveToStorage();
  alert("Projekt sikeresen törölve!");
};
</script>
