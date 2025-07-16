function submitGuess() {
  const guess = document.getElementById('guessInput').value;
  const resultEl = document.getElementById('result');

  if (!guess) {
    resultEl.innerText = "Please enter a number!";
    resultEl.style.color = "red";
    return;
  }

  fetch('http://localhost:5000/guess', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ guess: Number(guess) })
  })
  .then(res => res.json())
  .then(data => {
    resultEl.innerText = data.message;
    resultEl.style.color = data.message.includes("Correct") ? "green" : "#333";
    resultEl.style.opacity = 0;
    setTimeout(() => {
      resultEl.style.animation = "none";
      void resultEl.offsetWidth; // trigger reflow
      resultEl.style.animation = "fadeInText 0.5s ease forwards";
    }, 50);
  })
  .catch(err => {
    console.error(err);
    resultEl.innerText = "⚠️ Server error!";
    resultEl.style.color = "red";
  });
}
