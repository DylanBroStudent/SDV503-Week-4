/*

// const firstName = 'dylan'
// const lastName = 'brodie'
// Camel case 
// const classCode = 'SDV503'

// Invalid Variables
// first-name
// 1_num
// num_#_1

// Declaring different variables of different data types
let firstName = 'Dylan'
let lastName = 'Brodie'
let country = 'New Zealand'
let age = 28
let isStudent = true

console.log(firstName, lastName, country, age, isStudent)

// Declaring Variables with number values

const gravity = 9.81
const boilingPoint = 100
const pi = 3.141592653
console.log(gravity, boilingPoint, pi)

// Variable can also be declared on a single line seperated by a comma

//let name = 'dylan', job = 'student', live = 'nelson'
console.log(name, job, live)

*/

/*
Excersize - 1 : Variables
1 - Declare four variables without assigning values
2 - Declare four variables with assigning values
3 - Declare vaiables to store your first name, last name, student status, country, and age, in multiple lines
4 - Declare two variables myAge and yourAge and assign them inital values and log them to browser console. 

*/

let var1, var2, var3, var4

let varA = "A"
let varB = "B"
let varC = "C"
let varD = "D"

const firstNameA = 'Dylan'
const lastNameA = 'Brodie'
let studentStatusA = 'Enrolled'
let countryA = 'New Zealand'
let ageA = 28

let firstNameB = 'Dylan', lastNameB = 'Brodie', studentStatusB = 'Enrolled', countryB = 'New Zealand', ageB = 28
// you can't mix and match const and let on the same line

let myAge = 28
let yourAge = 76

console.log('I am', myAge, 'years old')
console.log('you are', yourAge, 'years old')

//ANCHOR - Data types
/*
Data types

1 - primitive
2 - non-primitive (object reference)

//SECTION - Primitive data types
Means primitive data types are immutable data types
    1-numbers (7 or 7.1)
    2-strings (any data under single or double quotes)
    3-boolean (true or false)
    4-null (empty value or no value)
    5-undefined (a declared variable without a value)

//SECTION - non-primitive data types (object references)
Means non-primitive data types are mutable data types
    1-objects
    2-functions
    3-arrays 

*/

let nums = [1,2,3]
nums[0] = 5
console.log(nums)