let generate = document.getElementById('generate');
let advice = document.getElementById('advice');
let adviceId = document.getElementById('adviceId');

// adding click Event listener after the click event getAdvice function will run
generate.addEventListener('click', getAdvice);

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((res) => {return res.json()})
    .then((data) => {
        adviceId.innerHTML = `#${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`;
    })
}
