const btnIncrease = document.querySelector('.btn-increase')
const btnDecrease = document.querySelector('.btn-decrease')
const resultBox = document.querySelector('.result')


let count = 0

resultBox.textContent = count


btnIncrease.addEventListener('click', function () {

  count++

  resultBox.textContent = count



})



btnDecrease.addEventListener('click', function () {

  count--

  resultBox.textContent = count

})

