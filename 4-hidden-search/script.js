const button = document.querySelector(".btn");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  container.classList.toggle("active");
});
