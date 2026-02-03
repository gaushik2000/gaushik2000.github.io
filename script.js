document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const lettersPage = document.getElementById("letters");
  const quizPage = document.getElementById("quiz");
  const anniversaryPage = document.getElementById("anniversary");

  const startBtn = document.getElementById("startBtn");
  const toQuizBtn = document.getElementById("toQuizBtn");
  const letterMessage = document.getElementById("letterMessage");

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const textAnswer = document.getElementById("textAnswer");
  const submitBtn = document.getElementById("submitBtn");
  const feedback = document.getElementById("feedback");

  // PAGE SWITCH
  function showPage(page) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    page.classList.add("active");
  }

  startBtn.onclick = () => showPage(lettersPage);

  // LETTER CONTENT
  const letters = {
    rose: 'Happy Rose Day 🌹<br>"You are the most beautiful rose in my life"',
    propose: 'Happy Propose Day 💍<br>"Proposing you was irresistible"',
    chocolate: 'Happy Chocolate Day 🍫<br>"I got the sweetest chocolate — YOU"',
    teddy: 'Happy Teddy Day 🧸<br>"Every hug is from me"',
    promise: 'Happy Promise Day 🤞<br>"I promise forever"',
    hug: 'Happy Hug Day 🤗<br>"Your hugs = my happiness"',
    kiss: 'Happy Kiss Day 💋<br>"One kiss, endless love"',
    valentine: 'Happy Valentine’s Day ❤️<br>"You are my always"'
  };

  document.querySelectorAll(".letter").forEach(letter => {
    letter.onclick = () => {
      letterMessage.innerHTML = letters[letter.dataset.day];
      toQuizBtn.classList.remove("hidden");
    };
  });

  toQuizBtn.onclick = () => {
    showPage(quizPage);
    loadQuestion();
  };

  // QUIZ
  const questions = [
    {
      q: "Where was our first date?",
      type: "text",
      answer: "hi nana movie in forum mall",
      msg: "Yes, it was a memorable day for us ❤️"
    },
    {
      q: "In which place and event did you propose me?",
      type: "text",
      answer: "shawarma shop after watching lover movie",
      msg: "That moment surprised you 💖"
    },
    {
      q: "Which outing experience do you still like most?",
      type: "text",
      answer: null,
      msg: "For me, Hibiscus Cafe 😄"
    },
    {
      q: "Will you hate me?",
      type: "yesno",
      msgYes: "I know you my baby girl 💖",
      msgNo: "I always love you ❤️"
    }
  ];

  let current = 0;

  function loadQuestion() {
    feedback.textContent = "";
    optionsEl.innerHTML = "";
    textAnswer.classList.add("hidden");
    submitBtn.classList.add("hidden");

    const q = questions[current];
    questionEl.textContent = q.q;

    if (q.type === "text") {
      textAnswer.value = "";
      textAnswer.classList.remove("hidden");
      submitBtn.classList.remove("hidden");

      submitBtn.onclick = () => {
        feedback.textContent = q.msg;
        nextQuestion();
      };
    } else {
      ["Yes", "No"].forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
          feedback.textContent = opt === "Yes" ? q.msgYes : q.msgNo;
          nextQuestion();
        };
        optionsEl.appendChild(btn);
      });
    }
  }

  function nextQuestion() {
    current++;
    if (current < questions.length) {
      setTimeout(loadQuestion, 1200);
    } else {
      setTimeout(() => showPage(anniversaryPage), 1500);
    }
  }

});
