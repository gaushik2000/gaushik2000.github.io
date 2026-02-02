const questions = [
  "Hey 🐰 ready for a small Zootopia-style game? 💙",
  "In a city of animals… I found YOU 🦊",
  "You’re my favorite plot twist ✨",
  "Like Nick & Judy… we became a team 🤝",
  "Happy Love Anniversary ❤️"
];

let index = 0;

function nextQ() {
  index++;
  if (index < questions.length) {
    document.getElementById("text").innerText = questions[index];
  }
}
