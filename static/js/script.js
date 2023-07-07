const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
});


const navList = document.querySelector(".nav-list");

document.querySelector(".hamburger").onclick = () => {
  navList.classList.add("show");
};

document.querySelector(".close").onclick = () => {
  navList.classList.remove("show");
};
