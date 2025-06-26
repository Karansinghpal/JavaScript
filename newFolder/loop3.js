/////////////////for of -loop///////////////////
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greet  = "Hello world"
for ( const gree of greet){
    console.log(`each char is ${gree}`)
}
///////////////////Maps//////////////////
const map = new Map()//Map is object that holds key value pare
map.set('In', "india")
map.set('pn', "itali")
map.set('ln', "china")
map.set('on', "pak")
console.log(map)
for(const[key,value]of map){
    console.log(key, '-:-',value)
}