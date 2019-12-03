import autosize from 'autosize';
import Slider from '@/components/slider';

const LIMIT = {
  minutes: 20, // 20 minutes
  seconds: 1200, // 20 minutes * 60
  percent: 12 // 1200 seconds / 100%
};

const updateAutosize = () => {
  $.each('.textarea', el => autosize.update(el));
};

export default class Test {
  constructor(el) {
    this.form = el;
    this.submitButton = $.qs('#submit-test');
    this.textNode = $.qs('.timer__text');
    this.circlePath = $.qs('.timer path');

    this.slider = new Slider(this.form);
    this.timerID = 0;

    this.finalTime = parseInt($.qs('[data-value]').dataset.value, 10) * 1000;
    this.currentTimestamp = Date.now();

    this.deltaSec = (this.finalTime - this.currentTimestamp) / 1000;
    this.deltaMin = parseInt(this.deltaSec / 60, 10);

    if (this.deltaSec < LIMIT.seconds && this.deltaSec > 0) {
      this.minutes = this.deltaMin;
      this.seconds = this.deltaSec;
      this.startTimer();
    } else {
      this.textNode.textContent = '00:00';
      this.circlePath.setAttribute('stroke-dasharray', '100 100');
      this.circlePath.classList.add('red');
    }

    this.setup();
  }

  setup() {
    // Next slider
    $.delegate('.js-next', () => {
      const question = $.qs('.question', this.slider.DOM.active);
      const translate = $.qs('.translate', this.slider.DOM.active);

      // Valid
      let valid;

      if (question) {
        valid = !!$.qs('input:checked', question);
      }
      if (translate) {
        valid = $.qsa('textarea:not(:disabled)', translate).every(
          textarea => textarea.validity.valid
        );
      }

      if (!valid) return false;

      if (this.slider.index === this.slider.DOM.slides.length - 1) {
        this.form.submit();
      } else {
        this.slider.next();
        updateAutosize();

        if (this.slider.index === this.slider.DOM.slides.length - 1) {
          const text = $.qs('[data-last-text]').dataset.lastText;
          $.each('.js-next', btn => {
            btn.textContent = text;
          });
        }
      }
    });
  }

  startTimer() {
    this.seconds -= 1;
    this.minutes = parseInt(this.seconds / 60, 10);

    const seconds = parseInt(this.seconds % 60, 10);
    const minutesPrefix = this.minutes < 10 ? '0' : '';
    const secondsPrefix = seconds < 10 ? '0' : '';
    const resultStr = `${minutesPrefix}${this.minutes}:${secondsPrefix}${seconds}`;

    // Timer text
    this.textNode.textContent = resultStr;

    // Svg progress
    this.circlePath.setAttribute(
      'stroke-dasharray',
      `${100 - this.seconds / LIMIT.percent} 100`
    );

    if (parseInt(this.seconds, 10) === 0) {
      window.clearTimeout(this.timerID);
      this.circlePath.classList.add('red');
    } else {
      this.timerID = setTimeout(this.startTimer.bind(this), 1000);
    }
  }
}
