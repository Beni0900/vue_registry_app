<template>
  <form
    v-if="project && project.name !== undefined"
    @submit.prevent="submitForm"
    class="p-4 max-w-md mx-auto"
  >
    <TextInput
      id="name"
      v-model="project.name"
      label="Projekt neve*"
      placeholder="Elszámolás"
      :error="errors.name"
    />

    <div>
      <label for="description" class="font-semibold mt-4">Leírás</label>
      <textarea
        id="description"
        v-model="project.description"
        rows="4"
        class="border p-2 w-full"
      ></textarea>
      <p v-if="errors.description" class="text-red-600 text-sm">
        {{ errors.description }}
      </p>
    </div>

    <TextInput
      id="startDate"
      v-model="project.startDate"
      label="Kezdési dátum"
      placeholder="2023-10-01"
      type="date"
      :error="errors.startDate"
    />

    <TextInput
      id="budget"
      v-model="project.budget"
      label="Költségvetés*"
      placeholder="221"
      :error="errors.budget"
      type="number"
    />

    <button type="submit" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
      Mentés
    </button>
    <button
      type="button"
      @click="router.push('/projects')"
      class="ml-2 px-4 py-2 rounded border"
    >
      Mégse
    </button>
  </form>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProject } from "../composables/useProject";
import { useValidation } from "../composables/useValidate";
import TextInput from "../components/TextInput.vue";

const route = useRoute();
const router = useRouter();
const projectStore = useProject();
const { errors, validate } = useValidation();

const submitForm = () => {
  if (validate(project)) {
    if (project.id) {
      projectStore.updateProject(project);
      alert("Projekt sikeresen módosítva!");
    } else {
      projectStore.addProject(project);
      alert("Projekt sikeresen hozzáadva!");
    }
    router.push("/projects");
  }
};

const id = route.params.id;

const project = reactive({
  name: "",
  description: "",
  startDate: "",
  budget: 0,
});

if (id) {
  const existingProject = projectStore.projects.find(
    (p) => p.id === Number(id)
  );
  if (existingProject) {
    Object.assign(project, existingProject);
  }
}

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      const existingProject = projectStore.projects.find(
        (p) => p.id === Number(newId)
      );
      if (existingProject) {
        Object.assign(project, existingProject);
      }
    } else {
      Object.assign(project, {
        name: "",
        description: "",
        startDate: "",
        budget: 0,
      });
    }
  }
);
</script>
