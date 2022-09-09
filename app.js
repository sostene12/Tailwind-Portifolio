const humberger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
humberger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  humberger.classList.toggle("bg-white");
});
