const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')


btn.addEventListener('click', function () {

  if (input.value.length) {

    result.textContent = input.value

    input.value = ''

  } else {

    result.textContent = ''

  }

})