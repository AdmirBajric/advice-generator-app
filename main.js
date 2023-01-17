const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");

dice.addEventListener("click", (e) => {
  advice.textContent = "";
  fetchAPI();
});

const fetchAPI = async () => {
  const result = await fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .catch((err) => {
      advice.textContent = `Oops! Something went wrong.`;
    });
  advice.textContent = `"${result.advice}"`;
};

fetchAPI();
