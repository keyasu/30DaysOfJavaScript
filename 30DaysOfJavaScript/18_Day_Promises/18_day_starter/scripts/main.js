// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


console.log('day 10 - Promises');
/*
    承诺
    我们人类给予或接受在某个时间点做一些活动的承诺。
    如果我们信守承诺，我们会让别人开心，但如果我们不信守承诺，可能会导致不满。
    JavaScript 中的 Promise 与上述示例有一些共同之处。

    Promise 是一种在 JavaScript 中处理异步操作的方法。它允许具有异步操作的最终成功值或失败原因的处理程序。这让异步方法可以像同步方法一样返回值：异步方法不会立即返回最终值，而是返回一个承诺，在将来的某个时刻提供该值。

    Promise 处于以下状态之一：

        待定：初始状态，既未完成也未拒绝。
        已完成：表示操作成功完成。
        拒绝：表示操作失败。

    挂起的承诺可以用一个值来完成，也可以用一个原因（错误）来拒绝。当这些选项中的任何一个发生时，由 promise 的 then 方法排队的关联处理程序将被调用。（如果在附加相应的处理程序时承诺已经完成或被拒绝，则将调用该处理程序，因此在异步操作完成与其被附加的处理程序之间不存在竞争条件。）

    由于 Promise.prototype.then() 和 Promise.prototype.catch() 方法返回承诺，它们可以被链接起来。

    回调
    要很好地理解promise，让我们先了解一下回调。让我们看看以下回调。从以下代码块中，您会注意到回调和承诺之间的区别。

    回调 让我们看一个可以接受两个参数的回调函数。第一个参数是错误，第二个是结果。如果 err 参数为 false，则不会出现错误，否则将返回错误。
    在这种情况下，err 有一个值，它将返回 err 块。

*/

// //Callback
// const doSomething = callback => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       callback('It did not go well', skills)
//     }, 2000)
//   }
  
//   const callback = (err, result) => {
//     if (err) {
//       return console.log(err)
//     }
//     return console.log(result)
//   }
  
//   doSomething(callback)
  
  
/* 
const doSomething = callback => {
    setTimeout(() => {
        const skill = ['HTML', 'CSS', 'JS']
        callback(false, skill)
    }, 2000);

}

const callback = (err, result) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
}

doSomething(callback);
 */

/*
    承诺构造函数
    我们可以使用 Promise 构造函数创建一个 Promise。
    我们可以使用关键字 new 后跟单词 Promise 再跟一个括号来创建一个新的承诺。
        在括号内，它需要一个回调函数。
        promise 回调函数有两个参数，分别是resolve和reject函数。


    // syntax
    const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
    })



*/

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const skills = ['HTML', 'CSS', 'JS']
//       if (skills.length > 0) {
//         resolve(skills)
//       } else {
//         reject('Something wrong has happened')
//       }
//     }, 2000)
//   })
  
//   doPromise
//     .then(result => {
//       console.log(result)
//     })
//     .catch(error => console.log(error))

/* const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = []
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Somethong wrong has happened')
        }
        
    }, 2000);
})

doPromise.then(result => {
    console.log(result);
})
.catch(error => console.log(error))
 */

/* // Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.indexOf('Node') !== -1) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))
   */

/*
    获取API
    Fetch API 提供了一个用于获取资源（包括跨网络）的接口。
        任何使用过 XMLHttpRequest 的人都会觉得很熟悉，但新 API 提供了更强大、更灵活的特性集。
        在这个挑战中，我们将使用 fetch 来请求 url 和 APIS。
        除此之外，让我们看看使用 fetch API 访问网络资源的 Promise 的演示用例。

*/

// const url = 'https://restcountries.eu/rest/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => { // getting the data
//     console.log(data)
//   })
//   .catch(error => console.log(error)) // handling error if something wrong happens

/* const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error)) */

/*
    异步和等待
    Async 和 await 是处理 Promise 的优雅方式。
        它很容易理解，写起来也很干净。



*/
/* const square = async function (n) {
    return n * n
  }
  
  console.log(square(2));
   */

  const url = 'https://restcountries.eu/rest/v2/all'
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//     })
//     .catch(error => console.log(error))

const fetchData = async () => {
    try {
        const response = await fetch(url)
        console.log(response);
        const countries = await response.json()

        console.log(countries);
    } catch (err) {
        console.log(err);
    }

}
  
console.log('====== async and await');
fetchData()
