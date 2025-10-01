// Ajuste dinámico del canvas al viewport real
function adjustCanvasHeight() {
  const scene = document.querySelector('#scene');
  if (!scene) return;

  const canvas = scene.querySelector('canvas');
  if (canvas) {
    const h = window.innerHeight;
    canvas.style.height = `${h}px`;
    canvas.style.width = '100vw';
    scene.style.height = `${h}px`;
    scene.style.width = '100vw';
  }

  requestAnimationFrame(adjustCanvasHeight);
}

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



// Ejecutar cuando la escena está lista
document.querySelector('#scene').addEventListener('renderstart', () => {
  adjustCanvasHeight();
});
