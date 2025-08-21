document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Previene el envío por defecto del formulario
    event.preventDefault();

    // Obtiene los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación: verifica si los campos están vacíos
    if (username.trim() === '' || password.trim() === '') {
        alert('Por favor, ingresa tu usuario y contraseña.');
        return; // Detiene la ejecución si algún campo está vacío
    }

    // Si la validación pasa (ambos campos tienen valores)
    // Se toma siempre como válido según la consigna
    alert('Autenticación exitosa. Redireccionando...');

    // Redirecciona al sitio de portada
    window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu sitio de portada
});