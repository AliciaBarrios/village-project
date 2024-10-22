const pathname = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    if(link.getAttribute('href') === pathname) {
        link.classList.add('active-link');
    }
})
