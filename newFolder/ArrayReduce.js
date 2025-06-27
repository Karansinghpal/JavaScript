const Myarr = [1,2,3,4,5,7,,9,6]
const newarr = Myarr.reduce((acc,currval)=>{
    console.log(`This is acc ${acc} value and This is ${currval}`)
   return (acc+currval)
},0
)
console.log(newarr)

//////////////




const newobj = [
    {
    newcouse: "Math",
    price: 3000

    },
    {
    newcouse: "HINDI",
    price: 5002

    },
    {
    newcouse: "EnG",
    price: 2000

    },
    


]
const newobj1 = newobj.reduce((acc,item) => acc+item.price,0)
console.log(newobj1);
