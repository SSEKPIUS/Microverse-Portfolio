/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
// Toggle menu on Humberger Button click
const menus = document.querySelectorAll('.toggle');
const menusArray = Array.from(menus);
function toggleMenu() {
  menusArray.forEach((element) => {
    element.classList.toggle('menu');
  });
}
// Hide menu on Click
menusArray.forEach((element) => {
  element.addEventListener('click', () => {
    toggleMenu();
  });
});