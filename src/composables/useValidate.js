import { reactive } from "vue";

export function useValidation() {
  const errors = reactive({});

  const rules = {
    name: (value) => (value && value.trim() !== "") || "Név megadása kötelező",
    description: (value) =>
      (value && value.trim() !== "") || "Leírás megadása kötelező",
    startDate: (value) =>
      (value && value.trim() !== "") || "Dátum megadása kötelező",
    budget: (value) =>
      value > 0 || "Költségvetésnek pozitív számnak kell lennie",
  };

  function validate(project) {
    let valid = true;
    for (const field in rules) {
      const rule = rules[field];
      const result = rule(project[field]);
      if (result !== true) {
        errors[field] = result;
        valid = false;
      } else {
        errors[field] = "";
      }
    }
    return valid;
  }

  return { errors, validate };
}
