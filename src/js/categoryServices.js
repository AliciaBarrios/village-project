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

function showItems(categoryId) {
    const container = document.getElementById(categoryId);
    const items = data[categoryId];
    
    container.innerHTML = items
    .map(item => `
        <a href="./detalle.html?categoria=${categoryId}&id=${item.id}">
            <div class="targeta">
                <div class="multimedia">
                    <img src="${images[item.img]}" alt="${item.img}">
                </div>
                <div class="texto">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
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

