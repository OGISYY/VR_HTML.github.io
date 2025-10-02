// ---------------------------
// Consola AR solo disponible en pagina 3
// ---------------------------
const consoleText = document.getElementById("console-text");
const consoleLog = document.getElementById("console-log");

if (consoleLog) consoleLog.style.display = "none";

function arLog(message) {
    if (!consoleLog || !consoleText) {
        console.log("[AR LOG]", message);
        return;
    }
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

arLog("Consola AR lista.");

// ---------------------------
// Set, Get y Traduccion de idioma
// ---------------------------
function setLanguage(lang){
    localStorage.setItem('Lang', lang)
    window.location.href = "2_help.html"
}

function getLanguage(){
    const lang = localStorage.getItem('Lang')
    if (!lang) return 'ca';
    return lang;
}

function applyTranslations(){
    const lang = getLanguage();
    document.querySelectorAll("[data-i18n]").forEach(el =>{
        const key = el.getAttribute("data-i18n");
        el.textContent = getText(lang, key)
    });
}

document.addEventListener("DOMContentLoaded", applyTranslations);

// ---------------------------
// Navegacion entre paginas html
// ---------------------------
function sailPages(page){
    window.location.href = page
}

// ---------------------------
// Canvas adaptativo
// ---------------------------
function resizeCanvasMobile() {
   const canvas = document.querySelector("canvas");
   const sceneEl = document.querySelector("a-scene");
   if (!canvas || !sceneEl) return;

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

const sceneEl = document.querySelector("a-scene");
if (sceneEl) {
    sceneEl.addEventListener("loaded", resizeCanvasMobile);
}
window.addEventListener("resize", resizeCanvasMobile);
window.addEventListener("orientationchange", resizeCanvasMobile);
if (window.visualViewport){
    window.visualViewport.addEventListener("resize", resizeCanvasMobile)
}

// ---------------------------
// Markers con unica ficha html 
// ---------------------------
const fichaHTML = document.getElementById("ficha-html");
const fichaTitulo = document.getElementById("ficha-titulo");
const fichaDescripcion = document.getElementById("ficha-descripcion");

if (fichaHTML) fichaHTML.style.display = "none";

const LANG = getLanguage();

// Array con los IDs de traducción para cada marker
const markerContent = [
    { titulo: "titulo_obj0", descripcion: "descripcion_obj0" },
    { titulo: "titulo_obj1", descripcion: "descripcion_obj1" },
    { titulo: "titulo_obj2", descripcion: "descripcion_obj2" },
    { titulo: "titulo_obj3", descripcion: "descripcion_obj3" },
    { titulo: "titulo_obj4", descripcion: "descripcion_obj4" },
    { titulo: "titulo_obj5", descripcion: "descripcion_obj5" },
    { titulo: "titulo_obj6", descripcion: "descripcion_obj6" },
    { titulo: "titulo_obj7", descripcion: "descripcion_obj7" },
    { titulo: "titulo_obj8", descripcion: "descripcion_obj8" },
    { titulo: "titulo_obj9", descripcion: "descripcion_obj9" },
    { titulo: "titulo_obj10", descripcion: "descripcion_obj10" },
    { titulo: "titulo_obj11", descripcion: "descripcion_obj11" }
    //! Escalable a todos los markers que se necesiten
];

document.querySelectorAll("[id^=marker]").forEach(marker => {
    const index = parseInt(marker.dataset.marker);

    if (!markerContent[index]) return;

    marker.addEventListener("targetFound", () => {
        if (fichaHTML) {
            fichaHTML.style.display = "block";
            fichaTitulo.textContent = getText(LANG, markerContent[index].titulo);
            fichaDescripcion.textContent = getText(LANG, markerContent[index].descripcion);
        }
        arLog(`Marker ${index} encontrado`);
    });

    marker.addEventListener("targetLost", () => {
        if (fichaHTML) fichaHTML.style.display = "none";
        arLog(`Marker ${index} perdido`);
    });
});
