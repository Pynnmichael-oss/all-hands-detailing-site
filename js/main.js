document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const lightboxTriggers = document.querySelectorAll('[data-lightbox]');

  if (lightboxTriggers.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
      '<button class="lightbox-close" aria-label="Close">&times;</button>' +
      '<div class="lightbox-content"></div>';
    document.body.appendChild(lightbox);

    const lightboxContent = lightbox.querySelector('.lightbox-content');
    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightboxContent.innerHTML = '';
    };

    lightboxTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        lightboxContent.innerHTML = trigger.innerHTML;
        lightbox.classList.add('is-open');
      });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});
