document.addEventListener('DOMContentLoaded', () => {
    const promoSection = document.querySelector('#promocion');
    if (promoSection) {
        promoSection.innerHTML = `
            <div class="alert alert-success text-center" role="alert">
                🌟 ¡Promoción especial! Compra cualquier bicicleta y recibe un 10% de descuento en accesorios. 🌟
            </div>
        `;
    }
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        }
    });
});
