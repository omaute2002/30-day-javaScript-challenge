function intentionallyError(a,b){
    try {
        throw new Error("This is an internal error")
    } catch (error) {
        console.log("Error occured", error)
    }

}

intentionallyError()

function divideNumbers(a,b){
    try {
        
    } catch (error) {
        
    }
}