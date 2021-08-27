const btn = document.querySelector('.btn')



btn.addEventListener('click', function () {



  const cases = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


  const color =
    cases[Math.trunc(Math.random() * 16)] +
    cases[Math.trunc(Math.random() * 16)] +
    cases[Math.trunc(Math.random() * 16)] +
    cases[Math.trunc(Math.random() * 16)] +
    cases[Math.trunc(Math.random() * 16)] +
    cases[Math.trunc(Math.random() * 16)]

  console.log(color);

  document.body.style.background = `#${color}`


})


