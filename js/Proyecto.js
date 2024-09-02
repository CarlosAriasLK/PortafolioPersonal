const btnAbrirModal1 = document.querySelector('#abrirModal1');
const btnCerrarModal1 = document.querySelector('#cerrarModal1');
const Modal1 = document.querySelector('#modal1');

const btnAbrirModal2 = document.querySelector('#abrirModal2');
const btnCerrarModal2 = document.querySelector('#cerrarModal2');
const Modal2 = document.querySelector('#modal2');

const btnAbrirModal3 = document.querySelector('#abrirModal3');
const btnCerrarModal3 = document.querySelector('#cerrarModal3');
const Modal3 = document.querySelector('#modal3');

btnAbrirModal1.addEventListener("click", () => {
    Modal1.showModal();
})

btnCerrarModal1.addEventListener("click", () => {
    Modal1.close();
})

btnAbrirModal2.addEventListener("click", () => {
    Modal2.showModal();
})

btnCerrarModal2.addEventListener("click", () => {
    Modal2.close();
})

btnAbrirModal3.addEventListener("click", () => {
    Modal3.showModal();
})

btnCerrarModal3.addEventListener("click", () => {
    Modal3.close();
})

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
