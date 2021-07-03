// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

console.log('days - 23 - 事件监听');
/* 
事件监听器
常见的 HTML 事件：onclick、onchange、onmouseover、onmouseout、onkeydown、onkeyup、onload。
我们可以向任何 DOM 对象添加事件监听器方法。我们使用addEventListener()方法来监听 HTML 元素上的不同事件类型。
所述的addEventListener（）方法有两个参数，事件侦听器和一个回调函数。

 现在您已经熟悉了 addEventListen 方法以及如何附加事件监听器。有许多类型的事件侦听器。但在这个挑战中，我们将关注最常见的重要事件。活动列表：

 click - 当元素被点击时
 dbclick - 当元素双击时
 mouseenter - 当鼠标指向元素时
 mouseleave - 当鼠标指针离开元素时
 mousemove - 当鼠标指针在元素上移动时
 mouseover - 当鼠标指针在元素上移动时
 mouseout - 当鼠标指针离开元素时
 输入 - 当值进入输入字段时
 更改 - 当输入字段上的值更改时
 模糊 - 当元素未聚焦时
 keydown - 当一个键被按下时
 keyup - 当一个键打开时
 keypress - 当我们按下任意键时
 onload - 当浏览器完成加载页面时
 通过替换上面代码片段中的事件类型来测试上面的事件类型。


从输入元素获取值
我们通常填写表格，表格接受数据。表单字段是使用输入 HTML 元素创建的。让我们构建一个小型应用程序，它允许我们使用两个输入字段、一个按钮和一个 p 标签来计算一个人的体重指数。

*/
// selectedElement.addEventListener('eventlistner', function(e) {
//     // the activity you want to occur after the event will be in here
//   })
//   // or
  
//   selectedElement.addEventListener('eventlistner', e => {
//     // the activity you want to occur after the event will be in here
//   })


const btn = document.querySelector('button')
btn.addEventListener('click', e => {
    console.log('e gives the event listener object', e);
    console.log('e.target gives the selected enement: ', e.target);
    console.log(
        'e.target : ', e.target.textContent
    );
})

/* 
<script>
const button = document.querySelector('button')
button.addEventListener('click', e => {
  console.log('e gives the event listener object:', e)
  console.log('e.target gives the selected element: ', e.target)
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  )
})
</script> */