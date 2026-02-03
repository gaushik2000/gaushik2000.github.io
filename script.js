document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const welcome = document.getElementById("welcome");
  const story = document.getElementById("story");

  startBtn.addEventListener("click", () => {
    welcome.classList.remove("active");
    story.classList.add("active");
  });
});
