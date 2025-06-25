const tinderUser = function(){}

tinderUser.Id = 1,2,3;
tinderUser.Course = "Js";
tinderUser.isLoggedIn = false;
tinderUser.name = 'karan';
console.log(tinderUser)
////////////////////////////////////////////////
const regularnumber = {
    email: "kp@lpu.in",
    
        fullname:{
            username:{
                fname: "k",
                lname: "Pal"
            }

        }
    
}
console.log(regularnumber.fullname.username.fname)
const obj1 = {1:"K",2:"R"}
const obj2 = {3:"L",4:"O"}
const obj3 = {5:"M",6:"N"}
const obj4 = { ...obj1, ...obj2, ...obj3}
console.log(obj4);
const users =[
    {
        id: 2
    }
]
console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
 console.log(Object.hasOwnProperty('name'))
 console.log(tinderUser.name)
