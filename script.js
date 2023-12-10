const toggleMenu = () => {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

const Y = new Date();
let year = document.querySelector("#year");
year.textContent = Y.getFullYear();

