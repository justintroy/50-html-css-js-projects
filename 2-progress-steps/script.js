const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive =
    currentActive > circles.length ? circles.length : currentActive + 1;

  update();
});

prev.addEventListener("click", () => {
  currentActive = currentActive < 1 ? 1 : currentActive - 1;

  update();
});

const update = () => {
  progress.style.width = `${
    ((currentActive - 1) / (circles.length - 1)) * 100
  }%`;
  prev.disabled = currentActive > 1 ? false : true;
  next.disabled = currentActive >= circles.length ? true : false;
};
