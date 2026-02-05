const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Start button
document.getElementById("startBtn").addEventListener("click", () => {
  showPage("p1");
});

// Hidden letter open
document.querySelectorAll(".hint").forEach(hint => {
  hint.addEventListener("click", () => {
    hint.nextElementSibling.classList.remove("hidden");
  });
});

// Next buttons
document.querySelectorAll(".nextBtn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showPage("p" + (index + 2));
  });
});

// Valentine question
document.getElementById("noBtn").addEventListener("click", () => {
  alert("⚠️ Only YES is allowed for this question ❤️");
});

document.getElementById("yesBtn").addEventListener("click", () => {
  showPage("p4");
});

// Replay
document.getElementById("replayBtn").addEventListener("click", () => {
  showPage("p0");
});
