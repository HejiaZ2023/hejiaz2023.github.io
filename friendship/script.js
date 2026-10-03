const viewer = document.querySelector('#photo-viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerCaption = document.querySelector('#viewer-caption');
if (viewer && typeof viewer.showModal === 'function') {
  document.querySelectorAll('.photo-link').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      viewerImage.src = link.href;
      viewerImage.alt = link.querySelector('img').alt;
      viewerCaption.textContent = link.dataset.caption;
      viewer.showModal();
      document.body.classList.add('viewer-open');
    });
  });
  viewer.querySelector('button').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => {
    if (event.target === viewer) {
      const bounds = viewer.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
    }
  });
  viewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
}
