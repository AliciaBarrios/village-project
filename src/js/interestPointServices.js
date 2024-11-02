//Obtención data para las categorías
import data from '../data.json';

function getCategoryItems(category) {
    return data[category];
}
function getById(id,categoryItems) {
    const selectedInterestPoint = categoryItems.find(item => item.id === parseInt(id));
    return selectedInterestPoint;
}

function loadInterestPoint(interestPoint) {
    document.getElementById('breadcrumbs').innerHTML = `<a href="./categorias.html" class="nav-link">Categorías</a> > <a href="#" class="nav-link active-link">${interestPoint.title}</a>`;
    document.getElementById('title').textContent = interestPoint.title;
    document.getElementById('description').textContent = interestPoint.description;

    const imageUrl = new URL(`../../public/img/${interestPoint.img}`, import.meta.url);
    document.getElementById('img').src = imageUrl;
}


export function loadUrlInterestPoint() {
    const params = new URLSearchParams(window.location.search);
    const idUrl = params.get("id");
    const categoryUrl = params.get("categoria");

    const categoryItems = getCategoryItems(categoryUrl);
    const interestPoint = getById(idUrl, categoryItems);
    
    loadInterestPoint(interestPoint);
}

loadUrlInterestPoint();