const questions = [
  "Hey 🐰💙 Ready for a little Zootopia-style love journey?",
  "In a city full of animals… I somehow found YOU 🦊",
  "Just like Judy, you walked into my life with confidence ✨",
  "And like Nick… I didn’t know I’d fall this hard 😌",
  "Do you remember our early conversations? 💬",
  "Somewhere there… I started smiling for no reason 😊",
  "You slowly became my favorite thought 🫶",
  "Like Zootopia, our story wasn’t perfect at first…",
  "But we learned, grew, and stayed together 🤝",
  "You believed in me when I doubted myself 💙",
  "You made my bad days lighter and good days brighter ☀️",
  "With you, even silence feels comfortable 😌",
  "You are my safe place in this busy city 🌆",
  "If love was a case to solve… I’d choose you every time 🦊🐰",
  "Happy Love Anniversary ❤️ I choose you. Always."
];

let index = 0;

function nextQ() {
  index++;
  if (index < questions.length) {
    document.getElementById("text").innerText = questions[index];
  }
}
