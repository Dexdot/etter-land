// Options
const options = {
  threshold: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
};

// Create observer
const observer = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting && item.intersectionRatio >= 0.6) {
      document.documentElement.style.setProperty(
        '--bg',
        item.target.dataset.bg
      );
    }
  });
}, options);

// Start observe
const elements = document.querySelectorAll('[data-bg]');

elements.forEach(el => {
  observer.observe(el);
});
