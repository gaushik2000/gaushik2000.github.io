// DOM Elements
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const question1 = document.getElementById('question1');
const question2 = document.getElementById('question2');
const question3 = document.getElementById('question3');
const finalMessage = document.getElementById('finalMessage');

let yesClickCount = 0;

// Move "No" button randomly on hover
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * 60;
    const y = Math.random() * 40;
    noBtn.style.transform = `translate(${x}vw, ${y}vh)`;
});

// "Yes" button click
yesBtn.addEventListener('click', () => {
    yesClickCount++;
    yesBtn.style.transform = `scale(${1 + yesClickCount * 0.1})`;
    // Reveal next question
    question1.classList.add('hidden');
    question2.classList.remove('hidden');
});

// Question 2
const answerBtnsQ2 = question2.querySelectorAll('.answer-btn');
const feedbackQ2 = question2.querySelector('.feedback');

answerBtnsQ2.forEach(btn => {
    btn.addEventListener('click', () => {
        feedbackQ2.textContent = `You chose ${btn.textContent}! Cute choice 🥰`;
        setTimeout(() => {
            question2.classList.add('hidden');
            question3.classList.remove('hidden');
        }, 1500);
    });
});

// Question 3
const answerBtnsQ3 = question3.querySelectorAll('.answer-btn');
const feedbackQ3 = question3.querySelector('.feedback');

answerBtnsQ3.forEach(btn => {
    btn.addEventListener('click', () => {
        feedbackQ3.textContent = `Yum! ${btn.textContent} sounds perfect! 😋`;
        setTimeout(() => {
            question3.classList.add('hidden');
            finalMessage.classList.remove('hidden');
            createHearts();
        }, 1500);
    });
});

// Hearts animation
function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heartsContainer.appendChild(heart);
    }
}
