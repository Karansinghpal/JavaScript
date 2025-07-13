function SetUsername(username) {
    this.username = username
    // console.log("Karan");
}
function createUser(username,age,email){
        SetUsername.call(this, username)
        this.age = age
        this.email = email
        this.setUsername = SetUsername
    };

const user1 = new createUser("Karan", 25, "Karan@gmail.com");
console.log(user1); // Karan