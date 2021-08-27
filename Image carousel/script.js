const btnNext = document.querySelector('.next')
const btnPrev = document.querySelector('.prev')
const imgContainer = document.querySelector('.imageBox')
const dottsBox = document.querySelector('.dottsBox')
const dotts = document.querySelectorAll('.dot')


let count = 0


const arrayImg = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpeg', 'img/5.jpeg']


btnNext.addEventListener('click', function () {

  if (count < arrayImg.length - 1) {
    count++
  } else {
    count = 0
  }

  imgContainer.style.backgroundImage = `url('${arrayImg[count]}')`;

  dotts.forEach(function (dot) {
    dot.classList.remove('active')
  })

  dotts[count].classList.add('active')

})


btnPrev.addEventListener('click', function () {

  if (count > 0) {
    count--
  } else {
    count = arrayImg.length - 1
  }

  dotts.forEach(function (dot) {
    dot.classList.remove('active')
  })

  dotts[count].classList.add('active')

  imgContainer.style.backgroundImage = `url('${arrayImg[count]}')`;

})