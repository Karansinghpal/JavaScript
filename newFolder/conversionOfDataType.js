let num = 76;
let stir = "Karan";
let bool = 1;

console.log(String(num));       // ✅ Convert number to string → "76"
console.log(Number(stir));      // ❌ Will give NaN because "Karan" is not a number
console.log(Boolean(num));      // ✅ true (non-zero numbers are truthy)
console.log(String(bool));      // ✅ Convert 1 to "1"
console.log(typeof stir);       // ✅ string
console.log(stir);              // ✅ Output: "Karan"
