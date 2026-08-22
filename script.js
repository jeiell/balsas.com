document.addEventListener('DOMContentLoaded', () => {
  // 1. Rolar suavemente ao clicar nos links de navegação do Hero
  const navLinks = document.querySelectorAll('.hero-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 2. Lógica do Modal de Vídeos (Reels / TikTok)
  const videoTriggers = document.querySelectorAll('.video-trigger');
  const modal = document.getElementById('videoModal');
  const closeModal = document.getElementById('closeModal');

  const modalImg = document.getElementById('modalImg');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');

  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const title = trigger.getAttribute('data-title');
      const category = trigger.getAttribute('data-category');
      const desc = trigger.getAttribute('data-desc');
      const img = trigger.getAttribute('data-img');

      modalTitle.textContent = title;
      modalCategory.textContent = category;
      modalDesc.textContent = desc;
      modalImg.src = img;

      modal.classList.add('active');
    });
  });

  // Fechar o modal
  closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  // Fechar ao clicar fora da caixa do vídeo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});