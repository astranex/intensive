
// Переменные

const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('.board')
let time = 0
let score = 0
let misses = 0
let lastColor

const colors = [ // Массив цветов
   '#ec6d3a',
   '#dfcf34', 
   '#65df34', 
   '#48d4fc', 
   '#4882fc', 
   '#7759ee',
   '#ee59de'
]

// Функции

function startGame() {
   setInterval(decreaseTime, 1000)
   createRandomCircle()
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      finishGame()
   } else {
      let current = --time
      setTime(current)
   }
}

function setTime(value) {
   if (value == 60) {
      timeEl.innerHTML = `01:00`
   } else {
      timeEl.innerHTML = `00:${value < 10 ? '0' + value : value}`
   }
}

function finishGame() {
   timeEl.parentNode.classList.add('hide')
   board.innerHTML = `<div class='score'><h1>Ваш счёт: <span class='primary'>${score}</span></h1><p class='misses'>Промахи: <span class='miss'>${misses}</span></p></div>`
   document.querySelector('.primary').style.color = getRandomColor()
}

function createRandomCircle() {
   const circle = document.createElement('div')
   const size = getRandomNumber(10, 50)
   const {width, height} = board.getBoundingClientRect()
   const x = getRandomNumber(0, width - size)
   const y = getRandomNumber(0, height - size)
   circle.classList.add('circle')

   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.left = `${y}px`
   circle.style.top = `${x}px`

   let currentColor = getRandomColor()

   circle.style.background = currentColor
   circle.style.boxShadow = `0px 0px 10px ${currentColor}`

   board.append(circle)
}

function getRandomNumber(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length) // Получаем целое рандомное число в диапазоне длинны массива
   let color = colors[index] // Возвращаем элемент массива по этому числу

   if (color === lastColor) {
      // console.log('Исключаем повторения')
      return getRandomColor() // Исключаем повторения
   }

   lastColor = color
   return color
}

// Слушатели

startBtn.addEventListener('click', e => {
   e.preventDefault()
   screens[0].classList.add('up')
})

timeList.addEventListener('click', e => {
   if (e.target.classList.contains('time-btn')) {
      time = +e.target.getAttribute('data-time')
      screens[1].classList.add('up')  
      startGame()
   }
})

board.addEventListener('click', e => {
   if (e.target.classList.contains('circle')) {
      score++
      e.target.remove()
      createRandomCircle()
   } else if (!timeEl.parentNode.classList.contains('hide')){
      misses++
   }
})