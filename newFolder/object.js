function createUser(username, score){
    this.username = username;
    this.score = score
}
createUser.prototype.increment = function() {  
    this.score++;
    this.score = this.score + 5; // Incrementing score by 1
    console.log(`Score incremented: ${this.score}`);
}
const user1 = new createUser("Karan", 10);
const user2 =  new createUser("John", 20);
console.log(user1);
console.log(user2);

user1.increment();
user2.increment();