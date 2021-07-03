// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log('day - 16 - json');

/*
    JSON 代表 JavaScript 对象表示法。
    JSON 语法源自 JavaScript 对象符号语法，但 JSON 格式仅为文本或字符串。
    JSON 是一种用于存储和传输的轻量级数据格式。
    JSON 主要用于将数据从服务器发送到客户端时。
    JSON 是一种更易于使用的 XML 替代方案。

例子：
*/
/* {
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }
 */
/*

    上面的 JSON 示例与普通对象没有太大区别。
    那么，有什么区别呢？
    区别在于 JSON 对象的键应该是双引号还是字符串。
    JavaScript Object 和 JSON 非常相似，我们可以将 JSON 更改为 Object，将 Object 更改为 JSON。

    让我们更详细地看一下上面的例子，它以一个大括号开始。
    在大括号内，有一个“users”键，它有一个值数组。
    在数组内部，我们有不同的对象，每个对象都有键，每个键都必须有双引号。
    例如，我们使用“firstNaMe”而不仅仅是 firstName，但是在对象中我们使用没有双引号的键。
    这是对象和 JSON 之间的主要区别。让我们看看更多关于 JSON 的例子。

    将 JSON 转换为 JavaScript 对象
    大多数情况下，我们从 HTTP 响应或文件中获取 JSON 数据，但我们可以将 JSON 存储为字符串，为了演示，我们可以更改为 Object。
    在 JavaScript 中，关键字JSON有parse()和stringify()方法。
    当我们想将 JSON 更改为对象时，我们使用JSON.parse()解析 JSON 。
    当我们想将对象更改为 JSON 时，我们使用JSON.stringify()。

JSON.parse()
*/

/* const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    // const usersObj = JSON.parse(usersText, undefined, 4)
    // console.log(usersObj)
    const userObj = JSON.parse(usersText, undefined, 4)
    console.log(userObj);
    
     */

/* const usersText = `{
        "users1111111111":[
            {
            "firstName":"Asabeneh",
            "lastName":"Yetayeh",
            "age":250,
            "email":"asab@asb.com"
            },
            {
            "firstName":"Alex",
            "lastName":"James",
            "age":25,
            "email":"alex@alex.com"
            },
            {
            "firstName":"Lidiya",
            "lastName":"Tekle",
            "age":28,
            "email":"lidiya@lidiya.com"
            }
        ]
    }`
 */
// const usersObj = JSON.parse(usersText, (key, value) => {
//     let newValue =
//     typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
//     return newValue
// })
// console.log(usersObj)
        
/* const userObj = JSON.parse(usersText, (key, value) => {
    
    if (typeof value != 'string' && typeof value != 'number') {
        console.log(`key = ${key}`);
        console.log(`value = ${value}`);
    }

    
    let newValue = typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
})

console.log(userObj); */


/* 
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  const txt = JSON.stringify(users, undefined, 4)
  console.log(txt) // text means JSON- because json is a string form of an object.

   */

  const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Pyhton'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
  const txt = JSON.stringify(user, ['firstName', 'skills'], 4)
  console.log(txt)
  


