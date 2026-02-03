/* ---------------- LETTERS ---------------- */

const letters = [
  { title: "Rose Day", msg: "Happy Rose Day! 💖 You are the most beautiful rose in the garden of my life 🌸" },
  { title: "Propose Day", msg: "💌 Happy Propose Day! Falling in love with you was destiny ❤️" },
  { title: "Chocolate Day", msg: "Happy Chocolate Day 🍫 Life is like a box of chocolates and YOU are the sweetest!" },
  { title: "Teddy Day", msg: "🐻 Happy Teddy Day! Every hug is a hug from me" },
  { title: "Promise Day", msg: "🤞 I promise to love you today, tomorrow and forever" },
  { title: "Hug Day", msg: "🤗 Your hugs = my happiness" },
  { title: "Kiss Day", msg: "💋 A kiss from you melts my heart" },
  { title: "Valentine Day", msg: "❤️ Loving you is my greatest commitment" }
];

let openedLetters = 0;

function goToLetters() {
  landing.classList.add("hidden");
  lettersSection.classList.remove("hidden");

  letters.forEach(l => {
    const div = document.createElement("div");
    div.className = "letter";
    div.innerText = l.title;
    div.onclick = () => {
      alert(l.msg);
      div.style.opacity = "0.5";
      div.onclick = null;
      openedLetters++;
      if (openedLetters === letters.length) {
        document.getElementById("goQuestions").classList.remove("hidden");
      }
    };
    lettersContainer.appendChild(div);
  });
}

/* ---------------- QUESTIONS ---------------- */

const questions = [
  {
    question: "Where was our first date?",
    type: "text",
    answer: "hi nana movie in forum mall",
    msg: "Yes, it was a memorable day for us 💖"
  },
  {
    question: "In which place and event did you propose me?",
    type: "text",
    answer: "shawarma shop after lover movie",
    msg: "That moment was unexpected and magical 💌"
  },
  {
    question: "Which outing experience do you still like most?",
    type: "text",
    answer: null,
    msg: "Aahan 😄 Hibiscus Cafe memories always make me smile"
  },
  {
    question: "Will you hate me?",
    type: "yesno",
    correct: "Yes",
    correctMsg: "I know you baby girl 💖",
    wrongMsg: "I didn't expect this from you but I love you ❤️"
  }
];

let qIndex = 0;

function startQuestions() {
  lettersSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[qIndex];
  message.innerText = "";
  nextBtn.classList.add("hidden");
  buttons.innerHTML = "";
  answerInput.classList.add("hidden");

  questionText.innerText = q.question;

  if (q.type === "text") {
    answerInput.value = "";
    answerInput.classList.remove("hidden");
    const btn = document.createElement("button");
    btn.innerText = "Submit";
    btn.onclick = () => {
      message.innerText = q.msg;
      nextBtn.classList.remove("hidden");
    };
    buttons.appendChild(btn);
  } else {
    ["Yes", "No"].forEach(opt => {
      const b = document.createElement("button");
      b.innerText = opt;
      b.onclick = () => {
        message.innerText = opt === q.correct ? q.correctMsg : q.wrongMsg;
        nextBtn.classList.remove("hidden");
      };
      buttons.appendChild(b);
    });
  }
}

function nextQuestion() {
  qIndex++;
  if (qIndex < questions.length) loadQuestion();
  else showFinal();
}

/* ---------------- FINAL ---------------- */

function showFinal() {
  questionsSection.classList.add("hidden");
  final.classList.remove("hidden");
  setInterval(createHeart, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
