const user = {
    username : "Hitesh",
    price:55,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to web`)//current context is 'this' ye 
        console.log(this)//ye kya krta hai ki poori detail me apko output provide kraega 
    }

}
user.welcomeMessage()
user.username = "Karan"
user.welcomeMessage()
console.log(this)//yha 
const chai = ()=> function(){
    let username = "Karan "
    console.log(this.username)
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const addTwo =(num1 , num2) =>{//this is Arrow Functioon 
//     return num1 +num2
// }
const addTwo = (num1,num2) => (num1+num2)
const addTiwo = (num1,num2) => ({username:"Karannn"})
console.log(addTwo(3,4))
console.log(addTiwo(5,4))
