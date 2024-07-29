function factorial(n){

    if(n === 0 || n ===1){
        return 1;

    }
    return n * factorial(n-1);
}

// console.log(factorial(4));

function fibonacci(n){
    if(n===0){
        return 0;
    }
    if(n===1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(10));

// Recustio to find sum of all the element in an array
function arraySum(arr, index, sum){
    if(index === arr.length){
        return sum;
    }
    return arraySum(arr, index +1 , sum+arr[index])
}

const arr = [1,2,3,4];
// console.log(arr.length);
console.log(arraySum(arr, 0, 0))