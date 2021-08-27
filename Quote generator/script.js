const btnGenerate = document.querySelector('.btn')
const btnRestart = document.querySelector('.btn-restart')
const quoteText = document.querySelector('.quoteText')
const quoteAuthor = document.querySelector('.author')


const quoteBase = [
  {
    quote: '"Either you run the day, or the day runs you."',
    author: 'Jim Rohn'
  },
  {
    quote: '"Every strike brings me closer to the next home run."',
    author: 'Babe Ruth'
  },
  {
    quote: '"Go confidently in the direction of your dreams. Live the life you have imagined."',
    author: 'Henry David Thoreau'
  },
  {
    quote: '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    author: 'Mahatma Gandhi'
  },
  {
    quote: '"Life is 10% what happens to me and 90% of how I react to it."',
    author: 'Charles Swindoll'
  },
  {
    quote: '"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."',
    author: 'Mark Twain'
  },
  {
    quote: '"I attribute my success to this: I never gave or took any excuse."',
    author: 'Florence Nightingale'
  },
]


const arr = []

quoteBase.length

for (let i = 0; i < quoteBase.length; i++) {
  arr.push(i)
}

console.log(arr);

quoteText.textContent = "Click  button 'Generate Quote' below to start!"



btnGenerate.addEventListener('click', function () {

  if (arr.length > 0) {

    const randomNumber = Math.trunc(Math.random() * arr.length)

    console.log(quoteBase[arr[randomNumber]].quote);

    quoteText.textContent = quoteBase[arr[randomNumber]].quote

    quoteAuthor.textContent = quoteBase[arr[randomNumber]].author

    arr.splice(randomNumber, 1)

    console.log(arr);

  } else {

    console.log('начните заново');

    quoteText.textContent = "That's all at moment :) You can discover quotes again!"

    quoteAuthor.textContent = ''

    btnGenerate.style.display = 'none'
    btnRestart.style.display = 'inline-block'

  }

})



btnRestart.addEventListener('click', function () {

  quoteBase.length

  for (let i = 0; i < quoteBase.length; i++) {
    arr.push(i)
  }

  const randomNumber = Math.trunc(Math.random() * arr.length)

  console.log(quoteBase[arr[randomNumber]].quote);

  quoteText.textContent = quoteBase[arr[randomNumber]].quote

  quoteAuthor.textContent = quoteBase[arr[randomNumber]].author

  arr.splice(randomNumber, 1)

  btnGenerate.style.display = 'inline-block'
  btnRestart.style.display = 'none'

})


