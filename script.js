// ---------------------------
// Consola AR
// ---------------------------
const consoleText = document.querySelector("#console-text");

function arLog(message) {
    consoleText.setAttribute("value", consoleText.getAttribute("value") + "\n" + message);
}

// Captura de errores globales
window.onerror = function(message, source, lineno, colno, error) {
    arLog(`ERROR: ${message} en ${source}:${lineno}:${colno}`);
};

window.onunhandledrejection = function(event) {
    arLog(`PROMISE REJECTION: ${event.reason}`);
};

// Mensaje inicial
arLog("Consola AR lista. Escuchando errores...");

// ---------------------------
// Selección de elementos
// ---------------------------
const sceneEl = document.querySelector("a-scene");
const fichaPlano = document.querySelector("#ficha-plano"); // a-plane de la ficha técnica
fichaPlano.setAttribute("visible", "false"); // Oculto por defecto

// ---------------------------
// Eventos MindAR
// ---------------------------
sceneEl.addEventListener("mindar-image-targetFound", (event) => {
    arLog(`Target encontrado: ${event.detail.targetIndex}`);
    fichaPlano.setAttribute("visible", "true");
});

sceneEl.addEventListener("mindar-image-targetLost", (event) => {
    arLog(`Target perdido: ${event.detail.targetIndex}`);
    fichaPlano.setAttribute("visible", "false");
});

sceneEl.addEventListener("loaded", () => {
    arLog("MindAR y escena cargados correctamente.");
    // Ajustar canvas al cargar
    resizeCanvas();
});

// ---------------------------
// Función para ajustar el canvas al tamaño de la pantalla
// ---------------------------
function resizeCanvas() {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
        arLog("Canvas no encontrado todavía.");
        return;
    }

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    // Actualizar tamaño del renderer de A-Frame
    const sceneObj = sceneEl.object3D;
    if (sceneObj && sceneEl.renderer) {
        sceneEl.renderer.setSize(window.innerWidth, window.innerHeight);
        arLog(`Canvas redimensionado a ${window.innerWidth}x${window.innerHeight}`);
    }
}

// Ajustar automáticamente al cambiar tamaño de ventana
window.addEventListener("resize", resizeCanvas);
