document.addEventListener('DOMContentLoaded', function () {
   
    const imagenes = [
        { src: 'img/galeria/imagen1.jpg', texto: 'Nuestra Maquina' },
        { src: 'img/galeria/imagen2.jpg', texto: 'Grabado con Pintado' },
        { src: 'img/galeria/imagen3.jpg', texto: 'Fotos en contrachapado' },
        { src: 'img/galeria/imagen4.jpg', texto: 'Llaveros para empresas' },
        { src: 'img/galeria/imagen5.jpg', texto: 'Posavasos para hosteleria' },
        { src: 'img/galeria/imagen6.jpg', texto: 'Llaveros personalizados' }
    ];

    
    const galeriaContainer = document.getElementById('imagenes-galeria');

    
    imagenes.forEach(imagen => {
        const imagenElement = document.createElement('div');
        imagenElement.className = 'imagen-container';
        imagenElement.innerHTML = `
            <img src="${imagen.src}" alt="Grabado láser en madera" class="imagen-galeria">
            <p class="texto-imagen">${imagen.texto}</p>
        `;
        galeriaContainer.appendChild(imagenElement);
    });
});