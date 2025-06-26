// const coding = ["js","rubi","java","python","cpp"]
// // coding.forEach(function(val){
// //     console.log(val)
    
// // })
// // coding.forEach((item, index,arr)=>{
// //     console.log(item,index,arr)
// // })


// //////////////////////////////////////////////////////////////

// const mycoding= [
//     {
//         languageName: "JavaScript",
//         languageFileName: ".Js"
//     },
//     {
//         languageName: "HTML",
//         languageFileName: ".HTML",
//     },
//     {
//         languageName: "CPP",
//         languageFileName: ".Cpp",
//     },
// ]
// mycoding.forEach((item)=>{//it is useful for database
//     console.log(item.languageFileName)
// })












const newArry = ["Ghar","parents","family","Requirements","Will FullFill"];
//  newArry.forEach((item, index)=>{
//     console.log(`${item} or ye hai index ${index}`)
 newArry.forEach (function(item, index){// difference dekh bhai tu arrow function or function likhne me , modern treeka hai => function jisme hme iss code ki trh function nhi likhna pdhta 
    console.log(`${item} or ye hai index ${index}`)
})

// ab dekh .filter kya karta hai //////////////
const newnum = [1,2,3,4,5,6,7,8,9,1,10]
const lnum = newnum.filter((num)=> num>2)//bhai isne to condition bhi lga di 
    console.log( `ye hai dekh ${lnum}`)




