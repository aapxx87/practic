const cardsContainer = document.querySelector('.cards-container')


// Buttons
const btnAddCard = document.querySelector('.btnAdd')
const btnDelCard = document.querySelector('.btnDel')
const btnSaveCard = document.querySelector('.btnSave')

// Inputs
const inputQuestion = document.querySelector('.question')
const inputAnswer = document.querySelector('.answer')


const cardBoxes = document.querySelectorAll('.box')





btnSaveCard.addEventListener('click', function () {


  cardsContainer.insertAdjacentHTML("beforeEnd",
    `
    <div class="box">
     <p class="questionContent">${inputQuestion.value}</p>
     <p class="answerContent">${inputAnswer.value}</p>
    </div>
  `)

})



cardBoxes.forEach(function (box) {
  box.addEventListener('click', function () {
    box.classList.toggle('active')
  })
})




