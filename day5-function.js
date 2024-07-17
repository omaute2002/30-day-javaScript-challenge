console.log("Activity 1: Funciton declaration");

function evenOrOdd(n){
    if(n%2 ===0){
        return "even";
    }
    else{
        return "odd";
    }
}


function calSquare(n){
    return n**2;
}


console.log("activity 2: function Expression");

const maxNum = function (a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

const addStrings = function (a, b){
    return a+b
}
const result = addStrings("om", "mo")

console.log("Acitivity 3: arrow functions");


const calSum = (a,b) => {
    return a+b;
}

const isContain = (str) => {
    return str.includes("z");
}

let name = "omaute";
console.log(isContain(name));

console.log("Activity 4: Defualt value in function ");
function returnProduct(a, b=9){
    return a*b;

}

const result1 = returnProduct(2);
console.log("Product", result1);

function greet(name, age = 20){
    return `Good morning ${name}, ${age}`
}

let greetings = greet("Om");
console.log(greetings);

console.log("Activity 5: Higher order function ");

function applyFunction(func, num) {
    return func(num);

}

function doubleValue(num){
    return num*2;
}
function findSquare(num){
    return num**2;
}

function applyMultipleFunctions(func1,func2,num){
    const a = doubleValue(num);
    return findSquare(a);
}

const finalval = applyMultipleFunctions(doubleValue, findSquare, 2);
console.log(finalval);