<template>
  <div class="w-full flex justify-center my-4">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Keresés név szerint..."
      class="border p-2 w-1/2"
    />
  </div>
  <div class="p-4 w-full">
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 p-2">Név</th>
          <th class="border border-gray-300 p-2 w-96">Leírás</th>
          <th class="border border-gray-300 p-2">Kezdési dátum</th>
          <th class="border border-gray-300 p-2">Költségvetés</th>
          <th class="border border-gray-300 p-2">Műveletek</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in filteredProjects" :key="project.id">
          <td class="border border-gray-300 p-2 text-center">
            {{ project.name }}
          </td>
          <td class="border border-gray-300 p-2 text-center">
            {{ project.description }}
          </td>
          <td class="border border-gray-300 p-2 text-center">
            {{ formatDate(project.startDate) }}
          </td>
          <td class="border border-gray-300 p-2 text-center">
            {{ formatCurrency(project.budget) }}
          </td>
          <td
            class="border border-gray-300 p-2 flex justify-center items-center"
          >
            <router-link
              :to="{ name: 'editProject', params: { id: project.id } }"
            >
              <button class="bg-yellow-400 px-2 py-1 rounded mr-2">
                Módosít
              </button>
            </router-link>
            <button
              @click="handleDelete(project.id)"
              class="bg-red-500 px-2 py-1 rounded text-white"
            >
              Töröl
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProjectStorage } from "../composables/useProject";
import { formatCurrency, formatDate } from "../utils";

const projectStore = useProjectStorage();

const searchTerm = ref("");

const filteredProjects = computed(() => {
  if (!searchTerm.value) return projectStore.projects.value;
  return projectStore.projects.value.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const handleDelete = (id) => {
  if (confirm("Biztosan törölni szeretnéd a projektet?")) {
    projectStore.deleteProject(id);
  }
};
</script>
