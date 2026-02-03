document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".page");
  const showPage = (id) => {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };

  // START BUTTON
  document.getElementById("startBtn").onclick = () => {
    showPage("letters");
  };

  // LETTER MESSAGES
  const messages = {
    rose: "Happy Rose Day! 🌹 You are the most beautiful rose in my life 💖",
    propose: "Happy Propose Day 💌 I couldn't resist falling for you ❤️",
    chocolate: "Happy Chocolate Day 🍫 You are my sweetest addiction",
    teddy: "Happy Teddy Day 🧸 This hug is forever",
    promise: "Happy Promise Day 🤞 I choose you always",
    hug: "Happy Hug Day 🤗 Your hugs heal me",
    kiss: "Happy Kiss Day 😘 You melt my heart",
    valentine: "Happy Valentine’s Day ❤️ Loving you is my greatest commitment"
  };

  document.querySelectorAll(".letter").forEach(btn => {
    btn.onclick = () => {
      document.getElementById("letterMessage").innerText =
        messages[btn.dataset.day];
    };
  });

  document.getElementById("toQuestions").onclick = () => {
    showPage("questions");
    loadQuestion();
  };

  // QUESTIONS
  const questions = [
    {
      text: "Where was our first date?",
      type: "text",
      answer: "hi nana movie in forum mall",
      msg: "Yes, it was a memorable day for us 💖"
    },
    {
      text: "In which place and event did you propose me?",
      type: "text",
      answer: "shawarma shop after lover movie",
      msg: "That moment still makes my heart smile ❤️"
    },
    {
      text: "Which outing experience you still like most?",
      type: "text",
      answer: null,
      msg: "Even that day was nice, but Hibiscus Cafe always makes me smile 😄"
    },
    {
      text: "Will you hate me?",
      type: "yesno",
      correct: "yes",
      correctMsg: "I know you baby 💖",
      wrongMsg: "I always love you ❤️"
    }
  ];

  let qIndex = 0;

  const qText = document.getElementById("questionText");
  const input = document.getElementById("answerInput");
  const submit = document.getElementById("submitBtn");
  const yesNo = document.getElementById("yesNoButtons");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const msg = document.getElementById("responseMsg");

  function loadQuestion() {
    msg.innerText = "";
    input.value = "";

    const q = questions[qIndex];
    qText.innerText = q.text;

    if (q.type === "text") {
      input.style.display = "block";
      submit.style.display = "inline-block";
      yesNo.style.display = "none";
    } else {
      input.style.display = "none";
      submit.style.display = "none";
      yesNo.style.display = "block";
    }
  }

  submit.onclick = () => {
    msg.innerText = questions[qIndex].msg;
    next();
  };

  yesBtn.onclick = () => {
    msg.innerText = questions[qIndex].correctMsg;
    next();
  };

  noBtn.onclick = () => {
    msg.innerText = questions[qIndex].wrongMsg;
    next();
  };

  function next() {
    setTimeout(() => {
      qIndex++;
      if (qIndex < questions.length) {
        loadQuestion();
      } else {
        showPage("anniversary");
      }
    }, 2000);
  }
});
