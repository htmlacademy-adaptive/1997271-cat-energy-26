let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".header__nav");

nav.classList.remove("header__nav-no-js");

burger.addEventListener("click", function () {
  if (burger.classList.contains("header__burger--closed")) {
    burger.classList.remove("header__burger--closed");
    burger.classList.add("header__burger--opened");
    nav.classList.add("header__nav--opened");
  } else {
    burger.classList.add("header__burger--closed");
    burger.classList.remove("header__burger--opened");
    nav.classList.remove("header__nav--opened");
  }
});
