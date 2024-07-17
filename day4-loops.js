console.log("Task 1: ");
for(let i = 1; i<11;i++){
    console.log(i);
}

console.log("task 2: table of 5");
var table = 5;
for(let i=1;i<11;i++){
    var result = table * i;
    console.log(result); 
}

console.log("task 3: while loop");
var l = 1;
while(l<=10){
    console.log(l);
    l++;
}

console.log("task 4: ");
var m = 10;
while(m>=0){
    console.log(m);
    m--;
}

console.log("task 5");
var n = 1;
do{
    console.log(n);
    n++;
}while(n<=5);


// function to find the factorail 
console.log("task 6");

function findFactorial(n){
    if(n<0){
        return undefined;
    }
    let result = 1;

    for(let i=1;i<=n;i++){
        result *= i;

    }

    return result
}

const a = findFactorial(4);
console.log(a);


console.log("Task 7: Print patter");

function printPattern(n){
    for(let i =0;i<n;i++){
        let stars = "";
        for(let j=0;j<i;j++){
            stars += "* "
        }
        console.log(stars);

    }
}


printPattern(4);

console.log("Task 8: continrue statement");
for(let i=1;i<11;i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}


console.log("Task 9: break statement");
for(let i=1;i<11;i++){
    if(i === 7){
        break;
    }
    console.log(i);
}