import Test from "@/components/test";

window.addEventListener("DOMContentLoaded", () => {
  const testNode = $.qs(".test");
  if (testNode) {
    const test = new Test(testNode);
  }
});
