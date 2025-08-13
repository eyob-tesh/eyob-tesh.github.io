const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

// footer animation on scroll
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

// Start observing the footer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer__container');
    if (footer) {
        footerObserver.observe(footer);
    }
});
