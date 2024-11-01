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
    document.getElementById('title').textContent = interestPoint.title;
    document.getElementById('description').textContent = interestPoint.description;
    document.getElementById('img').src = `./img/${interestPoint.img}`;
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