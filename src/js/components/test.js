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

    this.finalTime = parseInt($.qs('[data-value]').dataset.value, 10);
    this.currentTimestamp = Date.now();

    this.deltaSec = (this.finalTime - this.currentTimestamp) / 1000;
    this.deltaMin = parseInt(this.deltaSec / 60, 10);

    if (this.deltaSec < LIMIT.seconds && this.deltaSec > 0) {
      this.minutes = this.deltaMin;
      this.seconds = this.deltaSec;
    } else {
      this.minutes = LIMIT.minutes;
      this.seconds = this.minutes * 60;
    }

    this.setup();
  }

  setup() {
    this.startTimer();

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

      if (valid) {
        this.slider.next();
        updateAutosize();
      }
    });

    // On form submit
    this.form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(this.form);

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      return false;
    });
  }

  submit() {
    this.submitButton.click();
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
      this.submit();
    } else {
      this.timerID = setTimeout(this.startTimer.bind(this), 1000);
    }
  }
}
