const boxes = document.querySelectorAll('.box')
const backSides = document.querySelectorAll('.backSide')
const frontSides = document.querySelectorAll('.frontSide')



let symbArr = []



boxes.forEach(function (box) {

  box.addEventListener('click', function () {


    box.classList.add('active')

    symbArr.push(box.classList[1])

    console.log(symbArr);


    setTimeout(function () {
      box.classList.remove('active')

      if (symbArr.length = 2) {

        if (symbArr[0] === symbArr[1]) {
          console.log('Guess');

          let cardsGuessed = document.querySelectorAll(`.${symbArr[1]}`)

          cardsGuessed.forEach(function (el) {
            el.style.visibility = 'hidden';
          })


        } else {
          symbArr = []
        }

      }

      symbArr = []

      console.log(symbArr);

    }, 700)



  })

})






