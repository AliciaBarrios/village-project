import data from "../data.json";

const images = {
    'imgPagesia1400Jpg': require('../assets/img-pagesia-1400.jpg'),
    'imgPagesia1240Jpg': require('../assets/img-pagesia-1240.jpg'),
    'imgPagesia984Jpg': require('../assets/img-pagesia-984.jpg'),
    'imgPagesia728Jpg': require('../assets/img-pagesia-728.jpg'),
    'imgPagesia440Jpg': require('../assets/img-pagesia-440.jpg'),
    'imgPagesia1400WebP': require('../assets/img-pagesia-1400.webp'),
    'imgPagesia1240WebP': require('../assets/img-pagesia-1240.webp'),
    'imgPagesia984WebP': require('../assets/img-pagesia-984.webp'),
    'imgPagesia728WebP': require('../assets/img-pagesia-728.webp'),
    'imgPagesia440WebP': require('../assets/img-pagesia-440.webp'),
    'imgFontMoreu1400Jpg': require('../assets/img-font-moreu-1400.jpg'),
    'imgFontMoreu1240Jpg': require('../assets/img-font-moreu-1240.jpg'),
    'imgFontMoreu984Jpg': require('../assets/img-font-moreu-984.jpg'),
    'imgFontMoreu728Jpg': require('../assets/img-font-moreu-728.jpg'),
    'imgFontMoreu440Jpg': require('../assets/img-font-moreu-440.jpg'),
    'imgFontMoreu1400WebP': require('../assets/img-font-moreu-1400.webp'),
    'imgFontMoreu1240WebP': require('../assets/img-font-moreu-1240.webp'),
    'imgFontMoreu984WebP': require('../assets/img-font-moreu-984.webp'),
    'imgFontMoreu728WebP': require('../assets/img-font-moreu-728.webp'),
    'imgFontMoreu440WebP': require('../assets/img-font-moreu-440.webp'),
    'imgAndreu1400Jpg': require('../assets/img-andreu-1400.jpg'),
    'imgAndreu1240Jpg': require('../assets/img-andreu-1240.jpg'),
    'imgAndreu984Jpg': require('../assets/img-andreu-984.jpg'),
    'imgAndreu728Jpg': require('../assets/img-andreu-728.jpg'),
    'imgAndreu440Jpg': require('../assets/img-andreu-440.jpg'),
    'imgAndreu1400WebP': require('../assets/img-andreu-1400.webp'),
    'imgAndreu1240WebP': require('../assets/img-andreu-1240.webp'),
    'imgAndreu984WebP': require('../assets/img-andreu-984.webp'),
    'imgAndreu728WebP': require('../assets/img-andreu-728.webp'),
    'imgAndreu440WebP': require('../assets/img-andreu-440.webp'),
    'imgBaronia1400Jpg': require('../assets/img-baronia-1400.jpg'),
    'imgBaronia1240Jpg': require('../assets/img-baronia-1240.jpg'),
    'imgBaronia984Jpg': require('../assets/img-baronia-984.jpg'),
    'imgBaronia728Jpg': require('../assets/img-baronia-728.jpg'),
    'imgBaronia440Jpg': require('../assets/img-baronia-440.jpg'),
    'imgBaronia1400WebP': require('../assets/img-baronia-1400.webp'),
    'imgBaronia1240WebP': require('../assets/img-baronia-1240.webp'),
    'imgBaronia984WebP': require('../assets/img-baronia-984.webp'),
    'imgBaronia728WebP': require('../assets/img-baronia-728.webp'),
    'imgBaronia440WebP': require('../assets/img-baronia-440.webp'),
    'imgCanVirgili1400Jpg': require('../assets/img-can-virgili-1400.jpg'),
    'imgCanVirgili1240Jpg': require('../assets/img-can-virgili-1240.jpg'),
    'imgCanVirgili984Jpg': require('../assets/img-can-virgili-984.jpg'),
    'imgCanVirgili728Jpg': require('../assets/img-can-virgili-728.jpg'),
    'imgCanVirgili440Jpg': require('../assets/img-can-virgili-440.jpg'),
    'imgCanVirgili1400WebP': require('../assets/img-can-virgili-1400.webp'),
    'imgCanVirgili1240WebP': require('../assets/img-can-virgili-1240.webp'),
    'imgCanVirgili984WebP': require('../assets/img-can-virgili-984.webp'),
    'imgCanVirgili728WebP': require('../assets/img-can-virgili-728.webp'),
    'imgCanVirgili440WebP': require('../assets/img-can-virgili-440.webp'),
    'imgCasal1400Jpg': require('../assets/img-casal-1400.jpg'),
    'imgCasal1240Jpg': require('../assets/img-casal-1240.jpg'),
    'imgCasal984Jpg': require('../assets/img-casal-984.jpg'),
    'imgCasal728Jpg': require('../assets/img-casal-728.jpg'),
    'imgCasal440Jpg': require('../assets/img-casal-440.jpg'),
    'imgCasal1400WebP': require('../assets/img-casal-1400.webp'),
    'imgCasal1240WebP': require('../assets/img-casal-1240.webp'),
    'imgCasal984WebP': require('../assets/img-casal-984.webp'),
    'imgCasal728WebP': require('../assets/img-casal-728.webp'),
    'imgCasal440WebP': require('../assets/img-casal-440.webp'),
    'imgFogonsXeremell1400Jpg': require('../assets/img-xeremell-1400.jpg'),
    'imgFogonsXeremell1240Jpg': require('../assets/img-xeremell-1240.jpg'),
    'imgFogonsXeremell984Jpg': require('../assets/img-xeremell-984.jpg'),
    'imgFogonsXeremell728Jpg': require('../assets/img-xeremell-728.jpg'),
    'imgFogonsXeremell440Jpg': require('../assets/img-xeremell-440.jpg'),
    'imgFogonsXeremell1400WebP': require('../assets/img-xeremell-1400.webp'),
    'imgFogonsXeremell1240WebP': require('../assets/img-xeremell-1240.webp'),
    'imgFogonsXeremell984WebP': require('../assets/img-xeremell-984.webp'),
    'imgFogonsXeremell728WebP': require('../assets/img-xeremell-728.webp'),
    'imgFogonsXeremell440WebP': require('../assets/img-xeremell-440.webp'),
    'imgDinamic1400Jpg': require('../assets/img-dinamic-1400.jpg'),
    'imgDinamic1240Jpg': require('../assets/img-dinamic-1240.jpg'),
    'imgDinamic984Jpg': require('../assets/img-dinamic-984.jpg'),
    'imgDinamic728Jpg': require('../assets/img-dinamic-728.jpg'),
    'imgDinamic440Jpg': require('../assets/img-dinamic-440.jpg'),
    'imgDinamic1400WebP': require('../assets/img-dinamic-1400.webp'),
    'imgDinamic1240WebP': require('../assets/img-dinamic-1240.webp'),
    'imgDinamic984WebP': require('../assets/img-dinamic-984.webp'),
    'imgDinamic728WebP': require('../assets/img-dinamic-728.webp'),
    'imgDinamic440WebP': require('../assets/img-dinamic-440.webp'),
    'imgDolmen1400Jpg': require('../assets/img-dolmen-1400.jpg'),
    'imgDolmen1240Jpg': require('../assets/img-dolmen-1240.jpg'),
    'imgDolmen984Jpg': require('../assets/img-dolmen-984.jpg'),
    'imgDolmen728Jpg': require('../assets/img-dolmen-728.jpg'),
    'imgDolmen440Jpg': require('../assets/img-dolmen-440.jpg'),
    'imgDolmen1400WebP': require('../assets/img-dolmen-1400.webp'),
    'imgDolmen1240WebP': require('../assets/img-dolmen-1240.webp'),
    'imgDolmen984WebP': require('../assets/img-dolmen-984.webp'),
    'imgDolmen728WebP': require('../assets/img-dolmen-728.webp'),
    'imgDolmen440WebP': require('../assets/img-dolmen-440.webp'),
    'imgPoliesportiu1400Jpg': require('../assets/img-poliesportiu-1400.jpg'),
    'imgPoliesportiu1240Jpg': require('../assets/img-poliesportiu-1240.jpg'),
    'imgPoliesportiu984Jpg': require('../assets/img-poliesportiu-984.jpg'),
    'imgPoliesportiu728Jpg': require('../assets/img-poliesportiu-728.jpg'),
    'imgPoliesportiu440Jpg': require('../assets/img-poliesportiu-440.jpg'),
    'imgPoliesportiu1400WebP': require('../assets/img-poliesportiu-1400.webp'),
    'imgPoliesportiu1240WebP': require('../assets/img-poliesportiu-1240.webp'),
    'imgPoliesportiu984WebP': require('../assets/img-poliesportiu-984.webp'),
    'imgPoliesportiu728WebP': require('../assets/img-poliesportiu-728.webp'),
    'imgPoliesportiu440WebP': require('../assets/img-poliesportiu-440.webp'),
    'imgOlzinelles1400Jpg': require('../assets/img-olzinelles-1400.jpg'),
    'imgOlzinelles1240Jpg': require('../assets/img-olzinelles-1240.jpg'),
    'imgOlzinelles984Jpg': require('../assets/img-olzinelles-984.jpg'),
    'imgOlzinelles728Jpg': require('../assets/img-olzinelles-728.jpg'),
    'imgOlzinelles440Jpg': require('../assets/img-olzinelles-440.jpg'),
    'imgOlzinelles1400WebP': require('../assets/img-olzinelles-1400.webp'),
    'imgOlzinelles1240WebP': require('../assets/img-olzinelles-1240.webp'),
    'imgOlzinelles984WebP': require('../assets/img-olzinelles-984.webp'),
    'imgOlzinelles728WebP': require('../assets/img-olzinelles-728.webp'),
    'imgOlzinelles440WebP': require('../assets/img-olzinelles-440.webp'),
    'imgMuseu1400Jpg': require('../assets/img-museu-1400.jpg'),
    'imgMuseu1240Jpg': require('../assets/img-museu-1240.jpg'),
    'imgMuseu984Jpg': require('../assets/img-museu-984.jpg'),
    'imgMuseu728Jpg': require('../assets/img-museu-728.jpg'),
    'imgMuseu440Jpg': require('../assets/img-museu-440.jpg'),
    'imgMuseu1400WebP': require('../assets/img-museu-1400.webp'),
    'imgMuseu1240WebP': require('../assets/img-museu-1240.webp'),
    'imgMuseu984WebP': require('../assets/img-museu-984.webp'),
    'imgMuseu728WebP': require('../assets/img-museu-728.webp'),
    'imgMuseu440WebP': require('../assets/img-museu-440.webp'),
    'imgTio1400Jpg': require('../assets/img-tio-1400.jpg'),
    'imgTio1240Jpg': require('../assets/img-tio-1240.jpg'),
    'imgTio984Jpg': require('../assets/img-tio-984.jpg'),
    'imgTio728Jpg': require('../assets/img-tio-728.jpg'),
    'imgTio440Jpg': require('../assets/img-tio-440.jpg'),
    'imgTio1400WebP': require('../assets/img-tio-1400.webp'),
    'imgTio1240WebP': require('../assets/img-tio-1240.webp'),
    'imgTio984WebP': require('../assets/img-tio-984.webp'),
    'imgTio728WebP': require('../assets/img-tio-728.webp'),
    'imgTio440WebP': require('../assets/img-tio-440.webp'),
    'imgVallgorguina1400Jpg': require('../assets/img-vallgorguina-1400.jpg'),
    'imgVallgorguina1240Jpg': require('../assets/img-vallgorguina-1240.jpg'),
    'imgVallgorguina984Jpg': require('../assets/img-vallgorguina-984.jpg'),
    'imgVallgorguina728Jpg': require('../assets/img-vallgorguina-728.jpg'),
    'imgVallgorguina440Jpg': require('../assets/img-vallgorguina-440.jpg'),
    'imgVallgorguina1400WebP': require('../assets/img-vallgorguina-1400.webp'),
    'imgVallgorguina1240WebP': require('../assets/img-vallgorguina-1240.webp'),
    'imgVallgorguina984WebP': require('../assets/img-vallgorguina-984.webp'),
    'imgVallgorguina728WebP': require('../assets/img-vallgorguina-728.webp'),
    'imgVallgorguina440WebP': require('../assets/img-vallgorguina-440.webp'),
    'imgTourdera1400Jpg': require('../assets/img-tourdera-1400.jpg'),
    'imgTourdera1240Jpg': require('../assets/img-tourdera-1240.jpg'),
    'imgTourdera984Jpg': require('../assets/img-tourdera-984.jpg'),
    'imgTourdera728Jpg': require('../assets/img-tourdera-728.jpg'),
    'imgTourdera440Jpg': require('../assets/img-tourdera-440.jpg'),
    'imgTourdera1400WebP': require('../assets/img-tourdera-1400.webp'),
    'imgTourdera1240WebP': require('../assets/img-tourdera-1240.webp'),
    'imgTourdera984WebP': require('../assets/img-tourdera-984.webp'),
    'imgTourdera728WebP': require('../assets/img-tourdera-728.webp'),
    'imgTourdera440WebP': require('../assets/img-tourdera-440.webp')
}

