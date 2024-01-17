async function getChuckNorrisJoke() {
  try {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    const joke = data.value;
    console.log(joke);
    document.getElementById("jokeText").innerText = joke;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error.message);
  }
}
document
  .getElementById("getJokeButton")
  .addEventListener("click", getChuckNorrisJoke);
