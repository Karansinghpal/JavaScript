// let a = 300;
if(true){
    let k = 10
    const b = 50
    var c = 79
}// {} these are scope but var cannot apply thease scope thatswhy we are not use  u can see k b are not given value bcz they are folloup scope {} oprations
// console.log(a)
// console.log(b)
console.log(c)

//////////////////////////////////////////////////////////////////////////////////////////////////////
// function one(){
//     const usernamee = "karan"
//     function two(){
//         const website = "Youtube"
//         console.log(usernamee);
//         console.log(website);

//     }
    
//     two()
// }
// one()

if (true){
    const usernameee = "Vishal"
    if(usernameee === "Vishal"){
    const web = "youtube"
    console.log(usernameee+web);
        
console.log(web)
console.log(usernameee)
}
}
/////++++++++++Intresting++++++++++++//
console.log(addone(5))
function addone (num){
    return num+1
}

const addtwo = function(num){
    return num +2

}
// addtwo(4)