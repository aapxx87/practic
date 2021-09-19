// Buttons
const btnAddCard = document.querySelector('.btnAdd')
const btnDelCard = document.querySelector('.btnDel')
const btnSaveCard = document.querySelector('.btnSave')

// Inputs
const inputQuestion = document.querySelector('.question')
const inputAnswer = document.querySelector('.answer')

const cardsContainer = document.querySelector('.cards-container')




// основной массив хранения данных
const dataArray = [
  { sideA: 'Capital of Russia', sideB: 'Moscow' },
  { sideA: 'Capital of USA', sideB: 'Washington' },
  { sideA: 'Capital of Ukrain', sideB: 'Kiev' }
]


// выгружаем содержимое массива в интерфейс
for (const item of dataArray) {

  cardsContainer.insertAdjacentHTML("beforeEnd",
    `
  <div class="box">
   <p class="questionContent">${item.sideA}</p>
   <p class="answerContent">${item.sideB}</p>
  </div>
`)

}


const cardBoxes = document.querySelectorAll('.box')

console.log(dataArray[dataArray.length - 1]);




// событие по кнопке Save
btnSaveCard.addEventListener('click', function () {


  dataArray.push({ sideA: inputQuestion.value, sideB: inputAnswer.value })

  console.log(dataArray);

  // cardsContainer.innerHTML = ''

  // for (const item of dataArray[dataArray.length - 1]) {

  cardsContainer.insertAdjacentHTML("beforeEnd",
    `
    <div class="box">
     <p class="questionContent">${dataArray[dataArray.length - 1].sideA}</p>
     <p class="answerContent" id='${dataArray.length}'>${dataArray[dataArray.length - 1].sideB}</p>
    </div>
  `)

  // }

  console.log(dataArray);

  document.getElementById(`${dataArray.length}`).style.opacity = '0'

  document.getElementById(`${dataArray.length}`).addEventListener('click', function () {

    document.getElementById(`${dataArray.length}`).style.opacity = '1'

  })

})






cardBoxes.forEach(function (box) {


  box.addEventListener('click', function () {

    console.log('Box clicked');
    box.classList.toggle('active')
  })
})




