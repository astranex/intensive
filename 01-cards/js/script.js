// Переменные

const slides = document.querySelectorAll('.slide')

// Функции

function setActive() {
   if (!this.classList.contains('active')) { // Добавил возможность повторного клика, и, соответственно, закрытия слайда
      setFilter()
      clearActive()

      this.classList.remove('filter')
      this.classList.add('active')
   } else {
      clearFilter()

      this.classList.remove('active')
   }
}

function clearActive() {
   slides.forEach(slide => slide.classList.remove('active'))
}

// Добавил фильтр для всех неактивных элементов

function setFilter() { 
   slides.forEach(slide => slide.classList.add('filter'))
}

function clearFilter() {
   slides.forEach(slide => slide.classList.remove('filter'))
}

// Слушатели

slides.forEach(slide => slide.addEventListener('click', setActive))