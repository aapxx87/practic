const btn = document.querySelector('.btn')
const linText = document.querySelector('.linText')



btn.addEventListener('click', function () {

  const cases = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


  // const color1 =
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)]

  // const color2 =
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)] +
  //   cases[Math.trunc(Math.random() * 16)]


  let colorOne = ''
  let colorTwo = ''

  for (let i = 0; i < 6; i++) {
    colorOne = colorOne + cases[Math.trunc(Math.random() * 16)]
    colorTwo = colorTwo + cases[Math.trunc(Math.random() * 16)]
  }

  linText.textContent = `Background: linear-gradient(to right, #${colorOne}, #${colorTwo})`


  document.body.style.background = `linear-gradient(to right, #${colorOne}, #${colorTwo})`


})


