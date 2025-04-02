// functional programming 
/*
function greet() {
    console.log('greet')
}

function addTwoNumbers(x, y) {
    console.log(x + y)
}

addTwoNumbers(10, 6)
addTwoNumbers(5, 7)
addTwoNumbers(77, 23)
addTwoNumbers(55, 55)


// FUNCTIONAL PROGRAMMING
let fullName = greet("josh", "marc")
function greet( firstName, secondName){
    return `${firstName} ${secondName}`
}

// console.log(fullName)

// CONCATENATION
let firstName = "josh"
let lastName = "Marc"
age = 21
fullName = firstName + ' ' + lastName + ' you are welcom!, you are' + ' ' + String(age)+ ' ' + 'years old'
console.log(fullName)

// STRING LITERALS
fullName = `${firstName} ${lastName}, You are welcome!, You are ${age} years old`
console.log(fullName)



// ANONYMOUS OR ARROW FUNCTIONS 
const greetUser = (userName)=> {
    return `hello ${userName}`
}
console.log(greetUser('josh'))
const name = [ 'josh', 'Marc', 'kelvin', 'Saint']

function printNames(arr){
    for(i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

*/

const printNames = (arr) => {
    for (i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

printNames('joshua')