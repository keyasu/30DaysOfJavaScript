// console.log(countries)
// alert('Open the console and check if the countries has been loaded')


console.log('days-12-RegExp');

/* 
g: 是一个全局标志, 表示在整个文本中查找模式
i: 不区分大消息的标志 
m: 多行的
*/

// without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern)

// let pattern = 'love'
// let flag = 'gi'
// let regex = new RegExp(pattern, flag)

// let regEx= /love/gi
// let regEx = /love/gi
// const str = 'I love JavaScript'
// const pattern = /love/
// const result = pattern.test(str)
// console.log(result)

/* const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)
console.log(result)
 */
/* 
const str = 'I Love JavaScript'
// const pattern = /Love/
// const result1 = pattern.test(str)
// console.log(result1);

// const result2 = str.match(pattern)
// console.log(result2);

const pattern = /Love/g
const result = str.match(pattern)
console.log(result) */

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced)

// let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
// console.log(matchReplaced);

// const txt = 'Python is the most beautiful language that a human begin has ever created.\
// I recommend python for a first programming language'

// matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
// console.log(matchReplaced)


/* const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced) */


/* const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// matches = txt.replace(/%/g, '')
// console.log(matches)  

let matches = txt.replace(/%/g, '')
console.log(matches);
 */


// const pattern = /[Aa]pple/g // this square bracket mean either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
// const matches = txt.match(pattern)

// console.log(matches)  

// const pattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
// const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
// const matches = txt.match(pattern)

// console.log(matches)  

// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want


// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]


// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// const pattern = /[a].+/g  // . any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']




// const pattern = /[a].*/g  //. any character, + any character one or more times 
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'

                
// const pattern = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern)

// console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

/* const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /\d{1,4}/g  // exactly four times
const matches = txt.match(pattern)
console.log(matches)  // ['2019']
 */

// const txt = 'This regular expression example was made in December 6,  2019.'
// // const pattern = /^This/ // ^ means starts with
// // const matches = txt.match(pattern)
// // console.log(matches)  // ['This']

// // const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern1 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no coma no period
// const matches1 = txt.match(pattern1)
// console.log(matches1)  // ["6", "2019"]


let pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabenehasdas';
let result = pattern.test(name)

console.log(result) // true








