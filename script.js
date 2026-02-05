function goToPage(num) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  document.getElementById(`page-${num}`).classList.add("active");
}

function showMsg(el) {
  el.nextElementSibling.classList.remove("hidden");
}

function wrongChoice() {
  alert("⚠️ Warning!\nOnly you are allowed to click YES for this question ❤️");
}

function restart() {
  goToPage(0);
}
