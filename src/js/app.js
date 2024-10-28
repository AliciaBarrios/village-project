
//código para marcar la opción de navegación donde se encuentra el usuario en cada momento
const pathname = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if(link.getAttribute('href') === pathname) {
        link.classList.add('active-link');
    }
});

//Función onclick redirección
window.redirect = function(page) {
    window.location.href=`${page}.html`;
}

import data from '../data.json';

//Obtención data para las categorías
const rutas = data.rutas;
export const restaurantes = data.restaurantes;
const eventos = data.eventos;
const instalaciones = data.instalaciones;

const listaRestaurantes = document.getElementById('restaurantes');
console.log(listaRestaurantes);

for(let restaurante of restaurantes) {
    const img = document.createElement('img');
    img.src = `../src/img/${restaurante.img}`;
    listaRestaurantes.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = restaurante.title;
    listaRestaurantes.appendChild(title);

    const description = document.createElement('p');
    description.textContent = restaurante.description;
    listaRestaurantes.appendChild(description);
}


