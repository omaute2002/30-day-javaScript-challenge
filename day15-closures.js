function outerFunction(outerVariables){
    return function innerFunction(innerVariable){
        console.log("Outer variable ", outerVariables);
        console.log("Inner variable, ", innerVariable);
    };
}

const newFunction = outerFunction("Hello outer");
newFunction("Inner function")


function keepCounter(){
    let counter = 0;
     function incrementFunctions(a){
        counter += a;
    }
     function getCounter(){
        console.log(counter) 
    }

    return {
        func1 : incrementFunctions,
        func2 : getCounter
    }

}

const countShower = keepCounter();
countShower.func1(4);
countShower.func2()


function createUniqueIds(){
    let lastId = 0;
    return function (){
        lastId++;
        return lastId;
    }
}

const idGenerator = createUniqueIds();
console.log(idGenerator());
console.log(idGenerator());
console.log(idGenerator());


function getUserGreetings(){
    return function (name){
        console.log("Hello ", name);
    }
}

const greetuser = getUserGreetings();
console.log(greetuser("om"))

function createArrayOfFunctions(){
    let functionArray = []
    for(let i =0;i<10;i++){
        functionArray.push(()=>{
            console.log(i);;
        })
    }
    return functionArray;
}

const arr = createArrayOfFunctions();
console.log(arr[3]());


function itemCollection(){
    let items = [];
    function addItem(item){
        items.push(item);
    }
    function removeItem(){
        items.pop();
    }
    function showItems(){
        for(let i=0;i<items.length;i++){
            console.log(items[i]);
        }
    }
    return {
        add: addItem,
        remove:removeItem,
        getItem: showItems
    }
}

const manageItems = itemCollection();
manageItems.add("Banana");
manageItems.add("Mangoes")
console.log(manageItems.getItem())
manageItems.remove()
manageItems.getItem()
