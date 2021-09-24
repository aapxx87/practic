// * Основной объект хранения всех данных с предустановленными данными

const dataMain = [
  {
    finlistName: 'Отпуск',
    currency: 'rub',
    movements: [
      {
        movAmount: 5000,
        date: '01.01.2021'
      },
      {
        movAmount: 4000,
        date: '01.02.2021'
      },
      {
        movAmount: 6000,
        date: '01.03.2021'
      },
    ],
    calcTotal: function () {

      let total = 0

      this.movements.forEach(function (item) {
        total = total + item.movAmount
      })

      // console.log(total);

      return total

    }
  },
  {
    finlistName: 'Доллары',
    currency: 'usd',
    movements: [
      {
        movAmount: 300,
        date: '01.01.2021',
        exrate: 72.2
      },
      {
        movAmount: 200,
        date: '01.02.2021',
        exrate: 72.8
      },
      {
        movAmount: 170,
        date: '01.03.2021',
        exrate: 71.9
      },
    ],
    calcTotal: function () {

      let total = 0

      this.movements.forEach(function (item) {
        total = total + item.movAmount
      })

      // console.log(total);

      return total

    }
  },
  {
    finlistName: 'Накопления',
    currency: 'rub',
    movements: [
      {
        movAmount: 15000,
        date: '01.01.2021'
      },
      {
        movAmount: 20000,
        date: '01.02.2021'
      },
      {
        movAmount: 17000,
        date: '01.03.2021'
      },
    ],
    calcTotal: function () {

      let total = 0

      this.movements.forEach(function (item) {
        total = total + item.movAmount
      })

      // console.log(total);

      return total

    }
  },
  {
    finlistName: 'Пенсия $',
    currency: 'usd',
    movements: [
      {
        movAmount: 400,
        date: '01.01.2021',
        exrate: 72.2
      },
      {
        movAmount: 50,
        date: '01.02.2021',
        exrate: 72.8
      }
    ],
    calcTotal: function () {

      let total = 0

      this.movements.forEach(function (item) {
        total = total + item.movAmount
      })

      // console.log(total);

      return total

    }
  }

]


// dataMain[0].calcTotal()








// * Selectors
// Containers
const containerGeneral = document.querySelector('.container-general')
const containerFinLists = document.querySelector('.container-finList')


// - Modal Window Add New Fin List / Remove Fin List
const modalFinList = document.querySelector('.container-modal-add-finlist')
// -- Buttons
const btnModalFinList = document.querySelector('.btn-addModalFinList')
const btnAddNewFinList = document.querySelector('.btn-addFinList')
const btnRemoveFinList = document.querySelector('.btn-removeFinList')
// -- Input
const inputFinListName = document.querySelector('.input-add-finlist-name')
const inputFinListNameRemove = document.querySelector('.input-remove-finlist-name')


// - Modal Window Add Movements
const modalMovements = document.querySelector('.container-modal-add-movements')
// -- Buttons
const btnModalMov = document.querySelector('.btn-addFinMove')
const btnAddNewMov = document.querySelector('.btn-addMov')
// -- Input
const inputMovFLname = document.querySelector('.input-add-fl-name')
const inputMovFLdate = document.querySelector('.input-add-mov-date')
const inputMovFLamount = document.querySelector('.input-add-mov-amount')
const inputMovFLexrate = document.querySelector('.input-add-mov-exrate')

// - Total balances
const containerBalances = document.querySelector('.container-total-balance')




// * Калькулирование Total Balance по определенной валюте

const calcDisplayBalance = function (obj) {


  const targetTotatalBalanceCurrency = 'usd'

  const mapArr = []

  obj.forEach(function (item) {
    mapArr.push([item.currency, item.calcTotal()])
  })



  let sum = 0

  mapArr.forEach(function (item) {

    if (item[0] === targetTotatalBalanceCurrency) {
      sum = sum + item[1]
    }

  })

  // console.log(sum);


  htmlTotalCur = `
    <p class="total-balance-title ${targetTotatalBalanceCurrency}">Total ${targetTotatalBalanceCurrency}: ${sum}</p>
    `

  containerBalances.insertAdjacentHTML('beforeend', htmlTotalCur)


}

