const capitalize = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default capitalize;

export const limitDaysToSeven = (value) => {
  return value > 7 ? 7 : value;
};