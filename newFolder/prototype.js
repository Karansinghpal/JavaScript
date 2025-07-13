const arr =  ("Karan      ")
console.log(arr.length); // 15
console.log(arr.trim().length); // "Karan" 


let myheros = ["batman", "superman", "spiderman", "ironman"    ]
let heropower = {
    batman: "money",
    superman: "fly",
    spiderman: "swing",
    ironman: "suit",
    getbatman: function(){
        console.log(`Batman has ${this.batman} power`)
    }
}
heropower.getbatman();




Object.prototype.Karan = function() {
    console.log("Karan ko Object me dal diya jisse string number ya koi bhi function me karan ko call kroge to mill jaega , Karan Ka Access Sbke pass hai ");
}
// heropower.Karan();
// myheros.Karan(); 



//////////Inheritance//////////
const Teacher = {
    name: "Karan",
    subject: "JavaScript",
}
const Teacher2 = {
    name: "Rohit",
    subject: "Python",
}
const Teacher3 = {
    name: "Sahil",          
    subject: "Java",        
}   
const ki = Teacher.__proto__ = Teacher2; // Teacher2 is the prototype of Teacher
console.log(ki); // { name: 'Rohit', subject: 'Python' }
console.log(Teacher.__proto__); // { name: 'Sahil', subject: 'Java' }
console.log(Teacher); // { name: 'Sahil', subject: 'Java' }