calcDisplayBalance(dataMain)






// * ФУНКЦИЯ - Выгрузка в интерфейс комопонентов Финлистов из имеющейся базы
const displayFinLists = function (arr) {

  // проходимся по каждому элементу в массиве с финлистами, то есть пок аждому финлисту
  arr.forEach(function (item) {

    // если валюта ФинЛиста = рубль, то идем по этому сценарию
    if (item.currency === 'rub') {

      // формируем HTML с движениями из каждого финлиста (тут еще не вставлен тег table, так как гоним циклом и table будет много раз)
      let htmlMov = ''
      let movTotal = 0

      item.movements.forEach(function (itemMov) {

        htmlMov = htmlMov + `
      <tr>
        <td class="col">${itemMov.date}</td>
        <td class="col">${itemMov.movAmount}</td>
      </tr>
      `
        // суммируем все движения в единое число - Total
        movTotal = movTotal + itemMov.movAmount
      })


      // формируем заголовок с Title каждого финлиста
      let htmlMovTitle = `
      <div class="finlist-header">
        <h3 class="finList-title">${item.finlistName}</h3>
        <h3 class="finList-total">Total: ${movTotal} </h3>
      </div>
    `

      // формируем таблицу со всеми движениями
      const htmlMovTable = `
    <table class="finlist-table">
      <tr>
        <td class="col table-header">Date</td>
        <td class="col table-header">Amount</td>
      </tr>
    ${htmlMov}
     </table>
    `

      // формируем финальную таблицу Заголовок + Таблица Движений по Финлисту (cсклеиваем Title + Movements)
      const htmlTitleMov = htmlMovTitle + htmlMovTable

      // формируем финальный html компоненты comp-finList-box
      const html = `
      <div class="comp-finList-box">
      ${htmlTitleMov}
      </div>
    `

      // вставляем компоненту в контейнер container-general - то есть финально выгружаем в интерфейс
      containerFinLists.insertAdjacentHTML('beforeend', html)


    } else {

      // формируем HTML с движениями из каждого финлиста (тут еще не вставлен тег table, так как гоним циклом и table будет много раз)
      let htmlMov = ''
      let movTotal = 0

      item.movements.forEach(function (itemMov) {

        htmlMov = htmlMov + `
        <tr>
          <td class="col">${itemMov.date}</td>
          <td class="col">${itemMov.movAmount}</td>
          <td class="col">${itemMov.exrate}</td>
        </tr>
        `
        // суммируем все движения в единое число - Total
        movTotal = movTotal + itemMov.movAmount
      })


      // формируем заголовок с Title каждого финлиста
      let htmlMovTitle = `
        <div class="finlist-header">
          <h3 class="finList-title">${item.finlistName}</h3>
          <h3 class="finList-total">Total: ${movTotal} </h3>
        </div>
      `

      // формируем таблицу со всеми движениями
      const htmlMovTable = `
      <table class="finlist-table">
        <tr>
          <td class="col table-header">Date</td>
          <td class="col table-header">Amount</td>
          <td class="col table-header">Ex rate</td>
        </tr>
      ${htmlMov}
      </table>
      `

      // формируем финальную таблицу Заголовок + Таблица Движений по Финлисту (cсклеиваем Title + Movements)
      const htmlTitleMov = htmlMovTitle + htmlMovTable

      // формируем финальный html компоненты comp-finList-box
      const html = `
        <div class="comp-finList-box">
        ${htmlTitleMov}
        </div>
      `

      // вставляем компоненту в контейнер container-general - то есть финально выгружаем в интерфейс
      containerFinLists.insertAdjacentHTML('beforeend', html)


    }


  })

}

displayFinLists(dataMain)


// * ФУНКЦИЯ - Очистка инпутов после подтверждения действия




