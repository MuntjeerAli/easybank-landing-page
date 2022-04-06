'use strict';

const btnToggle = document.querySelector('.btn-toggle');
const navbar = document.querySelector('.navbar');

btnToggle.addEventListener('click', () => {
    navbar.classList.toggle('mobile');
});