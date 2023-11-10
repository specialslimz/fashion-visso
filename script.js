"use strict";
const navButton = document.querySelectorAll(".nav_btns");
const closeBtn = document.querySelector(".close__btns");
const btnOpen = document.querySelector(".login__form__show");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  btnOpen.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  btnOpen.classList.add("hidden");
  overlay.classList.add("hidden");
};

navButton.forEach(function (el) {
  el.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (k) {
  if (k.key === "Escape" && !btnOpen.classList.contains("hidden")) {
    console.log(k);
    closeModal();
  }
});

////media 1024px
const menuOpen = document.querySelector(".open");
const menuClose = document.querySelector(".close");
const menu = document.querySelector(".nav__links");

menuOpen.addEventListener("click", function () {
  menu.style.display = "block";
  menuOpen.style.display = "none";
  menuClose.style.display = "inline-block";
});

menuClose.addEventListener("click", function () {
  menu.style.display = "none";
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});
