console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const greetings = (name = 'Peter') => {
    let message = name + ', '
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))
  