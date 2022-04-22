const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const button = document.querySelector('#button')
const buttonTwo = document.querySelector('#buttonTwo')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

buttonTwo.addEventListener('click', () => {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    score.innerText = 0
    timeLeft.innerText = 30
    currentTime = 30
    result = 0
})






button.addEventListener('click', (e) => {
    countDown()
    moveMole();
    function interval() {
        countDownTimerId = setInterval(countDown, 1000)
    }
    interval()

})

function moveMole() {
    timerId = setInterval(randomSquare, 700)
}


function interval() {
    countDownTimerId = setInterval(countDown, 1000)
}


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
        currentTime = 30
        score.innerText = 0
        result = 0
    }
}





