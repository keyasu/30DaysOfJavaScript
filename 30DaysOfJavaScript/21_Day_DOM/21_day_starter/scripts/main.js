
console.log('day - 21 - 文档对象模型（DOM）');

/* 

HTML 文档被构造为一个 JavaScript 对象。
每个 HTML 元素都有不同的属性，可以帮助操作它。
可以使用 JavaScript 获取、创建、附加或删除 HTML 元素。
检查下面的例子。
使用 JavaScript 选择 HTML 元素类似于使用 CSS 选择。
为了选择一个 HTML 元素，我们使用标签名、id、类名或其他属性。


*/

// syntax

// const allTitles = document.getElementsByTagName('h1')

// console.log(allTitles) //HTMCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


/* const allTitles = document.getElementsByTagName('h1')
console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
} */

// const allTitles = document.getElementsByClassName('title')

// console.log(allTitles) //HTMCollections
// console.log(allTitles.length) // 4

// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }
/* 
const allTitles = document.getElementsByClassName('title')

console.log(allTitles);
console.log(allTitles.length);
for (let i=0; i< allTitles.length; i++) {
    console.log(allTitles[i]);
} */
// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>
/* 
let firstTitle = document.getElementById('first-title')
console.log(firstTitle); */


// let firstTitle = document.querySelector('h1') // select the first available h2 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available h2 element with class title

// let firstTitle1 = document.querySelector('h1')
// console.log(firstTitle1);
// let firstTitle2 = document.querySelector('.title')
// console.log(firstTitle2);
// let firstTitle3 = document.querySelector('#first-title')
// console.log(firstTitle3);
/* 
const allTitles = document.querySelectorAll('h1')
console.log(allTitles);
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}

allTitles.forEach(title => console.log(title)) */

const titles = document.querySelectorAll('h1')



// const titles = document.querySelectorAll('h1')
// titles[3].id = 'fourth-title'
// titles[3].class = 'title'

// titles[3].setAttribute('id', 'fourth-title')
// titles[3].setAttribute('class', 'title')


//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.add('title', 'header-title')
// titles[3].classList.add('title', 'header-title')
// titles[3].textContent = '第4个标题'

// for (let i=0; i< titles.length; i++) {
//     console.log(titles[i]);
// } 

const randomColor = () => {
    let myColor = '#'
    const str = '1234567890abcdef'
    for (let i=0; i< 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        let subStr = str[index]
        myColor += subStr
    }
    return myColor
}


console.log(randomColor());

function setTitle() {
    const h1Title = document.getElementsByTagName('h1')
    // console.log(h1Title[0]);
    // console.log(h1Title.length);
    h1Title[0].style.fontSize = '20px'
    const h1TitleStr = "Asabeneh Yetayeh challenges in 2020%c"
    h1Title[0].textContent = h1TitleStr
    h1Title[0].style.color = randomColor()
    
    setTimeout(() => {
        setTitle()
    }, 2000);

}

const getCurData = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    
    const day = now.getDate()

    let hour = now.getHours()
    let minutes = now.getMinutes()
    let second = now.getSeconds()
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (second < 10) {
        second = '0' + second
    }
    
    let date = year + '.' + month +  '.' + day
    let time = hour +  ':' + minutes +  ':' + second
    
    return date + '  ' + time
}

  

function setTitle3() {
    const timeStr = getCurData()
    const h3TitleStr = document.getElementsByTagName('h3')
    h3TitleStr[0].textContent = timeStr
    //console.log(timeStr);

    setTimeout(() => {
        setTitle3()
    }, 1000);
}

function setLi() {
    // 设置的li标签
    const liTitles = document.querySelectorAll('li')
    console.log(liTitles);
    for (let i=0; i< liTitles.length; i++) {
        const element = liTitles[i]
        if (i === 0) {
            element.style.backgroundColor = 'green'
        }else if (i === 1) {
            element.style.backgroundColor = 'orange'
        }else {
            element.style.backgroundColor = 'red'
        }
        element.style.verticalAlign = 'center'
           
    }
}

setTitle()
setTitle3()
setLi()

