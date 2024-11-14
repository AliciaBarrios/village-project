//Obtención data para las categorías
import data from '../data.json';



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

