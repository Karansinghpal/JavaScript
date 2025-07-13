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
    console.log("Karan ko Object me dal diya jisse string number ya koi bhi function me karan ko call kroge to mill jaega");
}
heropower.Karan();
myheros.Karan();