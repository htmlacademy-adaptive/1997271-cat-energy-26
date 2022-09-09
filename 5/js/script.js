const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");

header.classList.remove("no-js");
burger.addEventListener("click", () => header.classList.toggle("is-open"));
