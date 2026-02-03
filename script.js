document.addEventListener("DOMContentLoaded", function () {

  const pages = document.querySelectorAll(".page");

  function showPage(id) {
    pages.forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  }

  // START
  document.getElementById("startBtn").addEventListener("click", function () {
    showPage("letters");
  });

  // LETTERS
  const messages = {
    rose: "Happy Rose Day 🌹 You are the most beautiful rose in my life 💖",
    propose: "Happy Propose Day 💌 Falling for you was destiny ❤️",
    chocolate: "Happy Chocolate Day 🍫 You are my sweetest addiction",
    teddy: "Happy Teddy Day 🧸 This teddy carries my hugs",
    promise: "Happy Promise Day 🤞 I choose you forever",
    hug: "Happy Hug Day 🤗 Your hugs are my safe place",
    kiss: "Happy Kiss Day 😘 You melt my heart",
    valentine: "Happy Valentine’s Day ❤️ You are my always"
  };

  document.querySelectorAll(".letter").forEach(btn => {
    btn.addEventListener("click", function () {
      document.getElementById("letterMessage").innerText =
        messages[this.dataset.day];
    });
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
      msg: "Hi Nana movie in Forum Mall 💖"
    },
    {
      text: "In which place and event did you propose me?",
      type: "text",
      msg: "That shawarma shop moment ❤️"
    },
    {
      text: "Which outing experience do you still like most?",
      type: "text",
      msg: "For me, Hibiscus Cafe 😄"
    },
    {
      text: "Will you hate me?",
      type: "yesno",
      yes: "I know you won’t 💖",
      no: "I always love you ❤️"
    }
  ];

  let index = 0;

  const qText = document.getElementById("questionText");
  const input = document.getElementById("answerInput");
  const submit = document.getElementById("submitBtn");
  const yesNo = document.getElementById("yesNo");
  const response = document.getElementById("response");

  function loadQuestion() {
    response.innerText = "";
    input.value = "";

    const q = questions[index];
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
    response.innerText = questions[index].msg;
    next();
  };

  document.getElementById("yesBtn").onclick = () => {
    response.innerText = questions[index].yes;
    next();
  };

  document.getElementById("noBtn").onclick = () => {
    response.innerText = questions[index].no;
    next();
  };

  function next() {
    setTimeout(() => {
      index++;
      if (index < questions.length) {
        loadQuestion();
      } else {
        showPage("anniversary");
      }
    }, 2000);
  }

});
