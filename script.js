// Simple lightbox functionality for the image previews
document.querySelectorAll('.artifact-images img').forEach(image => {
  image.addEventListener('click', (event) => {
    const imgSrc = event.target.src;
    const modal = document.createElement('div');
    modal.classList.add('lightbox');
    modal.innerHTML = `<img src="${imgSrc}" alt="Artifact Image"><div class="close">X</div>`;
    document.body.appendChild(modal);
    document.querySelector('.close').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});
