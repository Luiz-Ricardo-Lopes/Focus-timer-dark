const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAdd = document.querySelector('.add')
const buttonDecrease = document.querySelector('.decrease')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShop = document.querySelector('.coffe-shop')
const buttonFeriplace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondesDiplay = document.querySelector('.seconds')
const sunImg = document.querySelector('.sun')
const moonImg = document.querySelector('.moon')
const icon = document.getElementById('icon')
let minutes = Number(minutesDisplay.textContent)

let timerTimeOut
let isDark = true

function updateDisplay(minutes, seconds) {
  minutes = minutes === undefined ? minutes : minutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondesDiplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    let seconds = Number(secondesDiplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay()
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}
function addMinutes() {
  minutes += 5
  timerTimeOut
}
function decreaseMinutes() {
  minutes -= 5
}

function iconToggle() {
  if (isDark) {
    isDark = false
    moonImg.classList.remove('hide')
    sunImg.classList.add('hide')
    document.body.classList.add('dark-theme')
  } else {
    isDark = true
    sunImg.classList.remove('hide')
    moonImg.classList.add('hide')
    document.body.classList.remove('dark-theme')
  }
}

icon.onclick = function () {
  iconToggle()
}

const forest = new Audio('music/Floresta.wav')
const rain = new Audio('music/Chuva.wav')
const coffeShop = new Audio('music/Cafeteria.wav')
const fireplace = new Audio('music/Lareira.wav')

const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)

const kitchenTimer = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
)
forest.loop = true
rain.loop = true
coffeShop.loop = true
fireplace.loop = true

function pressButton() {
  buttonPressAudio.play()
}
function timerEnd() {
  kitchenTimer.play()
}

function colorButton() {
  buttonForest.classList.remove('select')
  buttonRain.classList.remove('select')
  buttonCoffeShop.classList.remove('select')
  buttonFeriplace.classList.remove('select')
}

function pauseMusics() {
  forest.pause()
  rain.pause()
  coffeShop.pause()
  fireplace.pause()
}

buttonPlay.addEventListener('click', function () {
  pressButton()
  countdown()
})

buttonStop.addEventListener('click', function () {
  pressButton()
  clearTimeout(timerTimeOut)
  resetTimer()
  pauseMusics()
  colorButton()
})

buttonAdd.addEventListener('click', () => {
  pressButton()
  addMinutes()
  updateDisplay(minutes, 0)
})

buttonDecrease.addEventListener('click', () => {
  pressButton()
  decreaseMinutes()
  updateDisplay(minutes, 0)
})

buttonForest.addEventListener('click', () => {
  colorButton()
  buttonForest.classList.add('select')
  pressButton()
  forest.play()
  rain.pause()
  coffeShop.pause()
  fireplace.pause()
})

buttonRain.addEventListener('click', () => {
  pressButton()
  rain.play()
  colorButton()
  buttonRain.classList.add('select')
  forest.pause()
  coffeShop.pause()
  fireplace.pause()
})

buttonCoffeShop.addEventListener('click', () => {
  pressButton()
  coffeShop.play()
  colorButton()
  buttonCoffeShop.classList.add('select')
  rain.pause()
  forest.pause()
  fireplace.pause()
})

buttonFeriplace.addEventListener('click', () => {
  pressButton()
  fireplace.play()
  colorButton()
  buttonFeriplace.classList.add('select')
  rain.pause()
  forest.pause()
  coffeShop.pause()
})
// Sounds
