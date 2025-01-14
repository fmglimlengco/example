console.log('Welcome to WEB700')
/*
    Multiline comment
*/
a = 10
console.log(typeof a)
a = "Hello"
console.log(typeof(a))
a = true
console.log(typeof a)
a = 10.5
console.log(typeof a)
console.log(typeof B)
console.log(a) // Single line comment
//console.log(B)

if(typeof(B) === 'undefined')
{
    console.log('b is undefined')
}

//Function Declaration
function sayHello(){
    console.log('Hello World')
}

sayHello()
sayHello()

console.log(sayHello)
console.log(typeof(sayHello))

var x = 100
let y = 20

const z = 500
y = 200
x = 300

var a = 100
let b = 1
console.log(`Global A: ${a}`)
console.log(`Let B: ${b}`)
function printA(){
    a = 200
    let b = 2
    const z = 2000
    console.log(`Global A: ${a}`)
    console.log(`Let B: ${b}`)
}
printA()
console.log(`Global A: ${a}`)
console.log(`Let B: ${b}`)

//Function Expression
let greet = function(name){
    return `Welcome, ${name}`
}

console.log(greet('Pritesh'))

//Arrow Function
var hello = () => console.log('Hello')
var hello = name => console.log(`Hello, ${name}`)
var add = (a, b) => {
    c = a + b
    return c
}

var add = (a, b) =>  a + b 

//d = Array()
arr = [1, 2, 3]
console.log(typeof(arr))
console.log(arr)
console.log(arr[0])
console.log(arr[3])
arr[3] = 4
console.log(arr[3])
arr.push(10)
console.log(arr)

for(i=0; i<arr.length; i++){
    console.log(arr[i])
}

i = 10
while (i<15) {
    console.log(i)
    i++
}
i = 10
do{
    console.log(i)
    i++
}while (i<15) 