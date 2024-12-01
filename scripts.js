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
