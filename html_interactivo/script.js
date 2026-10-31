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

// ==========================================
// MÓDULO 5: CÁLCULOS VECTORIALES (SIMILITUD)
// ==========================================

// Función para calcular Distancia Euclidiana
function distanciaEuclidiana(vec1, vec2) {
    if (vec1.length !== vec2.length) return null;
    let suma = 0;
    for (let i = 0; i < vec1.length; i++) {
        suma += Math.pow(vec1[i] - vec2[i], 2);
    }
    return Math.sqrt(suma);
}

// Función para calcular Similitud del Coseno
function similitudCoseno(vec1, vec2) {
    if (vec1.length !== vec2.length) return null;
    let productoPunto = 0;
    let normaV1 = 0;
    let normaV2 = 0;
    
    for (let i = 0; i < vec1.length; i++) {
        productoPunto += vec1[i] * vec2[i];
        normaV1 += vec1[i] * vec1[i];
        normaV2 += vec2[i] * vec2[i];
    }
    
    if (normaV1 === 0 || normaV2 === 0) return 0;
    return productoPunto / (Math.sqrt(normaV1) * Math.sqrt(normaV2));
}

// Función interactiva para el botón del frontend
function ejecutarSimulacionJS() {
    // Simulamos dos vectores de 4 dimensiones simplificados para la prueba local
    const perfilFraude = [1.5, -2.1, 3.4, 1.1];
    const txSospechosa = [1.4, -2.0, 3.1, 0.9];
    
    // Ejecutamos los cálculos
    const dist = distanciaEuclidiana(txSospechosa, perfilFraude);
    const sim = similitudCoseno(txSospechosa, perfilFraude);
    
    // Mostramos el resultado en el HTML
    const cajaResultado = document.getElementById('resultado-js');
    cajaResultado.style.display = 'block'; // Hacemos visible la caja
    cajaResultado.innerHTML = `> CARGANDO VECTORES EN MEMORIA (JS)...<br><br>
[ALERTA] TRANSACCIÓN ENTRANTE SOSPECHOSA DETECTADA:<br>
> Distancia Euclidiana calculada: ${dist.toFixed(4)}<br>
> Similitud Coseno calculada: ${sim.toFixed(4)}<br><br>
<span style="color: #7D0633; font-weight: bold;">> ESTADO: TRANSACCIÓN BLOQUEADA (SIMILITUD > 95%)</span>`;
}