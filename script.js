function goToPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  if (num === 1) document.getElementById("day1").classList.add("active");
  else document.getElementById("day" + num)?.classList.add("active");
  if (num === 8) document.getElementById("question").classList.add("active");
}

const quotes = {
  rose: "Happy Rose Day 🌹 You are the most beautiful rose in my life 💖",
  propose: "Happy Propose Day 💌 Falling for you was destiny ❤️",
  chocolate: "Happy Chocolate Day 🍫 You are my sweetest addiction",
  teddy: "Happy Teddy Day 🧸 This teddy carries my hugs",
  promise: "Happy Promise Day 🤞 I choose you forever",
  hug: "Happy Hug Day 🤗 Your hugs are my safe place",
  kiss: "Happy Kiss Day 😘 You melt my heart"
};

function showQuote(id) {
  document.getElementById(id).innerText = quotes[id];
}

function hateNo() {
  alert("⚠️ Only you are allowed to click YES for this question 😌❤️");
}

function hateYes() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("final").classList.add("active");
}

function restart() {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("welcome").classList.add("active");
}
