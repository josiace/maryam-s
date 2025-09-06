// Met en surbrillance le produit sélectionné
function highlightProduct(element) {
    document.querySelectorAll('.product').forEach(function(prod) {
        prod.classList.remove('active');
    });
    element.classList.add('active');
}

// Animation sur le titre
window.onload = function() {
    const title = document.querySelector('header h1');
    title.style.transition = 'color 1s';
    setTimeout(() => {
        title.style.color = '#ffae97ff';
    }, 500);
    // Carrousel d’images
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    window.moveCarousel = function(n) {
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    showSlide(currentSlide);
    // Changement automatique toutes les 5 secondes
    setInterval(() => {
        window.moveCarousel(1);
    }, 5000);
};
