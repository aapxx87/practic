const arr1 = [4, 5, 6]
const arr2 = [1, 2, 3]


const arrayMadness = function (arr1, arr2) {

  const a = arr1.map(function (el) {
    return el ** 1
  }).reduce(function (sum, cur) {
    return sum + cur
  }, 0)

  console.log(a);


  const b = arr2.map(function (el) {
    return el ** 1
  }).reduce(function (sum, cur) {
    return sum + cur
  }, 0)

  console.log(b);

  return a > b



}


console.log(arrayMadness(arr1, arr2));


const mov = [{ movAmount: 1, movDate: '01.01.2021' }, { movAmount: 2, movDate: '01.01.2021' }, { movAmount: 3, movDate: '01.01.2021' }]

const movSum = mov.reduce(function (acc, cur) {
  return acc + cur.movAmount
}, 0)


console.log(movSum);