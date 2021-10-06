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
      return total
    }
  },
  {
    finlistName: 'Пенсия',
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
      return total
    }
  }

]






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
const inputFinListCur = document.querySelector('.input-add-finlist-cur')
const inputFinListNameRemove = document.querySelector('.input-remove-finlist-name')


// - Modal Window Add Movements
const modalMovements = document.querySelector('.container-modal-add-movements')
// -- Buttons
const btnModalMov = document.querySelector('.btn-addFinMove')
const btnAddNewMov = document.querySelector('.btn-addMov')

const btnAddNewMovPlus = document.querySelector('.btn-addMov-plus')

// -- Input
const inputMovFLamount = document.querySelector('.input-add-mov-amount')
const inputMovFLexrate = document.querySelector('.input-add-mov-exrate')

// - Total balances
const containerBalances = document.querySelector('.container-total-balance')

// - Modal Window Add Movements on Plus Btn
const modalMovementsPlusBtn = document.querySelector('.container-modal-add-movements-PlusBtn')

// - Overlay
const overlay = document.querySelector('.overlay')






// * Функции

// ** Функция калькулирования Total Balance по определенной валюте
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


  htmlTotalCur = `
    <p class="total-balance-title ${targetTotatalBalanceCurrency}">Total ${targetTotatalBalanceCurrency}: ${sum}</p>
    `

  containerBalances.insertAdjacentHTML('beforeend', htmlTotalCur)


}


// ** функция раскрытия детализации финлиста
const finListDetalisationVisible = function () {

  let index = 0
  let compFinListArr = document.querySelectorAll('.toggle-click-open')
  let finListTable = document.querySelectorAll('.finlist-table')


  compFinListArr.forEach(function (el, idx) {
    el.addEventListener('click', function () {
      index = idx
      finListTable[index].classList.toggle('visible')
    })
  })

}

let index = 0


// ** функция определения номера финлиста в массиве по кнопке Плюс и открытия модалки Mov Add
const finListNumberInArr = function () {

  let plusBtn = document.querySelectorAll('.finList-addNewMov')



  plusBtn.forEach(function (el) {
    el.addEventListener('click', function () {

      index = el.classList[1];

      // console.log(dataMain[index]);
      // console.log(dataMain[index].movements);

      modalMovements.style.display = 'block'
      overlay.style.display = 'block'

      inputMovFLamount.focus()

      return index
    })
  })



}


