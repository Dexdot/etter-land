import init from "autosize";

const initAutosize = () => {
  $.each(".textarea", el => {
    init(el);
  });
};

window.addEventListener("DOMContentLoaded", initAutosize);
