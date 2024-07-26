class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getFullname(){
    return `${this.name}`
  }
  // Method to return a string describing the person
  greet() {
    return `${this.name} is ${this.age} years old and identifies as ${this.gender}.`;
  }

  // Method to update the person's age
  updateAge(newAge) {
    this.age = newAge;
  }

  static goodMorning() {
    console.log("Good morning");
  }
}

class Student extends Person {
  static noOfStudent = 0;
  constructor(name, age, gender, studentID) {
    super(name, age, gender);
    this.studentID = studentID;
    Student.noOfStudent++;
  }

  // Method to return a string describing the student
  greet() {
    return `${super.greet()} His student ID is ${this.studentID}.`;
  }
  setStudentId(id){
    this.studentID = id
  }
}

// Example usage:
const student1 = new Student("Om Aute", 22, "Male", "S12345");
console.log(student1.greet()); // Jane Doe is 22 years old and identifies as female. Their student ID is S12345.
Person.goodMorning();
console.log(Student.noOfStudent);



class Account{
    #balance;
    constructor(balance){
        this.#balance = balance;

    }
    withdraw(amount){
        this.#balance -= amount;
    }
    diposit(amount){
        this.#balance += amount
    }
    getBalance(){
        return this.#balance
    }
}

const acc1 = new Account(10000);
acc1.diposit(2000);
acc1.withdraw(1000);
console.log(acc1.getBalance());