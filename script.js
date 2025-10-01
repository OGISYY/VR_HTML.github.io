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

const marker0 = document.querySelector("#marker0");

marker0.addEventListener("targetFound", () => {
  fichaHTML.style.display = "block";
  arLog("Target 0 detectado correctamente");
});

marker0.addEventListener("targetLost", () => {
  fichaHTML.style.display = "none";
  arLog("Target 0 perdido");
});

// ---------------------------
// Ajuste del canvas
// ---------------------------
function resizeCanvasMobile() {
   const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // En móvil usar visualViewport si existe
    const width = window.innerWidth;
    const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    if (sceneEl.renderer && sceneEl.camera) {
        sceneEl.renderer.setSize(width, height, false);
        sceneEl.camera.aspect = width / height;
        sceneEl.camera.updateProjectionMatrix();
    }

    arLog(`Canvas ajustado a ${width}x${height}`);
}




// Ajustar automáticamente al cambiar tamaño de ventana
sceneEl.addEventListener("loaded", resizeCanvasMobile);
window.addEventListener("resize", resizeCanvasMobile);
window.addEventListener("orientationchange", resizeCanvasMobile)

if (window.visualViewport){
	window.visualViewport.addEventListener("resize", resizeCanvasMobile)
}

