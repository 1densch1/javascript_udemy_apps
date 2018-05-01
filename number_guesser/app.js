let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown',function(e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess

guessBtn.addEventListener('click', function () {
  guessesLeft -= 1;
  //parseInt changes string value to number
  let guess = parseInt(guessInput.value);
  //validate
  //isNaN is a function that checks if NaN
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else if (guess === winningNum) { //check if win
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else if (guessesLeft === 0) {
    //game over lost
    gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
  } else {
    //game continues - answer wrong
    guessInput.style.borderColor = 'red';
    //tell user wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    guessInput.value = '';
  }
});

// Game over function
function gameOver(won,msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

function setMessage(msg, color = 'black') {
  message.style.color = color;
  message.textContent = msg;
}

// Get winning num
function getRandomNum(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}