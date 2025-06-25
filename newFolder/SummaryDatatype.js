const bigInt = 25555485296859n;
console.log("BigInt value is:", bigInt);  // 👈 Output ayega

const scoreValue = 200.2;
console.log("Score Value is:", scoreValue);

let userEmail;
console.log("Email is:", userEmail); // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
console.log("Are Symbols equal?", id === anotherId); // false


const biogInt = 7651995122n; //THis is bigint data type if u have big amount of number ,at the last add n only.
const socoreValue = 200.2//accountId = 100.1;//There is not any float type datatype you can initialize 100, 100.25 it means it is number.
let useorEmail;
const ido = Symbol('123');
const anotherIdo = Symbol('123');
console.log(ido === anotherIdo);
console.log(biogInt);


/*Two types of Datatype 
1 Primive data type
Number boolean String Null bigint symbol undifined. =7

2. Refrence(Non-primitive dataType)
Array Function Objects

*/

const myFunction =  function(){
    console.log("Kaye sun itai ho ka");
    
}

const heroes = ["shaktiman ", "wecher", "robb stark"];
let myobj = {
    name:"karan",
    age: 22
}
console.log(heroes);
console.log(myFunction(2));
//***********************************************************************************/
// two types of memory 1.stack memory (used by all Primitive)
//2. Heap Memmory(used by all non primitive)
let anotherName = "Karan";
let GharName = anotherName;
GharName = "Vishal";
console.log(anotherName);// these are stored in stach memory as a Copy
console.log(GharName);
let food ={ //  it strored ion Heap memory it can  be permanent change
    Burger: "Yes",
    Chai: "N/A",
    Email: "kp5495423@gmail.com"
}
let food1 = "Pizza"; // Example value for 'food'
console.log(food1);

let useOne = {
    gmail: "vvishal@lpu.in"
}
let userTwo = useOne

let userThree = useOne
userThree.email = "kp@lpu.in";

console.log(useOne.email);
console.log(userThree.email);

