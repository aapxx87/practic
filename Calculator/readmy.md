# Логика


## 1) шаг 1

Юзер вводит на цифровой клавиатуре первое нужное число. Оно может состоять из нескольких знаков. 

Для сохранения этого первого числа в процессе ввода используется переменная _let tempDigit = ''_ которая изначально пустая. 

Для определения вводимых знаком используется метод перебора массива forEach:

digitTabs.forEach(function (tab) {

  tab.addEventListener('click', function () {

    const digit = tab.textContent

    tempDigit = tempDigit + digit

    console.log(tempDigit);

    digitDisplay.textContent = tempDigit

  })
})

который определяет на какую кнопку нажал юзер, забирает из нее (из HTML) tab.textContent и добавляет это значение к переменной tempDigit, которая увеличивается на один символ при каждом нажатии на цифровую клавиатуру (css класс tab-digit)

так же данный метод выводит вводимое число в блок display


## 2) шаг 2
