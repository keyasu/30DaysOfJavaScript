// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// console.log(123);
// a callback function, the function could be any name
// const callback = (n) => {
//     return n ** 2
//   }
//   ​
//   // function take other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   ​
//   console.log(cube(callback, 3))
  

// const callback = (n) => {
//     return n ** 2
// }

// function cube(callback, n) {
//     return callback(n)
// }

// console.log(cube(callback, 12));

// Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//   ​
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))

// const highterOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }

// console.log(highterOrder(2)(3)(10));

// const numbers = [1, 2, 3, 4]
// ​
// const sumArray = arr => {
//   let sum = 0
//   const callBack = function(element) {
//     sum += element
//   }
//   numbers.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))


// const numbers = [1, 2, 3, 4, 5]
// const sunArray = arr => {
//     let sum = 0
//     const callback = function(element) {
//         sum += element
//     }
//     // numbers.forEach(callback)
//     numbers.forEach(function(element) {
//         sum += element
//     })

//     return sum
// }

// console.log(sunArray(numbers));


// syntax
// function callBack() {
//     // code goes here
//   }
//   setInterval(callback, duration)

console.log(123);

// function callBack() {
//    console.log(123);  
// }
// setInterval(callBack, 4)

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 2000) // it prints hello in every 2 seconds

// function sayHello() {
//     console.log('Hello');
// }
// setInterval(sayHello, 2000)
  

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string')

// console.log(arrAllStr)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name == 'string')
// console.log(areAllStr);

// const bools = [true, true, true, true]
// const areAllTrue = bools.every((b) => {
//   return b === true
// })

// console.log(areAllTrue) //true

// objArr.sort(function (a, b) {
//     if (a.key < b.key) return -1
//     if (a.key > b.key) return 1
//     return 0
//   })
  
//   // or
  
//   objArr.sort(function (a, b) {
//     if (a['key'] < b['key']) return -1
//     if (a['key'] > b['key']) return 1
//     return 0
//   })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) // sorted ascending
  //[{…}, {…}, {…}, {…}]
  