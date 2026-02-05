let current = 0;
const pages = document.querySelectorAll('.page');

function showPage(i) {
  pages[current].classList.remove('active');
  current = i;
  pages[current].classList.add('active');
}

function nextPage() {
  showPage(current + 1);
}

function openMsg(btn) {
  const page = btn.parentElement;
  page.querySelector('.msg').innerText = page.dataset.msg;
}

function checkQ1() {
  const a = q1.value.toLowerCase();
  if (a.includes("forum") && a.includes("hi nana")) {
    q1msg.innerText = "Yes, it was a memorable day for us";
    nextPage();
  } else q1msg.innerText = "You forget it idiot, try again";
}

function checkQ2() {
  const a = q2.value.toLowerCase();
  if (a.includes("forum") && a.includes("hi nana")) {
    q2msg.innerText = "Yes, I was surprised and shocked by your letter. That's a beautiful proposal";
    nextPage();
  } else q2msg.innerText = "You forget it idiot, try again";
}

function submitQ3() {
  if (!q3.value) return alert("Please answer");
  alert("Aahan, for me Hisbiscuss Cafe. There you had some food and you vomitted in the washroom. Even if I cross that cafe randomly I smile");
  nextPage();
}

function alertMsg(msg) {
  alert(msg);
}

function finalYes() {
  alert("Awwwww, Thanks. Even I'm ready to marry you");
  nextPage();
}
