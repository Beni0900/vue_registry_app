<template>
  <div class="w-full flex justify-center my-4">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Keresés név szerint..."
      class="border p-2 w-1/2"
    />
  </div>
  <ProjectTable
    :projects="filteredProjects"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>

<script setup>
import { defineProps, ref } from "vue";
import ProjectTable from "../components/ProjectTable.vue";
import { useProject } from "../composables/useProject";
import { useFilters } from "../composables/useFilters";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

const router = useRouter();
const searchTerm = ref("");
const projectStore = useProject();
const { projects } = storeToRefs(projectStore);

const { filteredProjects } = useFilters(projects, searchTerm);

const handleEdit = (id) => {
  router.push({ name: "editProject", params: { id: id } });
};

const handleDelete = (id) => {
  if (confirm("Biztosan törölni szeretnéd a projektet?")) {
    projectStore.deleteProject(id);
  }
};
</script>
