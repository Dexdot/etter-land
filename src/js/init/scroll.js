import { isMobileDevice, isMAC } from '@/helpers/detect';

const math = {
  map: function map(x, a, b, c, d) {
    return ((x - a) * (d - c)) / (b - a) + c;
  },
  lerp: function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  },
  getRandomFloat: function getRandomFloat(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }
};

const { body } = document;
let winsize;

const calcWinsize = function calcWinsize() {
  winsize = {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

calcWinsize();
window.addEventListener('resize', calcWinsize);
let docScroll;
let lastScroll;
let scrollingSpeed = 0;

const getPageYScroll = () => {
  docScroll = window.pageYOffset || document.documentElement.scrollTop;
};

window.addEventListener('scroll', getPageYScroll);

class SmoothScroll {
  constructor() {
    this.DOM = {
      main: document.querySelector('.js-scroll')
    };
    this.DOM.scrollable = this.DOM.main.querySelector('.js-scroll-inner');
    this.renderedStyles = {
      translationY: {
        previous: 0,
        current: 0,
        ease: 0.05,
        setValue: function setValue(v) {
          return v || docScroll;
        }
      }
    };
    this.isMAC = isMAC();
    this.setSize();
    this.update();
    this.style();
    this.initEvents();
    requestAnimationFrame(this.render.bind(this));
  }

  update() {
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue();
    }

    this.layout();
  }

  layout() {
    if (this.isMAC) {
      // Top
      if (this.renderedStyles.translationY.previous <= 0) {
        this.renderedStyles.translationY.previous = 0;
      }

      // Bottom
      if (
        this.renderedStyles.translationY.previous >=
        this.DOM.scrollable.scrollHeight - window.innerHeight
      ) {
        this.renderedStyles.translationY.previous =
          this.DOM.scrollable.scrollHeight - window.innerHeight;
      }
    }

    this.DOM.scrollable.style.transform = 'translate3d(0,'.concat(
      -1 * this.renderedStyles.translationY.previous,
      'px,0)'
    );
  }

  setSize() {
    body.style.height = ''.concat(this.DOM.scrollable.scrollHeight, 'px');
  }

  style() {
    this.DOM.main.style.position = 'fixed';
    this.DOM.main.style.width = this.DOM.main.style.height = '100%';
    this.DOM.main.style.top = this.DOM.main.style.left = 0;
    this.DOM.main.style.overflow = 'hidden';
  }

  initEvents() {
    window.addEventListener('resize', this.setSize.bind(this));
  }

  render() {
    scrollingSpeed = Math.abs(docScroll - lastScroll);
    lastScroll = docScroll;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[key].setValue();
      this.renderedStyles[key].previous = math.lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      );
    }

    this.layout();

    requestAnimationFrame(this.render.bind(this));
  }
}

// DOM LOAD
window.addEventListener('load', () => {
  if (isMobileDevice()) return false;

  getPageYScroll();
  lastScroll = docScroll;
  const smoothScroll = new SmoothScroll();

  smoothScroll.setSize();
});
