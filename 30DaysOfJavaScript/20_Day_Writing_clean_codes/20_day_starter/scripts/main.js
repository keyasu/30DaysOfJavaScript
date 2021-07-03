// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log('days - 20 - writing clean node');
/* 
JavaScript 风格指南
    JavaScript 样式指南是一组标准，用于说明应如何编写和组织 JavaScript 代码。在本节中，我们将讨论 JavaScript 指南以及如何编写干净的代码。

    JavaScript 是一种编程语言，就像人类语言一样，它也有语法。为了令人信服和简单起见，JavaScript 的语法必须遵循一定的风格指南。

为什么我们需要风格指南
    你已经独自编码了这么久，但现在它似乎在一个团队中工作。无论如何，只要代码可以运行，您编写代码就无关紧要，但是当您与 10 个或 20 个或更多开发人员组成的团队在一个项目和相同的代码库上工作时，代码将变得混乱且难以管理，如果有的话没有任何可遵循的准则。

您可以制定自己的指导方针和惯例，也可以改编完善的指导方针。让我们知道最常见的指南。最常见的 JavaScript 风格指南

    Airbnb JavaScript 风格指南
    JavaScript 标准样式指南
    谷歌 JavaScript 风格指南

Airbnb JavaScript 风格指南
    Airbnb 拥有互联网上最流行的 JavaScript 风格指南之一。它几乎涵盖了 JavaScript 的所有方面，并且被许多开发人员和公司采用。您可以查看Airbnb 风格指南。我也建议尝试一下。他们的风格非常易于使用且易于理解。

标准 JavaScript 风格指南
    这个指南不像Airbnb那么受欢迎，但值得一看。他们删除了样式指南中的分号。

谷歌 JavaScript 风格指南
    我没有说太多关于 Google 的指南，我也没有使用，我建议你从这个链接看一看。

JavaScript 编码约定
    在这个挑战中，我们还使用了通用的 JavaScript 编码编写约定和指南。编码约定是由个人、团队或公司开发的编程风格指南。

    编码约定有助于：
        编写干净的代码
        提高代码可读性
        提高代码的可重用性和可维护性

    编码约定包括
        变量的命名和声明规则
        函数的命名和声明规则
        空格、缩进和注释的使用规则
        编程实践和原则


30DaysOfJavaScript 中使用的约定

在这个挑战中，我们遵循常规的 JavaScript 约定，但我还添加了我对写作的偏好。

    我们对变量和函数使用驼峰命名法。
    所有变量名都以字母开头。
    我们选择对常量、数组、对象和函数使用const。我们选择使用单引号或反引号代替双引号。单引号正变得流行。
    我们还从我们的代码中删除了分号，但这是个人喜好的问题。
    算术运算符、赋值运算符和逗号后的空格
    箭头函数代替函数声明
    如果函数是单行函数，则显式返回而不是隐式返回
    对象的最后一个值中没有尾随逗号
    我们更喜欢这个 +=, -=, *= /=, **= 而不是更长的版本
    当我们使用 console.log() 时，最好打印一个标签字符串来识别控制台来自哪里





*/

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'

// const PI = Math.PI
// const gravity = 9.81

// // function which prints full name of a person
// const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// // function which calculate a square of a number
// const square = (n) => n * n

// a function which generate random hexa colors
// const hexaColor = () => {
//   const str = '0123456789abcdef'
//   let hexa = '#'
//   let index
//   for (let i = 0; i < 6; i++) {
//     index = Math.floor(Math.random() * str.length)
//     hexa += str[index]
//   }
//   return hexa
// }

/* // a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}

const randomColor =() => {
    const str = '1234567890abcdef'
    let hexa = '#'
    
    for (let i=0; i< 6; i++) {
        console.log(Math.random() * str.length+'------------');
        let index = Math.floor(Math.random() * str.length)
        console.log(index+'----');
        hexa += str[index]
    }
    return hexa
}
console.log(randomColor());

// console.log(hexaColor()); */
// console.log(showDateTime());


for (let i = 0; i < n; i++){
    console.log()
}

// declaring an array variable
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCas())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in user) {
    console.log(key)
}

// declaring object literal
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
    isMarried: true
  }
  // iterating through object keys
  for(const key in person) {
      console.log(key, person[key])
  }
  
  // syntax
if (condition) {
    // this part of code run for truthy condition
} else {
    // this part of code run for false condition
}
   

// if else
let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  3 is a positive number

  