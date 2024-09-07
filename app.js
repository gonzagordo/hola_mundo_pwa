if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/hola_mundo_pwa/sw.js').then(registration => {
            console.log('ServiceWorker registrado con éxito:', registration);
        }).catch(error => {
            console.log('Error en el registro del ServiceWorker:', error);
        });
    });
}