// * Добавление ФинЛиста
// Открытие модалки добалвения ФинЛиста
btnModalFinList.addEventListener('click', function () {
  modalFinList.classList.toggle('visible')
})


// Добавление ФинлИста
btnAddNewFinList.addEventListener('click', function () {

  // формируем объект, который будем пушить в массив с данными
  const newFinList = {
    // забираем из инпута название нового ФинЛиста
    finlistName: inputFinListName.value,
    movements: []
  }

  // пушим объект в массив с данными
  dataMain.push(newFinList)

  // обновляем интерфейс
  // -- чистим HTML
  containerFinLists.innerHTML = ''
  // -- выгружаем обновленный массив через фукнцию displayFinLists()
  displayFinLists(dataMain)

  modalFinList.classList.remove('visible')

})


// * Удаление ФинЛиста
btnRemoveFinList.addEventListener('click', function () {


  let index

  // находим индекс финлиста который указан в инпуте Название Финлиста для удаления в общем массиве с ФИнлистами
  dataMain.forEach(function (item, idx) {
    if (item.finlistName === inputFinListNameRemove.value) {
      index = idx
    }
  })


  dataMain.splice(index, 1)

  // обновляем интерфейс
  // -- чистим HTML
  containerFinLists.innerHTML = ''
  // -- выгружаем обновленный массив через фукнцию displayFinLists()
  displayFinLists(dataMain)


  // чистим инпуты
  inputFinListNameRemove.value = ''


})



// * Добавление Movements
// Открытие модалки добалвения Movements
btnModalMov.addEventListener('click', function () {
  modalMovements.classList.toggle('visible')
})


// Добавление Movements
btnAddNewMov.addEventListener('click', function () {

  // если в поле инпута Exchange rate не пустая, то есть что-то вписано, то формируем объект как для валюты с доп полем курса обмена
  if (inputMovFLexrate.value) {

    let index

    // находим индекс финлиста который указан в инпуте Название Финлиста куда будем вносить изменения (проверяем что он существует)
    dataMain.forEach(function (item, idx) {
      if (item.finlistName === inputMovFLname.value) {
        index = idx
      }
    })


    // формируем типовый объект, описывающий Движение, в него вставляем значения из инпутов модалки добавления Движений
    const objNewMov = {
      movAmount: +inputMovFLamount.value,
      date: inputMovFLdate.value,
      exrate: +inputMovFLexrate.value
    }

    // пушим объект нового Движения в массив со всеми данными в элемент с нужным индексом в массив с movements
    dataMain[index].movements.push(objNewMov)


    // обновляем интерфейс
    // -- чистим HTML
    containerFinLists.innerHTML = ''
    // -- выгружаем обновленный массив через фукнцию displayFinLists()
    displayFinLists(dataMain)


    // чистим инпуты
    inputMovFLname.value = ''
    inputMovFLamount.value = ''
    inputMovFLdate.value = ''



  } else {

    let index

    // находим индекс финлиста который указан в инпуте Название Финлиста куда будем вносить изменения (проверяем что он существует)
    dataMain.forEach(function (item, idx) {
      if (item.finlistName === inputMovFLname.value) {
        index = idx
      }
    })


    // формируем типовый объект, описывающий Движение, в него вставляем значения из инпутов модалки добавления Движений
    const objNewMov = {
      movAmount: +inputMovFLamount.value,
      date: inputMovFLdate.value
    }

    // пушим объект нового Движения в массив со всеми данными в элемент с нужным индексом в массив с movements
    dataMain[index].movements.push(objNewMov)


    // обновляем интерфейс
    // -- чистим HTML
    containerFinLists.innerHTML = ''
    // -- выгружаем обновленный массив через фукнцию displayFinLists()
    displayFinLists(dataMain)


    // чистим инпуты
    inputMovFLname.value = ''
    inputMovFLamount.value = ''
    inputMovFLdate.value = ''

  }





  console.log(dataMain);




})





