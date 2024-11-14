//Obtención data para las categorías
import eventos from '../eventos.json';
import instalaciones from '../instalaciones.json';
import restaurantes from '../restaurantes.json';
import rutas from '../rutas.json';

const data = {
    'eventos': eventos,
    'instalaciones': instalaciones,
    'rutas': rutas,
    'restaurantes': restaurantes
}

//Importación imágenes
import imgCanVirgili from '../assets/img_can_virgili.jpg';
import imgCasal from '../assets/img_casal.jpeg';
import imgFontMoreu from '../assets/img_font_moreu.jpg';
import imgAndreu from '../assets/img_andreu.jpg';
import imgFogonsXeremell from '../assets/img_fogons_xeremell.jpg';
import imgDolmen from '../assets/img_dolmen.jpg';
import imgOlzinelles from '../assets/img_olzinelles.jpg';
import imgPagesia from '../assets/img_pagesia.png';
import imgBaronia from '../assets/img_baronia.jpg';
import imgVallgorguina from '../assets/img_vallgorguina.jpeg';
import imgTio from '../assets/img_tio.jpg';
import imgTourdera from '../assets/img_tourdera.png';
import imgMuseu from '../assets/img_museu.jpg';
import imgDinamic from '../assets/img_dinamic.jpg';
import imgPoliesportiu from '../assets/img_poliesportiu.jpg';

const images = {
    'imgCanVirgili': imgCanVirgili,
    'imgCasal': imgCasal,
    'imgFontMoreu': imgFontMoreu,
    'imgAndreu': imgAndreu,
    'imgFogonsXeremell': imgFogonsXeremell,
    'imgDolmen': imgDolmen,
    'imgOlzinelles': imgOlzinelles,
    'imgPagesia': imgPagesia,
    'imgBaronia': imgBaronia,
    'imgVallgorguina': imgVallgorguina,
    'imgTio': imgTio,
    'imgTourdera': imgTourdera,
    'imgMuseu': imgMuseu,
    'imgDinamic': imgDinamic,
    'imgPoliesportiu': imgPoliesportiu
}

function showItems(categoryId) {
    const container = document.getElementById(categoryId);
    const items = data[categoryId];
    
    container.innerHTML = items
    .map(item => `
        <a href="./detalle?categoria=${categoryId}&id=${item.id}">
            <div class="targeta">
                <div class="multimedia">
                    <img src="${images[item.img]}" alt="${item.img}">
                </div>
                <div class="texto">
                    <h3>${item.title}</h3>
                    <p>${item.shortDescription}</p>
                </div>
            </div>
        </a>
    `)
    .join('');
}
function toggleOptions(categoryId, event) {
    const options = document.getElementById(categoryId);
    const currentContainer = event.currentTarget;
    const icon = currentContainer.querySelector('i');
    
    if (options.style.display === "none" || options.style.display === "") {
        showItems(categoryId);
        options.style.display = "grid";
        icon.classList.add('fa-chevron-up');
        icon.classList.remove('fa-chevron-down');
    } else {
        options.style.display = "none";
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}

window.toggleOptions = toggleOptions;

