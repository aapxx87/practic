// версия 1: 2 цифры и сразу нужно нажимать на равно


// ---------- SELECTORS

// -- Tabs
const digitTabs = document.querySelectorAll('.tab-digit')
const calcTabs = document.querySelectorAll('.tab-calc')
const equalTab = document.querySelector('.tab-equal')
const resetTab = document.querySelector('.tab-reset')

// -- Digit display
const digitDisplay = document.querySelector('.display')



// ---------- STARTING CONDITIONS

// перемнная для сохраннеия текущего вводимого числа
let tempDigit = ''

let numberOne = ''

let numberTwo = ''

let action = ''

let result = 0


// выбор вводимого числа с цифровой клавиатуры и сохранение его в переменную tempDigit
digitTabs.forEach(function (tab) {

  tab.addEventListener('click', function () {

    const digit = tab.textContent

    tempDigit = tempDigit + digit

    digitDisplay.textContent = tempDigit

  })

})



calcTabs.forEach(function (tab) {

  tab.addEventListener('click', function () {

    action = tab.textContent

    digitDisplay.textContent = action

    numberOne = Number(tempDigit)

    tempDigit = ''

  })

})


equalTab.addEventListener('click', function () {

  numberTwo = Number(tempDigit)

  if (action === '+') {

    result = numberOne + numberTwo

    digitDisplay.textContent = result

    console.log(result);

    numberOne = ''
    numberTwo = ''
    result = ''

  } else if (action === '-') {

    result = numberOne - numberTwo

    digitDisplay.textContent = result

    console.log(result);

    numberOne = ''
    numberTwo = ''
    result = ''

  } else if (action === '*') {

    result = numberOne * numberTwo

    digitDisplay.textContent = result


    numberOne = ''
    numberTwo = ''
    result = ''

  } else if (action === '/') {

    result = numberOne / numberTwo

    digitDisplay.textContent = result

    console.log(result);

    numberOne = ''
    numberTwo = ''
    result = ''

  }

})


resetTab.addEventListener('click', function () {

  tempDigit = ''
  numberOne = ''
  numberTwo = ''
  result = ''

  digitDisplay.textContent = ''

})










