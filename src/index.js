import "./styles/main.css";
import "./styles/responsive.css";

const menu = document.querySelector("#menu");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (e) {
  drawer.classList.toggle("open");
  e.stopPropagation();
});

document.addEventListener("click", function () {
  drawer.classList.remove("open");
});
