function initMap() {
    
    const ubicacionEmpresa = { lat: 40.57511262006383, lng: -3.926513140316583 };

    
    const mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 15, 
        center: ubicacionEmpresa, 
        mapTypeId: 'terrain',
    });

    
    const marcadorEmpresa = new google.maps.Marker({
        position: ubicacionEmpresa,
        map: mapa,
        title: 'Ubicación de la empresa',
    });

    
    

    
    marcadorEmpresa.addListener('click', () => {
        infowindow.open(mapa, marcadorEmpresa);
    });

    
    const direccionesService = new google.maps.DirectionsService();
    const direccionesRenderer = new google.maps.DirectionsRenderer();
    direccionesRenderer.setMap(mapa);

    
    function calcularRuta() {
        const origen = document.getElementById('origen').value;
        const destino = ubicacionEmpresa;

        direccionesService.route(
            {
                origin: origen,
                destination: destino,
                travelMode: 'DRIVING', 
            },
            (response, status) => {
                if (status === 'OK') {
                    direccionesRenderer.setDirections(response);
                } else {
                    alert('No se pudo calcular la ruta. Verifica la dirección de origen.');
                }
            }
        );
    }

    
    const inputOrigen = document.createElement('input');
    inputOrigen.id = 'origen';
    inputOrigen.type = 'text';
    inputOrigen.placeholder = 'Ingresa tu ubicación';
    document.getElementById('mapa').parentNode.insertBefore(inputOrigen, document.getElementById('mapa'));

    
    const botonCalcularRuta = document.createElement('button');
    botonCalcularRuta.textContent = 'Calcular Ruta';
    botonCalcularRuta.onclick = calcularRuta;
    document.getElementById('mapa').parentNode.insertBefore(botonCalcularRuta, document.getElementById('mapa'));
}