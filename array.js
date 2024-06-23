// https://api.adviceslip.com/advice
function getAdvice() {
  let advice = document.getElementById("adviceResult");
    advice.innerHTML = "Loading..."
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      advice.innerHTML = response.slip.advice
    }).catch((error)=>{
        alert(error)
    });
}