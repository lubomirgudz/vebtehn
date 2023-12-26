document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
