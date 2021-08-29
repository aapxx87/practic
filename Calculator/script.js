// версия 2: первый результат из двух цифр можно использовать для дальнейших операций


// ---------- SELECTORS

// -- Tabs
const digitTabs = document.querySelectorAll('.tab-digit')
const calcTabs = document.querySelectorAll('.tab-calc')
const equalTab = document.querySelector('.tab-equal')
const resetTab = document.querySelector('.tab-reset')
const delTab = document.querySelector('.tab-del')

// -- Digit display
const digitDisplay = document.querySelector('.display-span')
const digitOne = document.querySelector('.numberOne-span')
// const digitTwo = document.querySelector('.numberTwo')
// const calculation = document.querySelector('.calculation-span')



// ---------- STARTING CONDITIONS

// перемнная для сохраннеия текущего вводимого числа
let tempDigit = ''

let numberOne = ''

let numberTwo = ''

let action = ''

let result = 0







let calcOrder = 0


// выбор вводимого числа с цифровой клавиатуры и сохранение его в переменную tempDigit
digitTabs.forEach(function (tab) {

  tab.addEventListener('click', function () {

    const digit = tab.textContent

    tempDigit = tempDigit + digit

    digitOne.textContent = tempDigit

  })

})

delTab.addEventListener('click', function () {

  console.log(tempDigit);

  tempDigit = tempDigit.slice(0, -1)

  console.log(tempDigit);

  digitOne.textContent = tempDigit


})



calcTabs.forEach(function (tab) {

  tab.addEventListener('click', function () {


    // если первого числа нет, то мы его создаем
    if (String(numberOne).length === 0) {

      action = tab.textContent

      // calculation.textContent = action

      numberOne = Number(tempDigit)

      digitDisplay.textContent = numberOne

      digitOne.textContent = ''

      tempDigit = ''

      //  если первое число уже есть, то мы создаем второе и сразу проводим арифметическую операцию
      // результат арифметической операции сразу записываем в число 1, то есть переписываем его.
    } else if (String(numberOne).length != 0 && String(numberTwo).length === 0) {

      action = tab.textContent

      digitDisplay.textContent = action

      numberTwo = Number(tempDigit)

      tempDigit = ''

      if (action === '+') {

        result = numberOne + numberTwo
        console.log(result);

        digitDisplay.textContent = result
        digitOne.textContent = ''

        numberOne = result
        numberTwo = ''
        result = ''

      } else if (action === '-') {

        result = numberOne - numberTwo
        console.log(result);

        digitDisplay.textContent = result
        digitOne.textContent = ''

        numberOne = result
        numberTwo = ''
        result = ''

      } else if (action === '*') {

        result = numberOne * numberTwo
        console.log(result);

        digitDisplay.textContent = result
        digitOne.textContent = ''

        numberOne = result
        numberTwo = ''
        result = ''


      } else if (action === '/') {

        result = numberOne / numberTwo
        console.log(result);

        digitDisplay.textContent = result
        digitOne.textContent = ''

        numberOne = result
        numberTwo = ''
        result = ''
      }



    }


    console.log(`number 1 = ${numberOne}`);
    console.log(`number 2 = ${numberTwo}`);


    calcTabs.forEach(function (tab) {

      tab.classList.remove('active')

    })

    tab.classList.add('active')

    setTimeout(function () {
      calcTabs.forEach(function (tab) {

        tab.classList.remove('active')

      })
    }, 1500)


  })

})





equalTab.addEventListener('click', function () {

  numberTwo = Number(tempDigit)

  if (action === '+') {

    result = numberOne + numberTwo

    digitDisplay.textContent = result

    console.log(result);

    tempDigit = ''
    numberOne = result
    numberTwo = ''
    result = ''
    action = ''

    digitOne.textContent = ''

  } else if (action === '-') {

    result = numberOne - numberTwo

    digitDisplay.textContent = result

    console.log(result);

    tempDigit = ''
    numberOne = result
    numberTwo = ''
    result = ''
    action = ''

    digitOne.textContent = ''

  } else if (action === '*') {

    result = numberOne * numberTwo

    digitDisplay.textContent = result


    tempDigit = ''
    numberOne = result
    numberTwo = ''
    result = ''
    action = ''

    digitOne.textContent = ''

  } else if (action === '/') {

    result = numberOne / numberTwo

    digitDisplay.textContent = result

    console.log(result);

    tempDigit = ''
    numberOne = result
    numberTwo = ''
    result = ''
    action = ''

    digitOne.textContent = ''
  }

})


resetTab.addEventListener('click', function () {

  tempDigit = ''
  numberOne = ''
  numberTwo = ''
  result = ''
  action = ''

  digitDisplay.textContent = ''
  digitOne.textContent = ''

})










