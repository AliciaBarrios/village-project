import '@fortawesome/fontawesome-free/css/all.min.css';

//código para marcar la opción de navegación donde se encuentra el usuario en cada momento
const pathname = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if(link.getAttribute('href') === pathname) {
        link.classList.add('active-link');
    }
});

//Función onclick redirección
window.redirect = function(page) {
    window.location.href=`${page}`;
}