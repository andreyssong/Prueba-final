// Función para añadir imágenes a "Mi Lista" y almacenarlas en LocalStorage
function agregarMiLista(imagenSrc) {
    // Recuperar las imágenes existentes en LocalStorage
    let miLista = JSON.parse(localStorage.getItem('miLista')) || [];

    // Agregar la nueva imagen
    if(miLista.includes(imagenSrc)){
        alert("Ya existe")
    }else{
        miLista.push(imagenSrc);
        alert("¡Imagen añadida a Mi Lista!");
    }
    // Guardar la lista actualizada en LocalStorage
    localStorage.setItem('miLista', JSON.stringify(miLista));

    // Confirmación visual (opcional)

}

// Función para cargar imágenes de "Mi Lista" en la página correspondiente
function cargarMiLista() {
    const listaContenedor = document.querySelector('#mi-lista-contenedor');
    let miLista = JSON.parse(localStorage.getItem('miLista')) || [];

    // Limpiar el contenedor
    listaContenedor.innerHTML = '';

    // Añadir cada imagen almacenada en LocalStorage
    miLista.forEach(imagenSrc => {
        const nuevoItem = document.createElement('div');
        nuevoItem.classList.add('lista-item');
        nuevoItem.innerHTML = `<img src="${imagenSrc}" alt="Mi Lista">`;
        listaContenedor.appendChild(nuevoItem);
    });
}

// Llama a cargarMiLista() automáticamente cuando se carga la página "Mi Lista"
if (window.location.pathname.includes('MiLista.html')) {
    cargarMiLista();
}

// Función para mover el carrusel
let posicionActual = 0;

function moverCarrusel(direccion) {
    const carruselItems = document.querySelector('.carrusel-items');
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    // Calcula la nueva posición
    posicionActual += direccion;

    // Lógica para mover en bucle
    if (posicionActual < 0) {
        posicionActual = totalItems - 1;
    } else if (posicionActual >= totalItems) {
        posicionActual = 0;
    }

    // Desplaza el carrusel
    const desplazamiento = -posicionActual * 50; // Asumiendo 100% de ancho por ítem
    carruselItems.style.transform = `translateX(${desplazamiento}%)`;
}