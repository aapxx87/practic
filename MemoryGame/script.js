document.addEventListener('DOMContentLoaded', function () {


  // card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheesburger',
      img: 'images/cheesburger.png'
    },
    {
      name: 'cheesburger',
      img: 'images/cheesburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'icecream',
      img: 'images/icecream.png'
    },
    {
      name: 'icecream',
      img: 'images/icecream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]


  // create game board
  const grid = document.querySelector('.grid')
  let cardsChosen = []
  let cardsChoseId = []

  function createBoard() {

    cardArray.forEach(function (el, idx) {
      let card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', idx)
      card.className = 'img'
      card.addEventListener('click', flipCard)

      grid.appendChild(card)

    })

  }



  // check for matches
  function checkForMatches() {
    let card = document.querySelectorAll('img')
  }



  // flip your card
  function flipCard() {

    let cardId = this.getAttribute('data-id')

    cardsChosen.push(cardArray[cardId].name)

    cardsChoseId.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }

  }



  createBoard()










})