function showItems(categoryId) {
    const container = document.getElementById(categoryId);
    const items = data[categoryId];
    
    container.innerHTML = items
    .map(item => `
        <a href="./detalle?categoria=${categoryId}&id=${item.id}">
            <div class="targeta">
                <div class="multimedia img-gradient">
                    <picture>
                     <!-- Versión WebP para navegadores modernos -->
                        <source 
                            srcset="
                            ${images[item.img440WebP]},
                            ${images[item.img728WebP]} 1.65x,
                            ${images[item.img984WebP]} 2.2x,
                            ${images[item.img1240WebP]} 2.8x,
                            ${images[item.img1400WebP]} 3x
                            " 
                            type="image/webp" 
                        />
                    <!-- Fallback JPG para navegadores antiguos -->
                        <img 
                            class="img-gradient"
                            src="${images[item.img1240Jpg]}" 
                            alt="${item.alt}"
                            loading="lazy"
                            srcset="
                            ${images[item.img440Jpg]}
                            ${images[item.img728Jpg]} 1.65x,
                            ${images[item.img984Jpg]} 2.2x,
                            ${images[item.img1240Jpg]} 2.8x,
                            ${images[item.img1400Jpg]} 3x,
                            "
                        />
                    </picture>
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
    document.getElementById('img').innerHTML = `
    <!-- Versión WebP para navegadores modernos -->
    <source 
        srcset="
        ${images[interestPoint.img440WebP]} 440w,
        ${images[interestPoint.img728WebP]} 728w,
        ${images[interestPoint.img984WebP]} 984w,
        ${images[interestPoint.img1240WebP]} 1240w,
        ${images[interestPoint.img1400WebP]} 1400w
        " 
        sizes="
        (max-width: 480px) 440px,
        (max-width: 768px) 728px,
        (max-width: 1024px) 984px,
        (max-width: 1280px) 1240px,
        1400px"

        type="image/webp" 
    />
    <!-- Fallback JPG para navegadores antiguos -->
    <img 
        src="${images[interestPoint.img1240Jpg]}" 
        alt="${interestPoint.alt}"
        srcset="
        ${images[interestPoint.img440Jpg]} 440w,
        ${images[interestPoint.img728Jpg]} 728w,
        ${images[interestPoint.img984Jpg]} 984w,
        ${images[interestPoint.img1240Jpg]} 1240w,
        ${images[interestPoint.img1400Jpg]} 1400w
        "
        sizes="
        (max-width: 480px) 440px,
        (max-width: 768px) 728px,
        (max-width: 1024px) 984px,
        (max-width: 1280px) 1240px,
        1400px"
    />
    `;
    
    preloadImage(`https://vallgorguina-project.netlify.app/${images[interestPoint.img440Jpg]}`); 
    preloadImage(`https://vallgorguina-project.netlify.app/${images[interestPoint.img728WebP]}`); 
    preloadImage(`https://vallgorguina-project.netlify.app/${images[interestPoint.img984Jpg]}`); 
    preloadImage(`https://vallgorguina-project.netlify.app/${images[interestPoint.img1240Jpg]}`); 
    preloadImage(`https://vallgorguina-project.netlify.app/${images[interestPoint.img1400Jpg]}`); 

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

function preloadImage(url) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'image';
    document.head.appendChild(link);
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



