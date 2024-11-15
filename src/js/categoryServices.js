import data from "../data.json";

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

function getCategoryItems(category) {
    return data[category];
}
function getInterestPointById(id,categoryItems) {
    const selectedInterestPoint = categoryItems.find(item => item.id === parseInt(id));
    return selectedInterestPoint;
}

function loadInterestPoint(interestPoint) {
    document.getElementById('breadcrumbs').innerHTML = `
    <a href="./categorias.html" class="nav-link">Categorías</a> > <a href="#" class="nav-link active-link">${interestPoint.title}</a>
    `;
    document.getElementById('title').textContent = interestPoint.title;
    document.getElementById('img').src = images[interestPoint.img];
    document.getElementById('img').alt = interestPoint.img;
    document.getElementById('author').textContent = interestPoint.authorImg;
    document.getElementById('direction').innerHTML = `<p><i class="fas fa-map-marker-alt"></i> ${interestPoint.direction}</p>`;

    // Dividir descripción en parrafos
    const description = interestPoint.description;
    const descriptionContainer = document.getElementById('description');

    for(let paragraph of description) {
        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = paragraph;
        descriptionContainer.appendChild(paragraphElement);
    }
}

function loadInterestPointByCategory(interestPoint, categoryUrl) {
    // Añadimos detalles según categría
    if (categoryUrl === 'restaurantes' || categoryUrl === 'instalaciones') {
        document.getElementById('phone').innerHTML = `<p><i class="fas fa-phone-alt"></i> ${interestPoint.phone}</p>`;

        const scheduleDiv = document.getElementById('schedule');
        const table = document.createElement('table');
        
        const headerRow = table.insertRow();
        headerRow.innerHTML = "<th>Dia</th><th>Horari</th>";
    
        Object.entries(interestPoint.schedule).forEach(([day, hours]) => {
            const row = table.insertRow();
            row.insertCell().textContent = day.charAt(0).toUpperCase() + day.slice(1);
            row.insertCell().textContent = hours;
        });
    
        scheduleDiv.appendChild(table);
    } else if (categoryUrl === 'rutas') {
        document.getElementById('route-details').innerHTML = `
            <p><i class="fas fa-hiking"></i> ${interestPoint.distance}</p>
            <p><i class="fas fa-mountain"></i> ${interestPoint.elevation}</p>
            <p><i class="fas fa-clock"></i> ${interestPoint.time}</p>
        `;
    } else if (categoryUrl === 'eventos') {
        document.getElementById('event-details').innerHTML = `
            <p><i class="fas fa-calendar-alt"></i> ${interestPoint.date}</p>
            <p><i class="fas fa-clock"></i> ${interestPoint.hour}</p>
        `;
    }
}
function loadOtherInterestPoints(categoryItems,categoryUrl,idUrl) {
    const container = document.getElementById('related-links');
    container.innerHTML = categoryItems
    .filter(item => item.id.toString() !== idUrl)
    .map(item => `<li><a href="./detalle?categoria=${categoryUrl}&id=${item.id}">${item.title}</a></li>`)
    .join('');
}

export function loadUrlInterestPoint() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get("id");
    const categoryUrl = params.get("categoria");

    const categoryItems = getCategoryItems(categoryUrl);
    const interestPoint = getInterestPointById(idUrl, categoryItems);
    
    loadInterestPoint(interestPoint);
    loadInterestPointByCategory(interestPoint, categoryUrl);
    loadOtherInterestPoints(categoryItems,categoryUrl, idUrl);
}

loadUrlInterestPoint();

