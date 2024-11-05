import data from '../data.json';

function showItems(categoryId) {
    const container = document.getElementById(categoryId);
    const items = data[categoryId];
    let content = '';

    console.log(items);

    items.forEach(item => {
        content += `
            <div class="targeta">
                <div class="multimedia">
                    <img src="../assets/img_can_virgili.jpg">
                </div>
                <div class="texto">
                    <a href="./detalle?categoria=${categoryId}&id=${item.id}"><h3>${item.title}</h3></a>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = content;
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

