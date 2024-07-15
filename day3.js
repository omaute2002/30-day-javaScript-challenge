const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let num1 = 12;
let num2 = -2;
let num3 = 0;

if(num1 > 0){
    console.log("Num1 is positive");
}

if(num2 < 0){
    console.log("NUm2 is negative")


}
if(num3 == 0){
    console.log("Num3 is equal ot zero");
}


if(num1 > num2){
    if(num1 > num3){
        console.log("Num1 is greatest");
    }
}

let dayNumber=2;
let dayName = "";   
console.log("Switch Case demonstration");

// rl.question("Enter the number of your choice from 1 - 7: ", (intput)=> {
//      dayNumber = parseInt(input);
//     if(isNaN(val)){
//         console.log("Enter the valid value of val");
//     }else{
//         console.log(`you have entered the valid value : ${val}`);
//     }
//     rl.close();
// })

switch(dayNumber){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = "enter the valid value within the range of 1-7";
        break;

}

console.log("Day : ", dayName);



// Ternery Operator to check the number is even or odd 
const a = 233;
let result = a%2 == 0 ? "Number is even" : "Number is odd";
console.log(result);


// FUNCTION TO SHOW THE GRADE OBTAINED THE GRADE OBTAINED FROM USER
function getGrades(score){
    let grade;
    switch(true){
        case (score >=90 && score <=100):
            grade = "A";
            break;
        case (score >=80 && score <=90):
            grade = "B";
            break;
        case (score >=70 && score <=80):
            grade = "C";
            break;
        case (score >=60 && score <=70):
            grade = "D";
            break;  
        case (score >=50 && score <=60):
            grade = "E";
            break;
        case (score >=40 && score <=50):
            grade = "F";
            break;
        default:
            grade="Invalid score";
            break;
    }
    return grade
}

const scores = [70, 45, 30, 90];
scores.forEach(score => {
    console.log(`score: ${score} and grade: ${getGrades(score)}`);
})


// ACTIVITY5: CHECK IF LEAP YEAR
function checkLeapYear(year){
    if(year%4 == 0){
        console.log("is leap year"); 
    }else if(year%100 == 0){
        if(year%400 == 0){
            console.log("is a leap year");
        }
    }
    else {
        console.log("not a leap year")
    }
} 


checkLeapYear(2023)