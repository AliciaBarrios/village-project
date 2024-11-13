//Obtención data para las categorías
import data from '../data.json';

//Importación imágenes
import imgCanVirgili from '../assets/img_can_virgili.jpg';
import imgCasal from '../assets/img_casal.jpeg';
import imgFontMoreu from '../assets/img_font_moreu.jpg';
import imgAndreu from '../assets/img_andreu.jpg';
import imgFogonsXeremell from '../assets/img_fogons_xeremell.jpg';
import imgDolmen from '../assets/img_dolmen.jpg'

export const images = {
    'imgCanVirgili': imgCanVirgili,
    'imgCasal': imgCasal,
    'imgFontMoreu': imgFontMoreu,
    'imgAndreu': imgAndreu,
    'imgFogonsXeremell': imgFogonsXeremell,
    'imgDolmen': imgDolmen
}

function getCategoryItems(category) {
    return data[category];
}
function getById(id,categoryItems) {
    const selectedInterestPoint = categoryItems.find(item => item.id === parseInt(id));
    return selectedInterestPoint;
}

function loadInterestPoint(interestPoint) {
    document.getElementById('breadcrumbs').innerHTML = `
    <a href="./categorias.html" class="nav-link">Categorías</a> > <a href="#" class="nav-link active-link">${interestPoint.title}</a>
    `;
    document.getElementById('title').textContent = interestPoint.title;
    document.getElementById('img').src = images[interestPoint.img];
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
    const interestPoint = getById(idUrl, categoryItems);
    
    loadInterestPoint(interestPoint);
    loadInterestPointByCategory(interestPoint, categoryUrl);
    loadOtherInterestPoints(categoryItems,categoryUrl, idUrl);
}

loadUrlInterestPoint();
