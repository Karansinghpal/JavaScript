

const mysym = Symbol("Karan");
const tinderUser = new Objecct;
const obj1 = {//This is nonsingleton Object
    name: "Vishal",
    village: "Kuthaund",
    [mysym]:  "Rahul",
    From: "Uttar-Pradesh",
    email: "kp5495423@gmail.com"
}
console.log(obj1)
console.log(obj1.email)
console.log(typeof mysym)
obj1.email= "karansinghpal@gmail.com"
//Object.freeze(obj1);//according to this next value of this will be freeeeez
obj1.name = "Vishu"//means this value  will be freez 
console.log(obj1)
obj1.greeting = function(){
    console.log("javaScript")
}
console.log(obj1.greeting2());
obj1.greeting2 = function(){
    console.log(`THis is your,${this.name}`);
}