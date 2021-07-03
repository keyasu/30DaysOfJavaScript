// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log('day - 19 - Closures');
/* 
    JavaScript 允许在外部函数内编写函数。我们可以根据需要编写任意数量的内部函数。如果内部函数访问外部函数的变量，则称为闭包。
 */

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()

// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())
    
// function outerFunction() {
//     let count = 0;
//     function innnerFunction() {
//         count++
//         return count
//     }
//     return innnerFunction
// }

// const innerFunc = outerFunction()

// console.log(innerFunc());

function outerFunction() {
    let count = 0;
    function plusOne() {
        console.log(count+'-----');
        count++
        console.log(count+'-----');
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)

console.log(innerFuncs.minusOne)
// console.log(innerFuncs.minusOne)
// console.log(innerFuncs.minusOne)
