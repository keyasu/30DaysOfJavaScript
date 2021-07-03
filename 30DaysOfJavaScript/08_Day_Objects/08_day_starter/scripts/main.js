// console.log(countries)
// alert('Open the console and check if the countries has been loaded')//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

// let a = 'JavaScript'
// let b = 10

// function letsLearnScope() {
//     console.log(a, b);
//     if (true) {
//         let a = 'Python'
//         let b = 100
//         console.log(a, b);
//     }
//     console.log(a, b);
// }

// letsLearnScope()
// console.log(a, b);

//scope.js
// let a = 'JavaScript1' // is a global scope it will be found anywhere in this file
// let b = 101 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   let c = 30
//   if (true) {
//     // we can access from the function and outside the function but 
//     // variables declared inside the if will not be accessed outside the if block
//     let a = 'Python'
//     let b = 20
//     let d = 40
//     console.log(a, b, c) // Python 20 30
//   }
//   // we can not access c because c's scope is only the if block
//   console.log(a, b, c) // JavaScript 10
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible


//scope.js
// function letsLearnScope() {
//     var gravity = 9.81
//     console.log('-------1-');
//     console.log(gravity)
  
//   }
//   // console.log(gravity), Uncaught ReferenceError: gravity is not defined
//   letsLearnScope()
//   //console.log(gravity);

//   if (true){
//     var gravity = 9.81
//     console.log('----1----');
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81
  
//   for(var i = 0; i < 3; i++){
//     console.log('--------');
//     console.log(i) // 1, 2, 3
//   }
//   console.log('--------');
//   console.log(i)
  
//  

//scope.js
// function letsLearnScope() {
//     // you can use let or const, but gravity is constant I prefer to use const
//     const gravity = 9.81
//     console.log(gravity)
  
//   }
// //   console.log(gravity) //Uncaught ReferenceError: gravity is not defined
  
//   if (true){
//     const  gravity = 9.81
//     console.log(gravity) // 9.81
//   }
// //   console.log(gravity) //Uncaught ReferenceError: gravity is not defined
  
//   for(let i = 0; i < 3; i++){
//     console.log(i) // 1, 2, 3
//   }
//   // console.log(i), Uncaught ReferenceError: gravity is not defined
  
  
// const rectangle = {
//     length: 20,
//     width: 20
//   }
//   console.log(rectangle) // {length: 20, width: 20}
  
//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
//   console.log(person)
  

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     },
//     'phone number': '+3584545454545'
    
//   }
  
//   // accessing values using .
//   console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person.age)
//   console.log(person.location)
  
//   // value can be accessed using square bracket and key name
//   console.log(person['firstName'])
//   console.log(person['lastName'])
//   console.log(person['age'])
//   console.log(person['age'])
//   console.log(person['location'])
  
//   // for instance to access the phone number we only use the square bracket method
//   console.log(person['phone number'])
  
//   console.log(person.getFullName());
  

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
  
//   console.log(person.getFullName())
//   // Asabeneh Yetayeh
  
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true
  
//   person.getPersonInfo = function() {
//     // let skillsWithoutLastSkill = this.skills
//     //   .splice(0, this.skills.length - 1)
//     //   .join(', ')
//     let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join('..')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  
//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())


const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  console.log(person)
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)


  console.log(copyPerson.hasOwnProperty('title'))
  console.log(copyPerson.hasOwnProperty('score'))
  