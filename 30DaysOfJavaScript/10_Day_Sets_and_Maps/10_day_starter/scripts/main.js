//console.log(countries)
// alert('Open the console and check if the countries has been loaded')
console.log('days - 10');

// const companies = new Set()
// console.log(companies)


// const companies = new Set() // creating an empty set
// console.log(companies.size) // 0

// companies.add('Google') // add element to the set
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')

// console.log(companies.size) // 5 elements in the set
// console.log(companies)
// console.log(companies.delete('Google'))
// console.log(companies.size) // 4 elements left in the set

// console.log(companies.has('Apple')) // false
// console.log(companies.has('Facebook')) // true

// companies.clear()
// console.log(companies)

// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
//   const langSet = new Set(languages)
//   console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
//   console.log(langSet.size) // 4
  
//   const counts = []
//   const count = {}
  
//   for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l)
//     console.log(filteredLang) // ["English", "English", "English"]
//     counts.push({ lang: l, count: filteredLang.length })
//   }
//   console.log(counts)
  

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// console.log(c)

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)


// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => !B.has(num))
// let C = new Set(c)

// console.log(C)

// const map = new Map()
// console.log(map)

// countries1 = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
//   const map = new Map(countries1)
//   console.log(map)
//   console.log(map.size)
  

const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)


console.log(countriesMap.get('Finland'))

console.log(countriesMap.has('Finland'))

for (const country of countriesMap) {
    console.log(country)
  }
  