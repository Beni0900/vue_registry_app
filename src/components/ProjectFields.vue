<template>
  <form
    v-if="project && project.name !== undefined"
    @submit.prevent="submitForm"
    class="p-4 max-w-md mx-auto"
  >
    <div>
      <label for="name" class="font-semibold">Projekt neve*</label>
      <input
        id="name"
        v-model="project.name"
        type="text"
        class="border p-2 w-full"
      />
      <p v-if="errors.name" class="text-red-600 text-sm">{{ errors.name }}</p>
    </div>

    <div>
      <label for="description" class="font-semibold mt-4">Leírás</label>
      <textarea
        id="description"
        v-model="project.description"
        rows="4"
        class="border p-2 w-full"
      ></textarea>
    </div>

    <div>
      <label for="startDate" class="font-semibold mt-4">Kezdési dátum</label>
      <input
        id="startDate"
        v-model="project.startDate"
        type="date"
        class="border p-2 w-full"
      />
    </div>

    <div>
      <label for="budget" class="font-semibold mt-4">Költségvetés*</label>
      <input
        id="budget"
        v-model.number="project.budget"
        type="number"
        class="border p-2 w-full"
      />
      <p v-if="errors.budget" class="text-red-600 text-sm">
        {{ errors.budget }}
      </p>
    </div>

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
import { useProjectStorage } from "../composables/useProject";

const route = useRoute();
const router = useRouter();
const projectStore = useProjectStorage();

const submitForm = () => {
  if (validate(project)) {
    if (project.id) {
      projectStore.updateProject(project);
    } else {
      projectStore.addProject(project);
    }
    router.push("/projects");
    setTimeout(() => {
      alert("Projekt sikeresen hozzáadva!");
    }, 200);
  }
};

const errors = reactive({
  name: "",
  budget: "",
});

const validate = () => {
  errors.name = project.name.trim() ? "" : "Név megadása kötelező";
  errors.budget =
    project.budget > 0 ? "" : "Költségvetésnek pozitív számnak kell lennie";
  return !errors.name && !errors.budget;
};

const id = route.params.id;

const project = reactive({
  name: "",
  description: "",
  startDate: "",
  budget: 0,
});

if (id) {
  const existingProject = projectStore.projects.value.find(
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
      const existingProject = projectStore.projects.value.find(
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
