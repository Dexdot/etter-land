// Options
const options = {
  threshold: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};

// Create observer
const observer = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting && item.intersectionRatio >= 0.2) {
      document.documentElement.style.setProperty(
        '--bg',
        item.target.dataset.bg
      );
    }
  });
}, options);

const init = () => {
  if (window.innerWidth <= 500) return false;

  // Start observe
  const elements = document.querySelectorAll('[data-bg]');

  elements.forEach(el => {
    observer.observe(el);
  });
};

document.addEventListener('DOMContentLoaded', init);
