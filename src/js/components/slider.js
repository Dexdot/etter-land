// export default class Test {
//   constructor() {
//     this.answers = [];
//     this.slides = $.qsa(".test-item");

//     $.delegate(".js-next", () => {});
//   }
// }

export default class Slider {
  constructor(el) {
    this.DOM = { el };
    this.DOM.slides = Array.from(this.DOM.el.children);
    [this.DOM.active] = this.DOM.slides;

    this.showSlide();

    this.index = 0;
  }

  update(action, i) {
    if (Number.isInteger(i)) {
      // Hide slides
      this.hideSlides();

      // Set new index and active slide
      this.index = i;
      this.DOM.active = this.DOM.slides[this.index];

      // Show active slide
      this.showSlide();

      // Exit
      return true;
    }

    // Hide slides
    this.hideSlides();

    switch (action) {
      case "prev":
        if (this.index <= 0) {
          this.index = this.DOM.slides.length - 1;
        } else {
          this.index = this.index - 1;
        }
        break;
      case "next":
        if (this.index === this.DOM.slides.length - 1) {
          this.index = 0;
        } else {
          this.index = this.index + 1;
        }
        break;

      default:
        break;
    }

    // Set active slide
    this.DOM.active = this.DOM.slides[this.index];

    // Show active slide
    this.showSlide();

    // Exit
    return true;
  }

  prev() {
    this.update("prev");
  }

  next() {
    this.update("next");
  }

  hideSlides() {
    this.DOM.slides.forEach(slide => {
      slide.classList.remove("active");
    });
  }

  showSlide() {
    this.DOM.active.classList.add("active");
  }
}
