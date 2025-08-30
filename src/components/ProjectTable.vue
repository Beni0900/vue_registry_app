<template>
  <div class="overflow-x-auto w-11/12 mx-auto">
    <table class="min-w-full border-collapse border border-gray-300 mx-auto">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-300 p-2 whitespace-nowrap">Név</th>
          <th class="border border-gray-300 p-2 w-96 whitespace-nowrap">
            Leírás
          </th>
          <th class="border border-gray-300 p-2 whitespace-nowrap">
            Kezdési dátum
          </th>
          <th class="border border-gray-300 p-2 whitespace-nowrap">
            Költségvetés
          </th>
          <th class="border border-gray-300 p-2 whitespace-nowrap">
            Műveletek
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td class="border border-gray-300 p-2 text-center whitespace-nowrap">
            {{ project.name }}
          </td>
          <td
            class="border border-gray-300 p-2 text-center whitespace-normal max-w-xs"
          >
            {{ project.description }}
          </td>
          <td class="border border-gray-300 p-2 text-center whitespace-nowrap">
            {{ formatDate(project.startDate) }}
          </td>
          <td class="border border-gray-300 p-2 text-center whitespace-nowrap">
            {{ formatCurrency(project.budget) }}
          </td>
          <td class="border border-gray-300 p-2 text-center whitespace-nowrap">
            <button
              @click="$emit('edit', project.id)"
              class="bg-yellow-400 px-2 py-1 rounded mr-2"
            >
              Módosít
            </button>
            <button
              @click="$emit('delete', project.id)"
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
import { formatDate, formatCurrency } from "../utils";

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
</script>
