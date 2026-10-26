function mostrarSeccion(evento, idSeccion) {
    // 1. Ocultar todos los módulos
    const secciones = document.querySelectorAll('section');
    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-activa');
        seccion.classList.add('seccion-oculta');
    });

    // 2. Mostrar únicamente la sección seleccionada
    const seccionSeleccionada = document.getElementById(idSeccion);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.remove('seccion-oculta');
        seccionSeleccionada.classList.add('seccion-activa');
    }

    // 3. Quitar el estado 'active' (botón hundido) de todos los botones
    const botones = document.querySelectorAll('.nav-btn');
    botones.forEach(btn => {
        btn.classList.remove('active');
    });

    // 4. Agregar el estado 'active' al botón que el usuario acaba de presionar
    if (evento && evento.currentTarget) {
        evento.currentTarget.classList.add('active');
    }
}