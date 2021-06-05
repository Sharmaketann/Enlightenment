const adviceArea = document.querySelector(".advice-slip");

function getAdvice() {
    fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => adviceArea.innerHTML = `<h2 class = "advice">${data.slip.advice}</h2>`);
      
}

getAdvice();