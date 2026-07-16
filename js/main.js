document.addEventListener('DOMContentLoaded', () => {
  // Review cards — rendered from assets/data/reviews.json (SAMPLE data only for
  // now). The JSON mirrors the shape a Google Reviews widget/API response will
  // eventually fill; when a real widget is embedded (see the TODO comment in
  // index.html), this block and the JSON file go away.
  const reviewsGrid = document.querySelector('#reviews-grid[data-reviews-src]');

  if (reviewsGrid) {
    fetch(reviewsGrid.dataset.reviewsSrc)
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error(response.statusText))))
      .then((data) => {
        (data.reviews || []).forEach((review) => {
          const card = document.createElement('blockquote');
          card.className = 'testimonial-card';

          const stars = document.createElement('p');
          stars.className = 'review-stars';
          const rating = Math.max(0, Math.min(5, review.rating || 0));
          stars.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
          stars.setAttribute('aria-label', rating + ' out of 5 stars');

          const quote = document.createElement('p');
          quote.textContent = '"' + review.quote + '"';

          const cite = document.createElement('cite');
          const meta = [review.name, review.location].filter(Boolean).join(', ');
          cite.textContent = '— ' + meta + (review.relativeDate ? ' · ' + review.relativeDate : '');

          card.append(stars, quote, cite);
          reviewsGrid.appendChild(card);
        });
      })
      .catch(() => {
        const fallback = document.createElement('p');
        fallback.textContent = 'Reviews are unavailable right now.';
        reviewsGrid.appendChild(fallback);
      });
  }

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
