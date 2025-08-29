export const formatDate = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("hu-HU").format(new Date(date));
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    minimumFractionDigits: 0,
  }).format(value);
};
