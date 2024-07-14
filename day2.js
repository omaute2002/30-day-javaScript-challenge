var val1 = -10;
var val2 = 20;

var result = val1 + val2;
var result2 = val1 - val2;
var result3 = val1 * val2;
var result4 = val1/val2;
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);

var calRemainder = val1 % val2;
console.log(calRemainder);

val1 += 2;
console.log(val1);
val2 -= 10;
console.log(val2);


// Greater than less than operators
if(val1 > val2){
    console.log("Val 1 is greater than val2");
}else{
    console.log("val2 is greater than val1");
}

// == and ===

let a = "hello";
let b = 600;
let c = "600";
let d = "hello";

if(b==c){
    console.log("b and c are equal of same datatype");
}
if(b===c){
    console.log("b and c are equal only");
}


// Using ternary operator 
let x = val1>0 ? "val1 is positive" : "val2 is negative";
console.log(x);