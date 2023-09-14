// Función para abrir el modal
function openModal() {
    document.getElementById('myModal').classList.remove('hidden');
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('myModal').classList.add('hidden');
}

// Función para agregar un nuevo post
function addPost() {
    const form = document.getElementById('postForm');
    const titulo = form.elements.titulo.value;
    const descripcion = form.elements.descripcion.value;
    const ubicacion = form.elements.ubicacion.value;

    // Crear un nuevo elemento de post
    const postElement = document.createElement('div');
    postElement.classList.add('max-w-md', 'rounded', 'overflow-hidden', 'shadow-lg', 'bg-white', 'mb-4');

    // Contenido del post
    postElement.innerHTML = `
        <img src="/images/justinbieber.jpeg" alt="Imagen del objeto perdido" class="w-full">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${titulo}</div>
            <p class="text-gray-700 text-base">${descripcion}</p>
            <p class="text-gray-600 text-base">Ubicación: ${ubicacion}</p>
        </div>
    `;

    // Agregar el nuevo post al contenedor de publicaciones
    const postContainer = document.getElementById('postContainer');
    postContainer.appendChild(postElement);

    // Cerrar el modal
    closeModal();
    
    // Limpiar el formulario
    form.reset();
}

// Asignar la función al envío del formulario
const postForm = document.getElementById('postForm');
postForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar la recarga de la página
    addPost();
});

// Asignar las funciones a los botones
document.getElementById('openModal').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);