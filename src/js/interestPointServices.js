//Obtención data para las categorías
import data from '../data.json';

//Importación imágenes
import imgCanVirgili from '../assets/img_can_virgili.jpg';
import imgCasal from '../assets/img_casal.jpeg';
import imgFontMoreu from '../assets/img_font_moreu.jpg';
import imgAndreu from '../assets/img_andreu.jpg';
import imgFogonsXeremell from '../assets/img_fogons_xeremell.jpg';

const images = {
    'imgCanVirgili': imgCanVirgili,
    'imgCasal': imgCasal,
    'imgFontMoreu': imgFontMoreu,
    'imgAndreu': imgAndreu,
    'imgFogonsXeremell': imgFogonsXeremell
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
    document.getElementById('description').textContent = interestPoint.description;
    document.getElementById('direction').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${interestPoint.direction}`;
    document.getElementById('phone').innerHTML = `<i class="fas fa-phone-alt"></i> ${interestPoint.phone}`;
    document.getElementById('img').src = images[interestPoint.img];
}
function loadOtherInterestPoints(categoryItems,categoryUrl,idUrl) {
    const container = document.getElementById('related-links');
    let content = '';

    categoryItems.forEach(item => {
        if(item.id.toString() !== idUrl) {
            content += `
                <li><a href="./detalle?categoria=${categoryUrl}&id=${item.id}">${item.title}</a></li>
            `;
        }
    });
    container.innerHTML = content;
}

export function loadUrlInterestPoint() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get("id");
    const categoryUrl = params.get("categoria");

    const categoryItems = getCategoryItems(categoryUrl);
    const interestPoint = getById(idUrl, categoryItems);
    
    loadInterestPoint(interestPoint);
    loadOtherInterestPoints(categoryItems,categoryUrl, idUrl);
}

loadUrlInterestPoint();
