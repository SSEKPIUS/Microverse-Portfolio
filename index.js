/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// Toggle menu on Humberger Button click
const menus = document.querySelectorAll('.toggle');
const menusArray = Array.from(menus);
function toggleMenu() {
  menusArray.forEach((element) => {
    element.classList.toggle('menu');
  });
  document.querySelector('.top-navigation .name span').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-bars').classList.toggle('menu');
  document.querySelector('.top-navigation .name .fa-times').classList.toggle('menu');
  document.querySelector('.top-navigation').classList.toggle('fullHeight')
}
// Hide menu on Click
menusArray.forEach((element) => {
  element.addEventListener('click', () => {
    toggleMenu();
  });
});