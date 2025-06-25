function addTwonums(num1,num2){
    return num1+num2

}
const result = addTwonums(76,22)//add krke print kra dega vaues
console.log(result)
function loginuser (username){//new function
    if(username==undefined){//agar name define nhi hai to output me namee enter kr bhai aa jaega 
        console.log("Name ENter Kr Bhai")
        return false//jab tk name nhi daloge function aaage forward nhi hoga
    }
    return`${username} just logInnnn`//agar name dal doge to just login likh k aaa jaega 
}
console.log(loginuser("Karan Papa"))//yhi name define krna hota hai

/////////////////////////////////////////////////////////////////////////////////////4

function calculateValue(...num){
    return num
}
const polu = calculateValue(76,51,22)
console.log(polu)
function vcalculateValue(val1,val2,...num){
    return num
}

const lolu = vcalculateValue(76,51,99,51,22)
console.log(lolu)

////////////////////////////////////////////////////////////////////////////////////

const user = {
    usernaam: "Karan ",
    price: 20000000
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.usernaam} and price ${anyobject.price} is`)
}

handleObject(user);


/////////////////////////////////////

const mynewarray = [100,200,300,400]
function returnSecondValue (getArray){
    return getArray[0]
}
console.log(returnSecondValue(mynewarray))

