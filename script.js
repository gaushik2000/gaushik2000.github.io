const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
    currentPage = index;
}

// First pages navigation
document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(currentPage + 1);
    });
});

// Open & keep going buttons
document.querySelectorAll('.open-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const messages = [
            "Roses are beautiful, just like our love 🌹",
            "I love your every smile and surprise 💌",
            "Chocolate makes everything sweet 🍫",
            "You are my soft teddy bear 🧸",
            "Promise me we stay together forever 🤞",
            "A warm hug from you means the world 🤗",
            "Every kiss from you melts my heart 😘",
            "Valentine's day is special because of you ❤️"
        ];
        btn.nextElementSibling.textContent = messages[idx];
    });
});

document.querySelectorAll('.keep-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        showPage(currentPage + 1);
    });
});

// Q&A Logic
const qData = [
    {id: 'q1', answer: 'Hi Nana Movie in Forum Mall', next: 'q2', correctMsg: "Yes, it was a memorable day for us", wrongMsg: "You forget it idiot, try again"},
    {id: 'q2', answer: 'Shawarma Shop', next: 'q3', correctMsg: "Yes, I was surprised and shocked by your letter. That's a beautiful proposal", wrongMsg: "You forget it idiot, try again"},
    {id: 'q3', answer: 'Hisbiscuss Cafe', next: 'q4', correctMsg: "Aahan, for me Hisbiscuss Cafe. There you had some food and you vomitted in the washroom. Even if I cross that cafe randomly I smile", wrongMsg: ""},
];

qData.forEach(q => {
    const page = document.getElementById(q.id);
    const btn = page.querySelector('.submit-btn');
    const input = page.querySelector('.answer-input');
    const feedback = page.querySelector('.feedback');

    btn.addEventListener('click', () => {
        if(input.value.trim() === "") {
            alert("Please answer before proceeding!");
            return;
        }
        if(input.value.toLowerCase().includes(q.answer.toLowerCase())) {
            feedback.textContent = q.correctMsg;
            setTimeout(() => {
                showPage(currentPage + 1);
            }, 1500);
        } else {
            feedback.textContent = q.wrongMsg;
        }
    });
});

// Q4 - Yes/No
const q4 = document.getElementById('q4');
q4.querySelector('.yes-btn').addEventListener('click', () => {
    q4.querySelector('.feedback').textContent = "I didn't expect this from you, but I always love you my valentine";
    setTimeout(()=> showPage(currentPage +1), 1500);
});
q4.querySelector('.no-btn').addEventListener('click', () => {
    q4.querySelector('.feedback').textContent = "I know you my baby girl, even I never hate you at any situation";
    setTimeout(()=> showPage(currentPage +1), 1500);
});

// Q5 - Yes/No
const q5 = document.getElementById('q5');
q5.querySelector('.yes-btn').addEventListener('click', () => {
    q5.querySelector('.feedback').textContent = "Awwwww, Thanks. Even I'm ready marry to marry you";
    setTimeout(()=> showPage(currentPage +1), 1500);
});
q5.querySelector('.no-btn').addEventListener('click', () => {
    alert("Sorry, You don't have that option now. You are supposed to choose only Yes. Choose again");
});
