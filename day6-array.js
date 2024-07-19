console.log("Task 1: array creation");
const arr = [1,2,3,4,5]
console.log(arr);

console.log("Task 2: ");
console.log(arr[0]);
console.log(arr[arr.length -1]);

console.log("Task 3: Push element");
arr.push(6)
console.log(arr);

console.log("Task 4: pop element");
arr.pop();
console.log(arr);

console.log("Task 5: Shift first element");
arr.shift();
console.log(arr);


console.log("Task 6: unshift ");
arr.unshift(1);
console.log(arr);

console.log("Task 7: Map function");
const newArr = arr.map((element) => {
    return element*2
})
console.log(newArr);

console.log("Task 8: filter method");
function isEven(num){
    return num%2 ==0
}
const evenElementArr = arr.filter(isEven)
console.log(evenElementArr);

console.log("Task 9: reducer");
const reducerArrSum = arr.reduce((element, currentValue)=>{
    return element + currentValue
})
console.log("Sum: ", reducerArrSum);

console.log("task 10: for loop");
for(let i =0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("Task 11: foreach");
arr.forEach(element => {
    console.log(element);
});

const twoDArray =[[1,2],[2,3]];
console.log(twoDArray);

console.log(twoDArray[1][0]);