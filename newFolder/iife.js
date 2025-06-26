//Immediately Invoked Function Exressions(IIFE)
//



// Jo function imideatly execute ho jaye 
//Globel scope ke polution se problem hoti hai kayi bar jo usme global scope k variable hai uske polution ko htane k liye iife ka use krte hai 

(function chai (){
    console.log(`DB CONNECTED `)
})();//ye hai tmhri chalke named iife () me bnd krdo or kuch nhi
(function aurcode(){
    console.log(`DB CONNECTED TO`)
})();//this is we can say iifee

((name) =>{//yha function bi initialize nhi krna pdha dekho khud    or ise hi unknown iife khte hai

    console.log(`DB CONNECTED TO ${name}`);
}

)("Karannnnnnnnnnnnn")