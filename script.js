const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

getJoke();

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
  const url = "https://icanhazdadjoke.com";
  const config = {
    headers: {
      accept: "application/json",
    },
  };

  fetch(url, config)
    .then(res => res.json())
    .then(data => {
      jokeEl.textContent = data.joke;
    });
}
