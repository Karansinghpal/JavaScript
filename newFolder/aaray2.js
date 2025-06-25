let arrayOne = ['Karan','vishal','kishan'];
let arrayTwo = ['Ram ','shyam','ghansyam'];
// console.log(array);

// array1.concat(array2)
// console.log(array2)
const allHeros = arrayOne.concat(arrayTwo)//this is the behave of add two arrays
console.log(allHeros);
const allheros1 = [...arrayOne,...arrayTwo]
console.log(allheros1)// also one methode there is we also add two arrays but this opration b called spread Oprator

const anotherArray = [1,2,3,[5,8,6],8,[7,9,[4,5,8]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)//u cam see how this puzzly array merge
console.log(Array.isArray("Karan"))//Yeh check karta hai ki "Karan" ek array hai ya nahi.
console.log(Array.from("Karan"))//Array.from() kisi iterable (jaise string) ko ek array mein convert karta hai.
console.log(Array.from({name:"Karan"}))//it wiill give u empty array
const Score1 = 100;
const Score2 = 200;
const Score3 = 300;
console.log(Array.of(Score1,Score2,Score3));