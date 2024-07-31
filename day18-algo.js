// String Algorithms
function countCharacters(str) {
  const count = {};
  for (let char of str) {
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
}


const str = "Hllow my name om";
const result = countCharacters(str);
// console.log(result)


// NOTE: Create 2 loop
// 1. 1st loop iterate throght each element and declare a set
// 2 . check the char present in set or not if not then push and update the max length 
// 3. if element alredy present in the set then break

function lengthOfLongestSubstring(str){
    let maxLength = 0;
    for(let i=0;i<str.length;i++){
        const st = new Set();
        for(let j=i;j<str.length;j++){
            if(st.has(str[j])){
                break;
            }
            st.add(str[j]);
            maxLength = Math.max(maxLength, st.size);
        }
    }
    return maxLength;
}

// console.log(lengthOfLongestSubstring("pwwkew"))

function rotateKPositions(arr, k){
    const n = arr.length;
    k = k%n; // normalizing the K
    const rotatedArray =arr.slice(-k).concat(arr.slice(0,-k));
    return rotatedArray;

}

const arr = [1,2,3,4,5];
console.log(rotateKPositions(arr,2));


function mergeSortedArray(arr1, arr2){
    let i = 0;
    let j = 0;
    const result = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }

    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8, 10];
console.log(mergeSortedArray(arr1,arr2));

function fibonacci(n) {

    if (n < 0) return 'Invalid input';


    if (n === 0) return 0;
    if (n === 1) return 1;


    const dp = new Array(n + 1);


    dp[0] = 0;
    dp[1] = 1;


    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }


    return dp[n];
}
