// Page switching
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// START button
document.getElementById("startBtn").addEventListener("click", () => {
  showPage("p1");
});

// 🔑 EVENT DELEGATION (THIS FIXES YOUR ISSUE)
document.body.addEventListener("click", function (e) {

  // Open hidden letter
  if (e.target.classList.contains("hint")) {
    const msg = e.target.nextElementSibling;
    if (msg && msg.classList.contains("hidden")) {
      msg.classList.remove("hidden");
    }
  }

  // Keep Going buttons
  if (e.target.classList.contains("nextBtn")) {
    const currentPage = e.target.closest(".page");
    const nextId = "p" + (parseInt(currentPage.id.replace("p", "")) + 1);
    showPage(nextId);
  }

  // NO button warning
  if (e.target.id === "noBtn") {
    alert("⚠️ Only YOU are allowed to click YES for this question ❤️");
  }

  // YES button → Anniversary page
  if (e.target.id === "yesBtn") {
    showPage("p4");
  }

  // Replay
  if (e.target.id === "replayBtn") {
    showPage("p0");
  }
});
