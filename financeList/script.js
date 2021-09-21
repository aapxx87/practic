// * Основной объект хранения всех данных с предустановленными данными

const dataMain = [
  {
    finlistName: 'investments',
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
    ]
  },
  {
    finlistName: 'saving $',
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
    ]
  }

]





// * Selectors
// Containers
const containerGeneral = document.querySelector('.container-general')
const containerFinLists = document.querySelector('.container-finList')


// - Modal Window Add New Fin List
const modalFinList = document.querySelector('.container-modal-add-finlist')
// -- Buttons
const btnModalFinList = document.querySelector('.btn-addModalFinList')
const btnAddNewFinList = document.querySelector('.btn-addFinList')
// -- Input
const inputFinListName = document.querySelector('.input-add-finlist-name')


// - Modal Window Add Movements
const modalMovements = document.querySelector('.container-modal-add-movements')
// -- Buttons
const btnModalMov = document.querySelector('.btn-addFinMove')
const btnAddNewMov = document.querySelector('.btn-addMov')
// -- Input
const inputMovFLname = document.querySelector('.input-add-fl-name')
const inputMovFLdate = document.querySelector('.input-add-mov-date')
const inputMovFLamount = document.querySelector('.input-add-mov-amount')






// * Выгрузка в интерфейс комопонентов Финлистов из имеющейся базы
const displayFinLists = function (arr) {

  arr.forEach(function (item) {


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
      // суммируем все движения в единое число
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


  })

}

displayFinLists(dataMain)


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


// * Добавление Movements
btnAddNewMov.addEventListener('click', function () {

  let index

  // находим индекс финлиста который указан в инпуте Название Финлиста куда будем вносить изменения (проверяем что он существует)
  dataMain.forEach(function (item, idx) {
    if (item.finlistName === inputMovFLname.value) {
      index = idx
    }
  })

  console.log(index);








})
