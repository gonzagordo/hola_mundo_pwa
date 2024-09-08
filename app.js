if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/hola_mundo_pwa/sw.js').then(registration => {
            console.log('ServiceWorker registrado con éxito:', registration);
        }).catch(error => {
            console.log('Error en el registro del ServiceWorker:', error);
        });
    });
}




//logica de programacion

document.getElementById('pulsador_perimetro').addEventListener('click', function() {
    // URL de la IP local
    const url = 'http://192.168.8.104/APAGA=PERIMETRO';  // 

    // Envío de una solicitud POST a la IP local sin esperar respuesta
    fetch(url, {
        method: 'POST'
    })
    .catch(error => console.error('Error al enviar la solicitud:', error));
});

