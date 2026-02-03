document.addEventListener("DOMContentLoaded", () => {
  // Pages
  const landingPage = document.getElementById("landingPage");
  const lettersPage = document.getElementById("lettersPage");
  const quizPage = document.getElementById("quizPage");
  const finalPage = document.getElementById("finalPage");

  // Landing page start button
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    lettersPage.classList.remove("hidden");
  });

  // Hidden letters logic
  const letters = document.querySelectorAll(".letter-card");
  const letterContent = document.getElementById("letterContent");
  const lettersNextBtn = document.getElementById("lettersNextBtn");
  let lettersOpened = 0;

  const lettersData = {
    rose: {
      content: "🌹 Happy Rose Day! 💖 Love is the flower you've got to let grow. 🌸",
    },
    propose: {
      content: "💌 Happy Propose Day! 💖 Love is when you meet someone who tells you something new about yourself. ❤️",
    }
    // Add more letters here if needed
  };

  letters.forEach(letter => {
    letter.addEventListener("click", () => {
      const key = letter.dataset.letter;
      letterContent.textContent = lettersData[key].content;
      letterContent.classList.remove("hidden");
      lettersNextBtn.classList.remove("hidden");
      lettersOpened++;
    });
  });

  lettersNextBtn.addEventListener("click", () => {
    lettersPage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    showQuestion(0);
  });

  // Quiz Questions
  const quiz = document.getElementById("quiz");

  const questions = [
    {
      type: "yesno",
      question: "Where was our first date?",
      options: ["Yes", "No"],
      correct: "Yes",
      correctMsg: "Yes, it was a memorable day for us 💖",
      wrongMsg: "You forget it idiot, try again 😜"
    },
    {
      type: "text",
      question: "In which place did you propose me?",
      correct: "Letter",
      correctMsg: "Yes, that was unexpected at that situation and I was surprised by your letter 💌",
      wrongMsg: "Hmm, think again 😅"
    },
    {
      type: "text",
      question: "Which outing experience do you still like most?",
      correct: "Hibiscus Cafe",
      correctMsg: "Aahan, for me Hibiscus Cafe. There you had some food and you vomited in the washroom. Even if I cross that cafe randomly I smile 😄",
      wrongMsg: "Try again! 😋"
    },
    {
      type: "yesno",
      question: "Will you hate me?",
      options: ["Yes", "No"],
      correct: "No",
      correctMsg: "I didn't expect this from you, but I always love you my valentine ❤️",
      wrongMsg: "I know you my baby girl, even I never hate you at any situation 💖"
    },
    {
      type: "yesno",
      question: "Will you marry me?",
      options: ["Yes", "No"],
      correct: "Yes",
      correctMsg: "Awwwww, Thanks. Even I'm ready to marry you 💍",
      wrongMsg: "Sorry, You don't have that option now. You have only one choice to choose. Choose again 😜"
    }
  ];

  let currentQuestion = 0;

  function showQuestion(index){
    const q = questions[index];
    quiz.innerHTML = "";

    const qTitle = document.createElement("h2");
    qTitle.textContent = q.question;
    quiz.appendChild(qTitle);

    const feedback = document.createElement("p");
    feedback.classList.add("feedback");

    if(q.type === "yesno"){
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("buttons");
      q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.classList.add("option-btn");
        btn.addEventListener("click", () => {
          if(opt === q.correct){
            feedback.textContent = q.correctMsg;
            const nextBtn = document.createElement("button");
            nextBtn.textContent = "Next ➡️";
            nextBtn.classList.add("option-btn","correct");
            nextBtn.style.marginTop = "15px";
            feedback.appendChild(document.createElement("br"));
            feedback.appendChild(nextBtn);
            nextBtn.addEventListener("click", () => {
              currentQuestion++;
              if(currentQuestion < questions.length){
                showQuestion(currentQuestion);
              } else {
                quizPage.classList.add("hidden");
                finalPage.classList.remove("hidden");
                createHearts();
              }
            });
          } else {
            feedback.textContent = q.wrongMsg;
          }
        });
        btnContainer.appendChild(btn);
      });
      quiz.appendChild(btnContainer);
      quiz.appendChild(feedback);
    }

    if(q.type === "text"){
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Type your answer here";
      input.style.padding = "10px";
      input.style.fontSize = "1em";
      input.style.borderRadius = "10px";
      input.style.marginBottom = "10px";

      const submit = document.createElement("button");
      submit.textContent = "Submit";
      submit.classList.add("option-btn");
      submit.style.display = "block";
      submit.style.margin = "10px auto";

      submit.addEventListener("click", () => {
        if(input.value.trim().toLowerCase() === q.correct.toLowerCase()){
          feedback.textContent = q.correctMsg;
          const nextBtn = document.createElement("button");
          nextBtn.textContent = "Next ➡️";
          nextBtn.classList.add("option-btn","correct");
          nextBtn.style.marginTop = "15px";
          feedback.appendChild(document.createElement("br"));
          feedback.appendChild(nextBtn);
          nextBtn.addEventListener("click", () => {
            currentQuestion++;
            if(currentQuestion < questions.length){
              showQuestion(currentQuestion);
            } else {
              quizPage.classList.add("hidden");
              finalPage.classList.remove("hidden");
              createHearts();
            }
          });
        } else {
          feedback.textContent = q.wrongMsg;
        }
      });

      quiz.appendChild(input);
      quiz.appendChild(submit);
      quiz.appendChild(feedback);
    }
  }

  function createHearts(){
    const heartsContainer = document.querySelector(".hearts");
    for(let i=0;i<30;i++){
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${Math.random()*100}%`;
      heart.style.animationDuration = `${2 + Math.random()*3}s`;
      heartsContainer.appendChild(heart);
    }
  }

});
