const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

menuIcon.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
});
