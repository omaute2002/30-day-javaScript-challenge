console.log("Task 1: Generate string using template literals");
let name = "OM"
let age = 21
let personInfo = "Developer"
const result = `Name:${name}
age: ${age}`
console.log(result);

console.log("Task 2: Multiline string");
let str = `Hi hloooe this is multi
line string 
that i ahve to create in the challnege`
console.log(str);


console.log("Task 3");
const array = [1,2,3]
const [a,b,c] = array
console.log(a);
console.log(b);

console.log("task 4");
const book = {
    title: "Cant hurt me",
    author:"David Goggins"
}

const {title, author} = book;
console.log(title);
console.log(author)

console.log("Task 5");
const newArr = [...array, 6,7,8];
console.log(newArr);

console.log("Task 6");
function sum(...numbers){
    return numbers.reduce((num, total) =>  num+total);
}

console.log(sum(12,2,3));

console.log("task7");
function product(a,b=2){
    return a*b
}

console.log(product(2,3));
console.log(product(2));

console.log("task 8");
const person ={
    name,
    age,
    greet(){
        console.log(`Hello ${this.name}. ${this.age}`);
    }
}

console.log("Task 9: use computed property");
const person2 = {
    name,
    age,
    [personInfo] :"Designer"
}

console.log(person2.personInfo);