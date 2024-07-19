const book1 = {
    title: "Psychology of Money",
    author:"Morgan Housal",
    year: 2021,
    giveInfo: function(){
        return `${this.title} written by ${this.author}`
    },
    updateYear: function(newYear){
        this.year = newYear;
    }
}

const book2 ={
    title: "Cant hurt me",
    author:"David goggins",
    year: 2021,
    giveInfo: function(){
        return `${this.title} written by ${this.author}`
    },
    updateYear: function(newYear){
        this.year = newYear;
    }
}

const book3 = {
    title: "Almanak of Naval Ravikant",
    author:"Naval Ravikant",
    year: 2023,
    giveInfo: function(){
        return `${this.title} written by ${this.author}`
    },
    updateYear: function(newYear){
        this.year = newYear;
    }
}

console.log(book1);

console.log("Task 3: return method");

console.log(book1.giveInfo());

console.log("Task 4: update the year");
book1.updateYear(2022);
console.log(book1);

console.log("Task 5: Nested object creation");

const library = {
    name: "central library",
    book: [book1,book2,book3]
}
console.log(library);
console.log(`${library.name}`)
for(let i=0;i<library.book.length;i++){
    
    console.log(library.book[i].title);
}

for(let key in book1){
console.log(`${key} : ${book1[key]}`);
}

const keys = Object.keys(book3);
console.log("Keys:",keys )
const values = Object.values(book3);
console.log("Values: ",values);