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
