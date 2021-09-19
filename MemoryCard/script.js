const boxes = document.querySelectorAll('.box')
const backSides = document.querySelectorAll('.backSide')
const frontSides = document.querySelectorAll('.frontSide')


boxes.forEach(function (box) {

  box.addEventListener('click', function () {

    box.classList.add('active')

    setTimeout(function () {
      box.classList.remove('active')
    }, 1000)


    console.log(box);





  })
})