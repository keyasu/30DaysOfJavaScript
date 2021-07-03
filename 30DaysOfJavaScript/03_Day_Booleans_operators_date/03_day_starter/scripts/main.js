// this is your main.js script
/*
条件句
条件语句用于根据不同的条件做出决定。默认情况下，JavaScript 脚本中的语句从上到下依次执行。如果处理逻辑需要，可以通过两种方式改变执行的顺序流程：

条件执行：如果某个表达式为真，将执行一个或多个语句块
重复执行：只要某个表达式为真，一个或多个语句块就会被重复执行。在本节中，我们将介绍if、else、else if语句。我们在前几节中学到的比较和逻辑运算符在这里会很有用。
可以使用以下方式实现条件：

如果
如果别的
如果还有如果
转变
三元运算符
如果
在 JavaScript 和其他编程语言中，关键字if用于检查条件是否为真并执行块代码。要创建 if 条件，我们需要if关键字、括号内的条件和大括号 ({}) 内的代码块。

// 语法
if  ( condition )  { 
  //这部分代码为真条件运行
}
例子：

让 num  =  3 
if  ( num  >  0 )  {
  控制台. log ( ` ${ num }是一个正数` ) 
} 
// 3 是一个正数
正如您在上面的条件示例中看到的，3 大于 0，因此它是一个正数。条件为真，代码块被执行。但是，如果条件为假，我们将看不到任何结果。

让 isRaining  =  true 
if  ( isRaining )  {
  控制台. log ( '记得带上你的雨衣。' ) 
}
第二个条件也是如此，如果 isRaining 为 false，则不会执行 if 块并且我们看不到任何输出。为了查看假条件的结果，我们应该有另一个块，它将会是else。

如果别的
如果条件为真，将执行第一个块，否则将执行 else 条件。

// 语法
if  ( condition )  { 
  // 这部分代码为真条件运行
}  else  { 
  // 这部分代码为假条件运行
}
让 num  =  3 
if  ( num  >  0 )  {
  控制台. log ( ` ${ num }是一个正数` ) 
}  else  { 
  console . log ( ` ${ num }是一个负数` ) 
} 
// 3 是一个正数

num  =  - 3 
if  ( num  >  0 )  {
  控制台. log ( ` ${ num }是一个正数` ) 
}  else  { 
  console . log ( ` ${ num }是负数` ) 
} 
// -3 是负数
让 isRaining  =  true 
if  ( isRaining )  {
  控制台. log ( '你需要一件雨衣。' ) 
}  else  { 
  console . log ( '不需要雨衣。' ) 
} 
// 你需要一件雨衣。

isRaining  =  false 
if  ( isRaining )  {
  控制台。log ( '你需要一件雨衣。' ) 
}  else  { 
  console . log ( '不需要雨衣。' ) 
} 
// 不需要雨衣。
最后一个条件为假，因此执行了 else 块。如果我们有两个以上的条件怎么办？在这种情况下，我们将使用else if条件。

如果其他如果其他
在日常生活中，我们每天都在做决定。我们不是通过检查一两个条件来做出决定，而是根据多个条件做出决定。和我们的日常生活一样，编程也是充满条件的。当我们有多个条件时，我们使用else if。

// 语法
if  (条件)  { 
     // 代码
}  else  if  (条件)  { 
   // 代码
}  else  { 
    // 代码

}
例子：

让 a  =  0 
if  ( a  >  0 )  {
  控制台. log ( ` ${ a }是一个正数` ) 
}  else  if  ( a  <  0 )  { 
  console . log ( ` ${ a }是一个负数` ) 
}  else  if  ( a  ==  0 )  { 
  console . 日志（` ${a }为零`)
} else {
  控制台。log(` ${ a }不是数字`)
}
// if else if else 
let  weather  =  'sunny' 
if  ( weather  ===  'rainy' )  { 
  console . log ( '你需要一件雨衣。' ) 
}  else  if  ( weather  ===  'cloudy' )  { 
  console . log ( '天气可能很冷，你需要一件夹克。' ) 
}  else  if  ( weather  ===  'sunny' )  { 
  console . log ( '自由出去。' )
} 其他 {
  控制台。log ( '不需要雨衣。' ) 
}
转变
Switch 是if else if else的替代方法。switch 语句以switch关键字开头，后跟括号和代码块。在代码块内部，我们将有不同的情况。如果 switch 语句括号中的值与 case 值匹配，则 Case 块运行。break 语句是为了终止执行，以便在条件满足后代码执行不下去。如果所有情况都不满足条件，则默认块运行。

switch ( caseValue ) { 
  case  1 :
     // code 
    break 
  case  2 :
    // code 
   break 
  case  3 :
   // code 
  default :
    // code 
}
let  weather  =  'cloudy' 
switch  ( weather )  { 
  case  'rainy' :
     console . log ( '你需要一件雨衣。' ) 
    break 
  case  'cloudy' :
     console 。log ( '它可能很冷，你需要一件夹克。' ) 
    break 
  case  'sunny' :
     console 。log ( 'Go out free.' )
    打破
  默认值：
     console 。记录(“不需要雨衣。” ) 
}

// 切换更多示例
let  dayUserInput  =  prompt ( '今天​​是什么日子？' ) 
let  day  =  dayUserInput . toLowerCase ( )

switch  ( day )  { 
  case  'monday' :
     console . log ( 'Today is Monday' ) 
    break 
  case  'tuesday' :
     console 。日志（'今天​​是星期二' ）
    中断
  案例 '周三'：
    控制台。日志（'今天​​是星期三' ）
    中断
  案例 '星期四'：
    控制台。log ( '今天​​是星期四' ) 
    break 
  case  '：
    控制台。log ( 'Today is Friday' ) 
    break 
  case  'saturday' :
     console 。日志（'今天​​是星期六' ）
    中断
  案例 '星期天'：
    控制台。log ( 'Today is Sunday' )
    中断
  默认值：
     console 。日志（'这不是工作日。' ）
}
// 在案例中使用条件的例子

let  num  =  prompt ( '输入数字' ) ; 
开关 （真） { 
  case  num  >  0：
    控制台。log ( '数字为正' ) ; 
    打破; 
  case  num  ==  0：
    控制台。log ( '数字为零' ) ; 
    打破; 
  case  num  <  0：
    控制台。记录('数字为负' ) ; 
    打破; 
  默认：
    控制台。log ( '输入的值不是数字' ) ; 
}
三元运算符
另一种编写条件的方法是使用三元运算符。我们在其他部分已经介绍过这一点，但我们也应该在这里提到它。

让 isRaining  =  true 
isRaining 
  ? 控制台。日志（'你需要一件雨衣。' ） 
  ：控制台。log ( '不需要雨衣。' )
🌕 你是非凡的，你有非凡的潜力。您刚刚完成了第 4 天的挑战，距离通往卓越之路还有四步。现在为你的大脑和肌肉做一些锻炼。


*/
