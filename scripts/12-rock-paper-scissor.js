const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
}

updateScoreElement();

/*
if (!score) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0,
    }
  }
  */ 

  let isAutoPlaying = false;
  let intervalId;

  function autoPlay(){
    if (!isAutoPlaying){
      // play the game every second
      intervalId = setInterval(function(){
      const playMove = pickComputerMove();
      playGame(playMove);
      }, 2000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove==='Scissors') {
    if (computerMove === 'Rock') {
      result = 'You loose';
    } else if (computerMove === 'Paper') {
      result = 'You Win';
    } else if (computerMove === 'Scissors') {
      result = 'Tie';
    }

  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
    result = 'You win';
  } else if (computerMove === 'Paper') {
    result = 'Tie';
  } else if (computerMove === 'Scissors') {
    result = 'You loose';
  }

  } else {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You loose';
    } else if (computerMove === 'Scissors') {
      result = 'You win';
    }
  }

  /*Using an object to track scores of the game*/
  if (result === 'You win') {
    score.wins += 1;
  } else if (result === 'You loose') {
    score.losses += 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="images/${playerMove}-emoji.png" alt="rock-move" class="move-icon">
<img src="images/${computerMove}-emoji.png" alt="scissors-move" class="move-icon">
computer`
  
}

function updateScoreElement (){
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove ='Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove ='Scissors';
  }

  return computerMove;
}