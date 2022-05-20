// Переменные

const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const button = document.querySelector('.add-button')

// Функции

function dragMouseDown(e) {
   e.target.classList.add('hold') // Пока мы перетаскиваем карточку, добавляем ему класс hold
}

function dragMouseUp(e) {
   e.target.classList.remove('hold')
}

function dragStart(e) {
   // console.log('DRAG START')
   setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragEnd(e) {
   // console.log('DRAG END')

   // e.target.classList.remove('hold')
   // e.target.classList.remove('hide') // Вместо этого варианта можно просто написать:
   e.target.className = 'item' // Заменяет все классы на вводимую строчку
}

function dragOver(e) {
   // console.log('DRAG OVER')
   e.preventDefault()
}

function dragEnter(e) {
   // console.log('DRAG ENTER')
   e.target.classList.add('hovered')
}

function dragLeave(e) {
   // console.log('DRAG LEAVE')
   e.target.classList.remove('hovered')
}

function dragDrop(e) {
   // console.log('DRAG DROP')
   e.target.classList.remove('hovered')
   e.target.append(item)
}

// function addCard(e) {
//    let card = document.createElement('div')
//    card.innerHTML = '<div class="item" draggable="true" contenteditable>Новенькая карточка</div>'

//    placeholders[0].append(card)
// }

// Слушатели

item.addEventListener('mousedown', dragMouseDown)
item.addEventListener('mouseup', dragMouseUp)
item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

placeholders.forEach(placeholder => {
   placeholder.addEventListener('dragover', dragOver)
   placeholder.addEventListener('dragenter', dragEnter)
   placeholder.addEventListener('dragleave', dragLeave)
   placeholder.addEventListener('drop', dragDrop)
})

// button.addEventListener('click', addCard)