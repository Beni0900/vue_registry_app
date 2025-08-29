<template>
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
      <tr v-for="project in projects" :key="project.id">
        <td class="border border-gray-300 p-2 text-center">
          {{ project.name }}
        </td>
        <td class="border border-gray-300 p-2 text-center">
          {{ project.description }}
        </td>
        <td class="border border-gray-300 p-2 text-center">
          {{ project.startDate }}
        </td>
        <td class="border border-gray-300 p-2 text-center">
          {{ project.budget }} Ft
        </td>
        <td class="border border-gray-300 p-2 text-center">
          <button
            @click="$emit('edit', project)"
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
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["edit", "delete"]);
</script>
