// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log('days - 13 - 控制台对象方法');

console.log('%d %s of JavaScript', 30, 'Days');

// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ) // log output green red and yellow text

// console.log('%c30 Days Of JavaScript', 'color:green');
// console.log('%c 30 Days%c %cOf%c %cJavaScript%c', 'color:orange', '', 'color:red', '', 'color:yellow');

// // console.warn('This is a warning')
// // console.warn(
// //   'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
// // )
// // console.warn('Warning is different from error')

// console.warn('This is a warning');
// console.warn(
//     'Yout are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
// );

// console.warn('Warning is different from error');

// // console.error('This is an error message')
// // console.error('We all make mistakes')

// console.error('This is an error message');
// console.error('We all make mistakes');

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names);

// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)
// const users = [
//     {
//       name: 'Asabeneh',
//       title: 'Programmer',
//       country: 'Finland',
//       city: 'Helsinki',
//       age: 250
//     },
//     {
//       name: 'Eyob',
//       title: 'Teacher',
//       country: 'Sweden',
//       city: 'London',
//       age: 25
//     },
//     {
//       name: 'Asab',
//       title: 'Instructor',
//       country: 'Norway',
//       city: 'Oslo',
//       age: 22
//     },
//     {
//       name: 'Matias',
//       title: 'Developer',
//       country: 'Denmark',
//       city: 'Copenhagen',
//       age: 28
//     }
//   ]
//   console.table(users)

// const countries1 = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
//   ]
  
// console.time('Regular for loop1')
// for (let i = 0; i < countries1.length; i++) {
//     const element = countries1[i];
//     console.log(element[0], element[1]);
    
// }
// console.timeEnd('Regular for loop1')

//   console.time('Regular for loop')
//   for (let i = 0; i < countries1.length; i++) {
//     console.log(countries1[i][0], countries1[i][1])
//   }
//   console.timeEnd('Regular for loop')
  
// console.time('for of loop')
// for (const [name, city] of countries1) {
//     console.log(name, city);
// }
// console.timeEnd('for of loop')

// console.time('forEach loop1')
// countries1.forEach(([name, city]) => { 
//     console.log(name, city);
// })
// console.timeEnd('forEach loop1')  

// console.info('30 Days Of JavaScript challenge is trending on Github')
// console.info('30 Days Of fullStack challenge might be released')
// console.info('30 Days Of HTML and CSS challenge might be released')


// console.assert(4 > 3, '4 is greater than 3')
// console.assert(3 > 4, '3 is not greater than 4')
// for (let i = 0; i < 10; i++) {
//     let errorMessage = `${i} is not even`
//     console.log('the # is ' + i)
//     console.assert(i % 2 === 0 , {number: i, errorMessage: errorMessage})
    
// }
/* 
const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries1')
console.log(countries1)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()
 */

const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()
  

//   console.clear()