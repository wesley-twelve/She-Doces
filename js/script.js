const menuIcon = document.getElementById("menu-icon");
const menuItems = document.getElementById("menu-items");
const h1 = document.getElementById("text")

menuIcon.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    menuIcon.classList.toggle('active')
    h1.classList.toggle('active')

});
