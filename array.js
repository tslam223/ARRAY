// https://api.adviceslip.com/advice

function getAdvice() {
  let advice = document.getElementById("adviceResult");
  advice.innerHTML = "Loading...";
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => {
      advice.innerHTML = response.slip.advice;
    })
    .catch((error) => {
      alert(error);
    });
}
function searchAdvice() {
  let inputValue = document.getElementById("search").value; // value means accept input from keyboard
  // To accept user input
  fetch(`https://api.adviceslip.com/advice/search/${inputValue}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // testing if result exist then put result inside adviceResult.innerHTML and if there is no result display response message
      if (response.slips && response.slips.length > 0) {
        let adviceResult = document.getElementById("adviceResult");
        adviceResult.innerHTML = response.slips[0].advice;
      } else {
        adviceResult.innerHTML = response.message.text;
      }
    })
    .catch((error) => {
      alert(error);
    });
}
