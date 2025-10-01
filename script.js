// ---------------------------
// Selección de elementos
// ---------------------------
const sceneEl = document.querySelector("a-scene");
const fichaHTML = document.getElementById("ficha-html");
const consoleText = document.getElementById("console-text");
const consoleLog = document.getElementById("console-log");

// Inicialmente ocultos
fichaHTML.style.display = "none";
consoleLog.style.display = "none";

// ---------------------------
// Consola AR
// ---------------------------
function arLog(message) {
    consoleLog.style.display = "block";
    const timestamp = new Date().toLocaleTimeString();
    consoleText.innerHTML += `[${timestamp}] ${message}<br>`;
    consoleText.scrollTop = consoleText.scrollHeight;
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
// Eventos MindAR
// ---------------------------
sceneEl.addEventListener("mindar-image-targetFound", (event) => {
    fichaHTML.style.display = "block";
    arLog(`Target encontrado: ${event.detail.targetIndex}`);
});

sceneEl.addEventListener("mindar-image-targetLost", (event) => {
    fichaHTML.style.display = "none";
    arLog(`Target perdido: ${event.detail.targetIndex}`);
});

// ---------------------------
// Ajuste del canvas
// ---------------------------
function resizeCanvas() {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // Forzar tamaño del canvas
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    // Ajuste del renderer y cámara de A-Frame
    if (sceneEl.renderer && sceneEl.camera) {
        sceneEl.renderer.setSize(window.innerWidth, window.innerHeight, false);
        sceneEl.camera.aspect = window.innerWidth / window.innerHeight;
        sceneEl.camera.updateProjectionMatrix();
    }
}



// Ajustar automáticamente al cambiar tamaño de ventana
window.addEventListener("resize", resizeCanvas);
sceneEl.addEventListener("loaded", resizeCanvas);
