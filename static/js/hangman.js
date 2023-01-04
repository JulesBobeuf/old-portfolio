const words = ['jules', 'bobeuf', 'java', 'programming','html','python','css','csharp','ambitious'];


const playGame = () => {
    const word = words[Math.floor(Math.random() * words.length)];
    const wordArray = word.split('');
    const underscores = new Array(wordArray.length).fill('_');
    let attemptsLeft = 5;
    let usedLetters = [];
  
    const displayWord = () => {
        // Select the word display element
        const wordDisplay = document.querySelector('.word-display');
        // Update the inner HTML
        wordDisplay.innerHTML = underscores.join(' ');
      
        // Select the attempts left display element
        const attemptsDisplay = document.querySelector('.attempts-display');
        // Update the inner HTML
        attemptsDisplay.innerHTML = `${attemptsLeft}`;
      }
      
    displayWord();
  
    const guessLetter = (letter) => {

      // Check if the game is over
      if (attemptsLeft === 0 || underscores.join('') === word) {
        return;
      }

      let foundLetter = false;
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === letter) {
          underscores[i] = letter;
          foundLetter = true;
        }
      }
      if (!foundLetter) {
        attemptsLeft--;
        const hangman = document.querySelector('.hangman');
        hangman.style.display = 'block';
        hangman.querySelector('img').src = `/images/hangman/hangman${attemptsLeft}.png`;
      }
      usedLetters.push(letter);
      const listContainer = document.querySelector('.list-container');
      listContainer.innerHTML = usedLetters.join(', ');
      displayWord();
    }
  
    const checkGameOver = () => {
      if (underscores.join('') === word) {
        // Show a message indicating that the user won
        const message = document.querySelector('.result-display');
        message.innerHTML = 'You won!';
  
        // Show the "Play Again" button
        const playAgainButton = document.querySelector('.play-again');
        playAgainButton.style.display = 'inline';
      } else if (attemptsLeft === 0) {
        // Show a message indicating that the user lost
        const message = document.querySelector('.result-display');
        message.innerHTML = 'You lost!';
  
        // Show the "Play Again" button
        const playAgainButton = document.querySelector('.play-again');
        playAgainButton.style.display = 'inline';
      }
    }
  
    // Add an event listener to the form to handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = event.target.querySelector('input');
      const guess = input.value;
      input.value = '';
      guessLetter(guess);
      checkGameOver();
    });


  }
const playAgainButton = document.querySelector('.play-again');
playAgainButton.addEventListener('click', () => {
  // Clear the game container
  const gameContainer = document.querySelector('.game-container');
  gameContainer.innerHTML = '';

    // Show the form again
  const form = document.querySelector('form');
  form.style.display = 'block';

  // Start a new game
  playGame();
});
playGame();


