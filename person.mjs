const person = {
    name: "Om",
    age: 21,
    greet: function(){
        console.log("Hello ", this.name);
    }
}

module.exports = person;