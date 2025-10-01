// Componente para mostrar/ocultar el div HTML
AFRAME.registerComponent('show-html', {
  init: function () {
    const infoCard = document.querySelector('#info-card');
    infoCard.style.opacity = 0;

    this.el.addEventListener('targetFound', () => {
      infoCard.style.opacity = 1;
    });

    this.el.addEventListener('targetLost', () => {
      infoCard.style.opacity = 0;
    });
  }
});

// Ajuste dinámico del canvas al viewport real
function resizeScene() {
  const scene = document.querySelector('#scene');
  if (!scene) return;

  const canvas = scene.querySelector('canvas');
  if (canvas) {
    const h = window.innerHeight;
    canvas.style.width = '100vw';
    canvas.style.height = `${h}px`;
  }

  scene.style.width = '100vw';
  scene.style.height = `${window.innerHeight}px`;
}

// Ajuste inicial y cada vez que cambie el tamaño
window.addEventListener('load', resizeScene);
window.addEventListener('resize', resizeScene);
window.addEventListener('orientationchange', resizeScene);

// Esperar a que la escena se cargue completamente antes de enganchar el botón
const sceneEl = document.querySelector('#scene');
sceneEl.addEventListener('loaded', () => {
  const startBtn = document.querySelector('#startButton');

  startBtn.addEventListener('click', async () => {
    // Ocultar botón
    startBtn.style.display = 'none';

    // Mostrar la escena
    sceneEl.style.visibility = 'visible';
    sceneEl.style.opacity = '1';

    // Iniciar MindAR
    await sceneEl.components['mindar-image'].start();

    // Ajustar canvas
    resizeScene();
  });
});
