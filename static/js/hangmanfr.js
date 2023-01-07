const words = ['jules', 'bobeuf', 'java', 'programmation','html','python','css','csharp','ambitieux', 'php','javascript','implique'];


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

      const lowerCaseLetter = letter.toLowerCase();
      
      if (lowerCaseLetter.length > 1) {
        return;
      }
      // Check if the letter has already been used
      if (usedLetters.includes(lowerCaseLetter)) {
        return;
      }

      let foundLetter = false;
      for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === lowerCaseLetter) {
          underscores[i] = lowerCaseLetter;
          foundLetter = true;
        }
      }
      if (!foundLetter) {
        attemptsLeft--;
        const hangman = document.querySelector('.hangman');
        hangman.style.display = 'block';
        hangman.querySelector('img').src = `/images/hangman/hangman${attemptsLeft}.png`;
      }
      usedLetters.push(lowerCaseLetter);
      const listContainer = document.querySelector('.list-container');
      listContainer.innerHTML = usedLetters.join(', ');
      displayWord();
    }
  
    const checkGameOver = () => {
      if (underscores.join('') === word) {
        // Show a message indicating that the user won
        const message = document.querySelector('.result-display');
        message.innerHTML = 'Vous avez gagné!';
  
        // Show the "Play Again" button
        const playAgainButton = document.querySelector('.play-again');
        playAgainButton.style.display = 'inline';
      } else if (attemptsLeft === 0) {
        // Show a message indicating that the user lost
        const message = document.querySelector('.result-display');
        message.innerHTML = 'Vous avez perdu!';
  
        // Show the "Play Again" button
        const playAgainButton = document.querySelector('.play-again');
        playAgainButton.style.display = 'inline';
      }
    }
  
    // Add an event listener to the form to handle form submission
    const form = document.querySelector('.formHangman');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = event.target.querySelector('input');
      const guess = input.value;
      input.value = '';
      guessLetter(guess.toLowerCase());
      checkGameOver();
    });
  }
playGame();


