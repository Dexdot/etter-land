import autosize from "autosize";
import Slider from "@/components/slider";

const LIMIT = {
  minutes: 20, // 20 minutes
  seconds: 1200, // 20 minutes * 60
  percent: 12 // 1200 seconds / 100%
};

const updateAutosize = () => {
  $.each(".textarea", el => autosize.update(el));
};

class Test {
  constructor() {
    this.form = $.qs(".test");
    this.submitButton = $.qs("#submit-test");
    this.textNode = $.qs(".timer__text");
    this.circlePath = $.qs(".timer path");

    this.slider = new Slider(this.form);
    this.timerID = 0;

    const { hash } = window.location;
    this.startTimestamp = hash ? window.parseInt(hash.slice(1)) : 1574555393232;
    this.currentTimestamp = Date.now();
    this.secondsFromStart =
      (this.currentTimestamp - this.startTimestamp) / 1000;
    this.minutesFromStart = parseInt(this.secondsFromStart / 60, 10);

    if (this.minutesFromStart < LIMIT.minutes) {
      this.minutes = LIMIT.minutes - this.minutesFromStart;
      this.seconds = parseInt(LIMIT.seconds - this.secondsFromStart, 10);
    } else {
      this.minutes = LIMIT.minutes;
      this.seconds = this.minutes * 60;
    }

    this.setup();
  }

  setup() {
    this.startTimer();

    // Next slider
    $.delegate(".js-next", () => {
      this.slider.next();
      updateAutosize();
    });

    // On form submit
    this.form.addEventListener("submit", e => {
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
    const minutesPrefix = this.minutes < 10 ? "0" : "";
    const secondsPrefix = seconds < 10 ? "0" : "";
    const resultStr = `${minutesPrefix}${this.minutes}:${secondsPrefix}${seconds}`;

    // Timer text
    this.textNode.textContent = resultStr;

    // Svg progress
    this.circlePath.setAttribute(
      "stroke-dasharray",
      `${100 - this.seconds / LIMIT.percent} 100`
    );

    if (this.seconds === 0) {
      window.clearTimeout(this.timerID);
      this.submit();
    } else {
      this.timerID = setTimeout(this.startTimer.bind(this), 1000);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const test = new Test();
});
