// const multiply = (a,b)=> {
// return a * b
// }

// console.log(multiply(2,4))
// Selecting Elements
const rollDiceBtn = document.querySelector('.btn-rolldice');
const holdScoreBtn = document.querySelector('.btn-hold');


const newGameBtn = document.querySelector('.btn-newgame');

const diceImage = document.querySelector('.dice-image');
const current1EL = document.getElementById('current--1')
const current2EL = document.getElementById('current--2')

const player1Background = document.querySelector('.player-1');
const player2Background = document.querySelector('.player-2');

const player1ScoreEl = document.querySelector('.player-1-score');
const player2ScoreEl = document.querySelector('.player-2-score');

let currentScore ,scores,activePlayer; 

const init = () => {
  currentScore = 0
  activePlayer = 0
  scores =  [0,0]
  
  document.getElementById(`current--0`).textContent = 0
  document.getElementById(`current--1`).textContent = 0
  document.getElementById(`player-0-score`).textContent = 0
  document.getElementById(`player-1-score`).textContent = 0
  console.log('newGameBtn clicked');
  document.querySelector('.message-container').classList.remove('hidden')
  document.querySelector('.message-container').classList.add('hidden')
}


init()


const switchPlayer = ()  =>{
  document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0
     console.log(`hey there i'm player ${activePlayer}`)

     player1Background.classList.toggle('player-active')
     player2Background.classList.toggle('player-active')
}

rollDiceBtn.addEventListener('click', function () {
  const diceCount = Number(Math.floor(Math.random() * 6 + 1));
  let diceImageFunction = (el, imgUrl) => {
    el.src = imgUrl;
  };

  if (diceCount === 1) {
    console.log('i got a 1');
    diceImageFunction(diceImage, './dice-one.svg');
    switchPlayer()
  }

  else if (diceCount === 2) {
    console.log('i got a 2');
    diceImageFunction(diceImage, './dice-two.svg');
    currentScore += diceCount;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
     
  }

  else if (diceCount === 3) {
    console.log('i got a 3');
    diceImageFunction(diceImage, './dice-three.svg');
    currentScore += diceCount;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
  }

   else if (diceCount === 4) {
    console.log('i got a 4');
    diceImageFunction(diceImage, './dice-four.svg');
    currentScore += diceCount;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } 

  else if (diceCount === 5) {
    console.log('i got a 5');
    diceImageFunction(diceImage, './dice-five.svg');
    currentScore += diceCount;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
  } 
  
  
  else if (diceCount === 6) {
    console.log('i got a 6');
    diceImageFunction(diceImage, './dice-six.svg');
    currentScore += diceCount;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore
  }


  console.log(currentScore);

});


holdScoreBtn.addEventListener('click', function(){




  document.getElementById(`current--${activePlayer}`).textContent = 0
    // 1. Add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`player-${activePlayer}-score`).textContent  = scores[activePlayer]
    // 2 Check if  current player's score is <= 100
  if(scores [activePlayer] >= 100) {
    document.getElementById(`current--${activePlayer}`).textContent = 0
     // Switch to  the next active player
    switchPlayer()
    document.querySelector('.message-container').classList.remove('hidden')
      // Finish the game 
   document.querySelector('.message').textContent = (` Player ${activePlayer} wins 🎉🎉` )

  }
// Set Current Score = 0
  currentScore = 0
   // Switch to  the next active player
  switchPlayer()
  console.log(currentScore);

})

newGameBtn.addEventListener('click', init)

console.log(typeof scores[1])