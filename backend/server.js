const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let numberToGuess = Math.floor(Math.random() * 100) + 1;

app.post('/guess', (req, res) => {
  const userGuess = req.body.guess;

  if (userGuess < numberToGuess) {
    res.json({ message: 'Too low! Try again.' });
  } else if (userGuess > numberToGuess) {
    res.json({ message: 'Too high! Try again.' });
  } else {
    numberToGuess = Math.floor(Math.random() * 100) + 1; // reset for next round
    res.json({ message: '🎉 Correct! A new sakthi number has been generated.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
