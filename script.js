'use strict';
const Score0 = document.getElementById('score--0')
const Score1 = document.getElementById('score--1')
const image = document.querySelector('.dice')
// const images = ['dice-1.png','dice-2.png','dice-3.png','dice-4.png','dice-5.png','dice-6.png']
const buttonRoll = document.querySelector('.btn--roll')
const buttonNew = document.querySelector('.btn--new')
const buttonHold = document.querySelector('.btn--hold')
const scorePlayer0 = document.getElementById('current--0')
const scorePlayer1 = document.getElementById('current--1')
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const p1 = document.getElementById('name--0')
const p2= document.getElementById('name--1')


let scores, currentUserScore, activePlayer, playing;

const init = function () {
    scores = [0,0]
currentUserScore=0
activePlayer = 0;
Score0.textContent = 0
Score1.textContent = 0
    playing = true
    scorePlayer0.textContent = 0
    scorePlayer1.textContent = 0;
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    image.classList.add('hidden')

    p1.textContent = 'PLAYER 1'
    p2.textContent = 'PLAYER 2'
   
}
init()
const switchPlayer = function () {
     document.getElementById(`current--${activePlayer}`).textContent = 0

        currentUserScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')
}

buttonRoll.addEventListener('click', () => {
    // const randomIndex = Math.floor(Math.random() * images.length);
    // image.src = images[randomIndex];
    if (playing) {
        const dice = Math.trunc((Math.random() * 6) + 1)
        console.log(dice);
        image.classList.remove('hidden')
        image.src = `dice-${dice}.png`
        if (dice !== 1) {
            currentUserScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentUserScore

        }
        else {
            switchPlayer()
        }
    }
})

buttonHold.addEventListener('click', () => {
    if (playing) {
        scores[activePlayer] += currentUserScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    
        if (scores[activePlayer] >= 100) {
            playing = false;
            image.classList.add('hidden')
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            document.getElementById(`name--${activePlayer}`).textContent = `Congratulations You Win`
        }
    
        else {//switching to next player
            switchPlayer()
        }
    }
})

buttonNew.addEventListener('click',init)
    
    //  document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
    // document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
   
    // document.querySelectorAll(`score--${activePlayer}`).textContent = 0
