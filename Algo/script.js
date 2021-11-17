// -------  Бинарный поиск



const arr = []

// console.log(2 ** 10);

const elementAmount = 2 ** 10 - 1

// console.log(elementAmount);


for (let i = 1; i <= elementAmount; i++) {
  arr.push(i)
}

// console.log(arr);



const fuessBinaryNumber = function (arr, number) {


  let low = 0

  let high = arr.length - 1

  let mid = Math.floor((low + high) / 2)


  let guess = arr[mid]

  let whileCount = 0

  while (low <= high) {

    whileCount++

    if (guess === number) {

      // console.log(`Victory: number is ${guess} in iteration ${whileCount}`);

      return whileCount

    } else if (number > guess) {

      low = mid + 1
      mid = Math.floor((low + high) / 2)
      guess = arr[mid]

    } else if (number < guess) {

      high = mid - 1
      mid = Math.floor((low + high) / 2)
      guess = arr[mid]

    }

  }



}


// console.log(fuessBinaryNumber(arr, 1));

// for (let i = 1; i <= elementAmount; i++) {


//   if (fuessBinaryNumber(arr, i) > 10) {
//     console.log('Alert, > 10')
//   } else {
//     console.log('<= 10 iteration');
//   }


// }



// -------  Факториал


const factorial = function (number) {

  let result = number

  for (let i = number - 1; i > 0; i--) {

    result = result * i

  }

  return result
}


// console.log(factorial(3));





// -------  Сортировка массива

const arr2 = [2, 9, 4, 1, 3, 6, -5, 8, 7, 5, 0]


const sortArrFromSmall = function (arr) {

  let min = arr[0]

  let smalIdx = 0

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i]
      smalIdx = i
    }

  }

  return smalIdx

}

// console.log(sortArrFromSmall(arr2));



// -------  Парсинг курса валют


const getCurrencyData = function () {
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data.Valute.USD.Value);
    })
}


getCurrencyData()


const getPrice = function () {

  fetch(`https://api.tdameritrade.com/v1/marketdata/aapl/pricehistory?apikey=I6POQMG2MLCUUT26XJCSHZAEX4HF4AZG&periodType=day&period=10&frequency=daily%3A%201&endDate=15.11.2021&startDate=01.01.2020&needExtendedHoursData=true`)
    .then(function (response) {
      return response.json()
    }).then(function (data) {

      console.log(data);
    })

}


// getPrice()


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






const stocks = ['aapl', 'nvda', 'fb']


const getCurrencyDataTinkoff = function (arr) {

  arr.forEach(function (el) {

    fetch(`https://api.tdameritrade.com/v1/marketdata/${el}/quotes?apikey=I6POQMG2MLCUUT26XJCSHZAEX4HF4AZG`)
      .then(function (response) {
        return response.json()
      }).then(function (data) {

        const ticker = el.toUpperCase()
        console.log(`${ticker} price: ${data[ticker].lastPrice}`);
      })

  })

}


getCurrencyDataTinkoff(stocks)





