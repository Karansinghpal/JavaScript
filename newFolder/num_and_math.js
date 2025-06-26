const score = 400
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toString().length);
console.log(balance.toString().length);
console.log(balance.toString().length);
console.log(balance.toFixed(1));
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN'))//convert into indian region like 1,00,000
// math//
console.log(Math);
console.log(Math.abs(-4));//convert - negative value in positive
console.log(Math.ceil(4.2));// ye upper hi value lega bhale 4.1 ho
console.log(Math.round(4.5));// ye position ke according lega 4.2 hai to 4 agar 4.7 hai to 5
console.log(Math.floor(4,9));// ye lower hi value lega bhale 4.9 ho
console.log(Math.min(4,8,3,7,2));//min value btaega
console.log(Math.max(4,8,3,7,2));//highest value btaega 


//Random Number Generator bna skte ho bhai mini project
console.log(Math.round(Math.random()*1000));
console.log(Math.floor(Math.random()*100)+1);

// hmare pass condition hai ki minimum value itni or max itni chahiye tab -->

const min = 10;
const max = 20 ;
console.log(Math.floor(Math.random()* (max - min +1 ))+ min);


