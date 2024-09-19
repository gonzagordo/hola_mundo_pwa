// comprobacion de modo stand alone

if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('La aplicación está en modo standalone.');
    // Aquí puedes ejecutar cualquier lógica que dependa de estar en standalone
    alert('la aplicacion esta en modo stand alone');
} else {
    console.log('La aplicación NO está en modo standalone.');
    // Este código se ejecutará si la PWA no está instalada o está corriendo desde el navegador
     alert('la aplicacion esta NOOOO en modo stand alone');
}
// registro del service worker 
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(registration => {
            console.log('ServiceWorker registrado con éxito:', registration);
        }).catch(error => {
            console.log('Error en el registro del ServiceWorker:', error);
        });
    });
}




//logica de programacion

document.getElementById('pulsador_perimetro').addEventListener('click', function() {
    // URL de la IP local
    const url = 'http://192.168.8.104/?encender+zona+=comedor+';  // 

    // Envío de una solicitud POST a la IP local sin esperar respuesta
    fetch(url, {
        method: 'GET',
        mode: 'no-cors'
    })
    .catch(error => console.error('Error al enviar la solicitud:', error));
});

