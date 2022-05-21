
const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const PIXELS_COUNT = 500

for (let i = 0; i < PIXELS_COUNT; i++) {
   const pixel = document.createElement('div') // Создаём элементы (пиксели) пока цикл не дойдёт до PIXEL_COUNT
   pixel.classList.add('pixel')

   pixel.addEventListener('mouseover', () => setColor(pixel))
   pixel.addEventListener('mouseleave', () => removeColor(pixel))

   board.append(pixel) // Вставляем доску пиксель на каждой итерации
}

function setColor(element) {
   const color = getRandomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #1d1d1d'
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length) // Получаем целое рандомное число в диапазоне длинны массива
   return colors[index] // Возвращаем элемент массива по этому числу
}