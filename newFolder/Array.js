let array = [1,2,3,4,5]
console.log(array)
console.log(array.shift)
console.log(array)
// console.log(array.pop())
array.push(9)//it willl push 9


console.log(array)
array.pop()//it will remove last element in the array
console.log(array)
array.shift()//will remove first element in the array
console.log(array)
array.unshift(8)//it will add element in 0th index
console.log(array)
console.log(array.includes(5)); 
console.log(array.indexOf(2));
const newArr = array.join();//.join converted array to single string
console.log(newArr);//
console.log(typeof newArr)
////////////// Slice , Splice //////////////////

console.log("A",array);//it will add A outside of the array 
const myn1 = array.slice(0,4)//it will  print array with range of 0 to 4
console.log(myn1)
console.log("B",myn1);//it will add B [8,2,3,4] like this

const myn2 = array.splice(1,3)
console.log(myn2)
console.log("C",myn2);