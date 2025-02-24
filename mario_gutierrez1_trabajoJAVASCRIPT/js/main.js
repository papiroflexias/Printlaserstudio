document.addEventListener('DOMContentLoaded', function () {
    
    const noticias = [
        {
            titulo: "Lanzamiento del nuevo producto",
            contenido: "Estamos emocionados de anunciar el lanzamiento de nuestro nuevo producto. ¡No te lo pierdas!",
            fecha: "2023-10-01",
            imagen: "img/noticias/grabado1.jpg"
        },
        {
            titulo: "Oferta especial de otoño",
            contenido: "Aprovecha nuestra oferta especial de otoño con descuentos de hasta el 30%.",
            fecha: "2023-09-25",
            imagen: "img/noticias/grabado2.jpg"
        },
        {
            titulo: "Nueva colaboración con diseñadores",
            contenido: "Hemos colaborado con diseñadores internacionales para traerte lo último en tendencias.",
            fecha: "2023-09-20",
            imagen: "img/noticias/grabado3.jpg"
        }
    ];

   
    const noticiasContainer = document.getElementById('carga-noticias');

    
    noticias.forEach(noticia => {
        
        const noticiaElement = document.createElement('div');
        noticiaElement.className = 'noticia';
        noticiaElement.innerHTML = `
            <h3>${noticia.titulo}</h3>
            <img src="${noticia.imagen}" alt="${noticia.titulo}" class="imagen-noticia">
            <p>${noticia.contenido}</p>
            <small>Fecha: ${noticia.fecha}</small>
        `;
        noticiasContainer.appendChild(noticiaElement); 
    });
});