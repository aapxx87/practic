const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

// -------  Парсинг курса валют


// парсинг RUB/USD



const getCurrencyData = async function () {

  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function (response) {

      return response.json()

    })
    .then(function (data) {

      console.log(data.Valute.USD.Value);

    })

}

getCurrencyData()







const investmentPortfolio = [
  {
    stockName: 'Apple',
    stockTicker: 'aapl',
    buyDate: '01.01.2020',
    buyPrice: 75,
    volume: 4,
    lastPrice: 150,
    usdRubRateBuyDate: 73,
    pAndLusd: 300,
    pAndLrub: 300,
  }
]






// const stocks = ['aap11', 'nvda', 'fb']

// const getStockPrices = function (arr) {

//   arr.forEach(function (el) {

//     fetch(`https://api.tdameritrade.com/v1/marketdata/${el}/quotes?apikey=I6POQMG2MLCUUT26XJCSHZAEX4HF4AZG`)
//       .then(function (response) {

//         return response.json()

//       }).then(function (data) {

//         const ticker = el.toUpperCase()

//         console.log(`${ticker} price: ${data[ticker].lastPrice}`);
//       })

//   })

// }


// getStockPrices(stocks)







const getStockPrice = function (name) {


  fetch(`https://api.tdameritrade.com/v1/marketdata/${name}/quotes?apikey=I6POQMG2MLCUUT26XJCSHZAEX4HF4AZG`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {

      console.log(data);

      const ticker = name.toUpperCase()

      result.textContent = `${ticker} price: ${data[ticker].lastPrice}`

      // console.log(`${ticker} price: ${data[ticker].lastPrice}`);
    })
    .catch(function (err) {

      return alert(err.message)
    })



}




btn.addEventListener('click', function () {
  getStockPrice('aapl1')
})

getStockPrice('_____')
















