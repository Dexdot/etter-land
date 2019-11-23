const set = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

window.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty(
    "--initial-vh",
    `${window.innerHeight * 0.01}px`
  );
  set();
});
window.addEventListener("resize", set);
