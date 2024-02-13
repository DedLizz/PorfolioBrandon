document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const pageSize = 3;
    const totalPages = Math.ceil(cards.length / pageSize);

    function showPage(pageNumber) {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.classList.remove('fade-out');
                card.classList.add('fade-in');
                card.style.display = 'block';
            } else {
                card.classList.remove('fade-in');
                card.classList.add('fade-out');
                // Espera a que termine la animación antes de ocultar el elemento
                setTimeout(() => {
                    card.style.display = 'none';
                }, 500);
            }
        });
    }

    function generatePaginationButtons() {
        const paginasContainer = document.querySelector('.paginas');
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            button.addEventListener('click', () => showPage(i));
            paginasContainer.appendChild(button);
        }
    }

    // Mostrar la primera página al cargar la página
    showPage(1);
    // Generar botones de paginación
    generatePaginationButtons();
});