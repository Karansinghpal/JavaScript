// const { use } = require("react");

// const promisOne = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Promise One Executed");
//     resolve("Promise One Resolved");
//   }, 1000);
// })
// promisOne.then(function(result) {
//   console.log(result);
// });
// ////////////////////



// new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Task 2` Executed");
//     resolve();
//   }, 5000);
// }).then(function() {
//   console.log("Task 2 Resolvedddd");
// }
// );



//////////////////////////


const promishThee = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({
            username: "Karan",
            age: 22,
            email: "kp5495423@gmail.com"
        })
    }, 5000);
})

promishThee.then(function(result) {
    console.log(result);
    console.log(result.username);
    console.log(result.age);
    console.log(result.email);
});