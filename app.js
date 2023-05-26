const adviceId = document.querySelector('.advice__number span');
const advicePhrase = document.querySelector('.advice__phrase');
const diceBtn = document.querySelector('.dice');

getAdvicePhrase();
diceBtn.addEventListener('click', getAdvicePhrase);

function getAdvicePhrase() {
    const request = new XMLHttpRequest();
    const timestamp = new Date().getTime();
    const URL = `https://api.adviceslip.com/advice?_=${timestamp}`;
    request.open('GET', URL);
    request.send();

    request.addEventListener('load', () => {
        const data = JSON.parse(request.response);
        adviceId.textContent = data.slip.id;
        advicePhrase.textContent = data.slip.advice;
    });
}