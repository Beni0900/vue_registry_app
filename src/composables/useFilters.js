import { computed } from "vue";

export function useFilters(projects, searchTerm) {
  const filteredProjects = computed(() => {
    if (!searchTerm.value) return projects.value;
    return projects.value.filter((project) =>
      project.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });

  return { filteredProjects };
}
