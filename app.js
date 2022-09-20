const body = document.querySelector("body");
const moonBtn = document.querySelector("#moon");
const humberger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    humberger.classList.toggle("bg-white");
  });
});
humberger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  humberger.classList.toggle("bg-white");
});

moonBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
