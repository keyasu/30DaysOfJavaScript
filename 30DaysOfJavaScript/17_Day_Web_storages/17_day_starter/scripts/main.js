console.log('day -17');
/* 
    HTML5 网络存储
    Web 存储（sessionStorage 和 localStorage）是一种新的 HTML5 API，与传统 cookie 相比具有重要的优势。
    在 HTML5 之前，应用程序数据必须存储在 cookie 中，包含在每个服务器请求中。
    Web存储更安全，可以在本地存储大量数据，不影响网站性能。
    许多网络浏览器中 cookie 的数据存储限制是每个 cookie 大约 4 KB。
    We Storages 可以存储更大的数据（至少 5MB）并且永远不会传输到服务器。
    来自相同或同一个来源的所有站点都可以存储和访问相同的数据。

    可以使用 JavaScript 访问存储的数据，这使您能够利用客户端脚本来完成许多传统上涉及服务器端编程和关系数据库的事情。这是两个 Web Storage 对象：

    会话存储
    本地存储

    localStorage 与 sessionStorage 类似，不同之处在于虽然 localStorage 中存储的数据没有过期时间，但 sessionStorage 中存储的数据会在页面会话结束时（即页面关闭时）被清除。
    应该注意，存储在 localStorage 或 sessionStorage 中的数据特定于页面的协议。
    键和值始终是字符串（请注意，与对象一样，整数键将自动转换为字符串）。

    会话存储
        sessionStorage 仅在浏览器选项卡或窗口会话中可用。它旨在将数据存储在单个网页会话中。这意味着如果窗口关闭，会话数据将被删除。
        由于 sessionStorage 和 localStorage 有类似的方法，我们将只关注 localStorage。

    本地存储
        HTML5 localStorage 是 Web 存储 API 的一部分，用于在浏览器上存储没有过期数据的数据。即使在浏览器关闭后，数据仍可在浏览器上使用。
        localStorage 即使在浏览器会话之间也会保留。这意味着当浏览器关闭和重新打开时数据仍然可用，并且在选项卡和窗口之间也可以立即使用。

    在这两种情况下，Web Storage 数据在不同浏览器之间不可用。例如，在 Firefox 中创建的存储对象无法在 Internet Explorer 中访问，就像 cookie 一样。有五种方法可以处理本地存储： setItem()、getItem()、removeItem()、clear()、key()

    网络存储的用例
    网络存储的一些用例是

        临时存储数据
        保存用户放入购物车的产品
        数据可以在页面请求、多个浏览器选项卡之间以及使用 localStorage 的浏览器会话之间提供
        可以使用 localStorage 完全离线使用
        当某些静态数据存储在客户端上以最小化后续请求的数量时，Web Storage 可以极大地提高性能。甚至可以使用 Base64 编码将图像存储在字符串中。
        可用于用户认证方法

    对于上面提到的示例，使用 localStorage 是有意义的。
    那么，您可能想知道我们什么时候应该使用 sessionStorage。

    在某些情况下，我们希望在窗口关闭后立即删除数据。
    或者，如果我们不希望应用程序干扰在另一个窗口中打开的同一个应用程序。sessionStorage 最适合这些场景。

    现在，让我们看看如何使用这些 Web Storage API。

    
    HTML5 Web 存储对象

    HTML Web Storage 提供了两个对象用于在客户端存储数据：

        window.localStorage - 存储没有到期日期的数据
        window.sessionStorage - 存储一个会话的数据（关闭浏览器选项卡时数据会丢失）大多数现代浏览器都支持 Web Storage，但是最好检查浏览器对 localStorage 和 sessionStorage 的支持。让我们看看 Web Storage 对象的可用方法。
    
    网络存储对象：

    localStorage - 显示 localStorage 对象
    localStorage.clear() - 删除本地存储中的所有内容
    localStorage.setItem() - 在 localStorage 中存储数据。它需要一个键和一个值参数。
    localStorage.getItem() - 显示存储在 localStorage 中的数据。它需要一个键作为参数。
    localStorage.removeItem() - 从localStorage中删除存储的项目。它以 key 作为参数。
    localStorage.key() - 显示存储在 localStorage 中的数据。它以索引为参数。

    
    将 item 设置为 localStorage
    当我们将数据设置为存储在 localStorage 中时，它将存储为字符串。
    如果我们要存储一个数组或一个对象，我们应该先将其字符串化以保持格式，否则我们会丢失原始数据的数组结构或对象结构。

    我们使用localStorage.setItem方法将数据存储在localStorage 中。

*/

// localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
// console.log(localStorage)

localStorage.setItem('FirstName', 'Asabeneh')
localStorage.setItem('age', 234)


// const skills = ['HTML', 'CSS', 'JS', 'React']
// //Skills array has to be stringified first to keep the format.
// const skillsJSON = JSON.stringify(skills, undefined, 4)
// localStorage.setItem('skills', skillsJSON)
// console.log(localStorage)

let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]

const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)

const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)
  



console.log(localStorage);


let firstName = localStorage.getItem('FirstName')
let age = localStorage.getItem('age')
let skills1 = localStorage.getItem('skills')
console.log(firstName, age, skills1)

//清除本地缓存的
localStorage.clear()

//清除日志
console.clear()
