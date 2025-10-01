// Ocultar overlay al inicio
const infoCard = document.querySelector('#info-card');
infoCard.style.display = 'none';

// Componente para mostrar/ocultar el div HTML
AFRAME.registerComponent('show-html', {
  init: function () {
    this.el.addEventListener('targetFound', () => {
      infoCard.style.display = 'block';
    });
    this.el.addEventListener('targetLost', () => {
      infoCard.style.display = 'none';
    });
  }
});

// Ajustar escena y canvas al tamaño real del viewport
function resizeScene() {
  const scene = document.querySelector('#scene');
  if (!scene) return;

  const canvas = scene.querySelector('canvas');
  if (canvas) {
    canvas.style.width = '100vw';
    canvas.style.height = `${window.innerHeight}px`;
  }

  scene.style.width = '100vw';
  scene.style.height = `${window.innerHeight}px`;
}

// Ejecutar resize cuando el canvas esté listo
document.querySelector('#scene').addEventListener('renderstart', () => {
  resizeScene();
});

// Ajuste al cambiar tamaño u orientación
window.addEventListener('resize', resizeScene);
window.addEventListener('orientationchange', resizeScene);

// Botón para iniciar AR
document.querySelector('#startButton').addEventListener('click', () => {
  const sceneEl = document.querySelector('#scene');
  document.querySelector('#startButton').style.display = 'none';
  sceneEl.style.display = 'block';
  sceneEl.components['mindar-image'].start();
});
