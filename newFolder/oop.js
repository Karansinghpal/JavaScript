
//Object Literal
//Creating an object using object literal notation
//This is a simple object with properties and a method
const user = {
    username: "Karan",
    age: 22,
    email: "kp5495423@gmail.com",
    getname: function() {
        console.log(`Hello, my name is ${this.username}`);
    }
}
console.log(user);
    console.log(user.getname());



    function User(username, age, email) {
        this.username = username;
        this.age = age;
        this.email = email;
        return this;
        //Method to get the name of the user
        //This method logs the username to the console
    }
    console.log(User);
    //Creating a new user object using the User constructor
    const newUser = new User("John", 30, "john@example.com");

    const newUser2 = new User("Karan", 22, "Karan@example.com");//if you will not use new then it will override the User function
    console.log(newUser);
    console.log(newUser2);