// * Функция выгрузки в интерфейс компонентов Финлистов из имеющейся базы
const displayFinLists = function (arr) {

  // проходимся по каждому элементу в массиве с финлистами, то есть пок аждому финлисту
  arr.forEach(function (item, idx) {

    // если валюта ФинЛиста = рубль, то идем по этому сценарию
    if (item.currency === 'rub') {

      // формируем HTML с движениями из каждого финлиста (тут еще не вставлен тег table, так как гоним циклом и table будет много раз)
      let htmlMov = ''
      let movTotal = 0


      // сортируем по дате исключительно массив movements
      const itemSort = item.movements.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })

      // копируем основной массив
      const itemNew = new Array(item)
      // заменяем в новjм массиве movements на отсортированные movements
      itemNew.movements = itemSort




      itemNew.movements.forEach(function (itemMov) {

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
         <div class="toggle-click-open">
          <h3 class="finList-title">${item.finlistName} <span>(${item.currency})</span></h3>
          <h3 class="finList-total">Total: ${movTotal} </h3>
         </div>
         <p class="finList-addNewMov ${idx}">+</p>
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


      // сортируем по дате исключительно массив movements
      const itemSort = item.movements.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })

      // копируем основной массив
      const itemNew = new Array(item)
      // заменяем в новjм массиве movements на отсортированные movements
      itemNew.movements = itemSort



      itemNew.movements.forEach(function (itemMov) {

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
           <div class="toggle-click-open">
            <h3 class="finList-title">${item.finlistName} <span>(${item.currency})</span></h3>
            <h3 class="finList-total">Total: ${movTotal} </h3>
           </div>
           <p class="finList-addNewMov ${idx}">+</p>
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


  finListNumberInArr()



  // plusBtn = document.querySelectorAll('.finList-addNewMov')

  // plusBtn.forEach(function (el) {
  //   el.addEventListener('click', function () {
  //     console.log(el.classList[1]);
  //   })
  // })

  console.log();

}





calcDisplayBalance(dataMain)

displayFinLists(dataMain)

finListDetalisationVisible()













// * Добавление ФинЛиста
// Открытие модалки добалвения ФинЛиста
btnModalFinList.addEventListener('click', function () {
  modalFinList.style.display = 'block'
  overlay.style.display = 'block'
})


// Скрытие модалок при клике по overlay
overlay.addEventListener('click', function () {
  modalFinList.style.display = 'none'
  modalMovements.style.display = 'none'
  overlay.style.display = 'none'
})


// Добавление ФинлИста
btnAddNewFinList.addEventListener('click', function () {

  // валидация на уникальность имени листа
  const nameFinListValidation = dataMain.find(function (acc) {
    return acc.finlistName === inputFinListName.value
  })

  // если nameFinListValidation = false, то есть мы не нашли подобного имени, то добавляем ФИнлист
  if (!nameFinListValidation) {

    // формируем объект, который будем пушить в массив с данными
    const newFinList = {
      // забираем из инпута название нового ФинЛиста
      finlistName: inputFinListName.value,
      movements: [],
      currency: inputFinListCur.value,
      calcTotal: function () {
        let total = 0
        this.movements.forEach(function (item) {
          total = total + item.movAmount
        })
        return total
      }
    }

    // пушим объект в массив с данными
    dataMain.push(newFinList)

    // обновляем интерфейс
    // -- чистим HTML
    containerFinLists.innerHTML = ''
    // -- выгружаем обновленный массив через фукнцию displayFinLists()
    displayFinLists(dataMain)

  } else {
    console.log('Такое имя уже занято');
  }


  finListDetalisationVisible()


  modalFinList.style.display = 'none'

  overlay.style.display = 'none'

  // чистим инпуты
  inputFinListName.value = ''
  inputFinListCur.value = ''

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

  // раскрытие финлиста - детализация
  finListDetalisationVisible()

  modalFinList.style.display = 'none'

  overlay.style.display = 'none'


})


// Добавление Movements
btnAddNewMov.addEventListener('click', function () {

  // добавляем вадидацию на достаочность TotalBalance при выводе средств
  // сохраняем в переменную значение Amount из инпута
  const amount = +inputMovFLamount.value

  // если mount меньше нуля
  if (amount < 0) {

    console.log('меньше нуля');

    // let index

    // // находим индекс финлиста который указан в инпуте Название Финлиста куда будем вносить изменения (проверяем что он существует)
    // dataMain.forEach(function (item, idx) {
    //   if (item.finlistName === inputMovFLname.value) {
    //     index = idx
    //   }
    // })

    // Провреяем достаточно ли баланса для вывода желаемой суммы
    if (dataMain[index].calcTotal() - Math.abs(amount) < 0) {
      // если недостаточно, то ничего ен происходит
      console.log('Превышен лимит баланса');
      console.log(amount);

    } else if (dataMain[index].calcTotal() - Math.abs(amount) >= 0) {
      // если достаточно то создаем объект и пушим его в массив
      console.log('Можно отнимать');

      let objNewMov

      const now = new Date()
      const day = `${now.getDate()}`.padStart(2, 0)
      const month = `${now.getMonth() + 1}`.padStart(2, '0') // так как месяц стартует с нуля, то прибалвяем единицы
      const year = now.getFullYear()
      const dateCur = `${day}.${month}.${year}`


      if (inputMovFLexrate.value) {
        // шаблон при наличии курса обмена - тогда добавляется строка курса

        objNewMov = {
          movAmount: +inputMovFLamount.value,
          date: dateCur,
          exrate: +inputMovFLexrate.value
        }

      } else {

        // шаблрн при отсутствии курса обмена

        objNewMov = {
          movAmount: +inputMovFLamount.value,
          date: dateCur,
        }

      }

      // пушим объект нового Движения в массив со всеми данными в элемент с нужным индексом в массив с movements
      dataMain[index].movements.push(objNewMov)

      containerFinLists.innerHTML = ''
      // -- выгружаем обновленный массив через фукнцию displayFinLists()
      displayFinLists(dataMain)


      // чистим инпуты
      inputMovFLamount.value = ''
      inputMovFLexrate.value = ''


    }


    // если amount > 0, то все сильно проще чем в условии выше
  } else {

    // let index

    // // находим индекс финлиста который указан в инпуте Название Финлиста куда будем вносить изменения (проверяем что он существует)
    // dataMain.forEach(function (item, idx) {
    //   if (item.finlistName === inputMovFLname.value) {
    //     index = idx
    //   }
    // })

    console.log('больше нуля');

    let objNewMov

    const now = new Date()
    const day = `${now.getDate()}`.padStart(2, 0)
    const month = `${now.getMonth() + 1}`.padStart(2, '0') // так как месяц стартует с нуля, то прибалвяем единицы
    const year = now.getFullYear()
    const dateCur = `${day}.${month}.${year}`

    if (inputMovFLexrate.value) {

      objNewMov = {
        movAmount: +inputMovFLamount.value,
        date: dateCur,
        exrate: +inputMovFLexrate.value
      }

    } else {

      objNewMov = {
        movAmount: +inputMovFLamount.value,
        date: dateCur,
      }

    }

    // пушим объект нового Движения в массив со всеми данными в элемент с нужным индексом в массив с movements
    dataMain[index].movements.push(objNewMov)

    containerFinLists.innerHTML = ''
    // -- выгружаем обновленный массив через фукнцию displayFinLists()
    displayFinLists(dataMain)


    // чистим инпуты
    inputMovFLamount.value = ''
    inputMovFLexrate.value = ''

  }

  // раскрытие финлиста - детализация
  finListDetalisationVisible()


  modalMovements.style.display = 'none'

  overlay.style.display = 'none'


  console.log(dataMain);

})










