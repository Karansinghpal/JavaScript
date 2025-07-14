class User {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    encryptPassword() {
        return `this is a dummy encryption for ${this.password}User`;
    }
}
const user = new User('John  Doe', 30, 'securePassword123');
// console.log(user.encryptPassword());
console.log(user.name);
console.log(`User.age: ${user.age}`);
console.log(`User.password: ${user.password}`);
// console.log(User.toUpperCase());











////////Inheritance//////////////////

class User2 {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    logMe() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Password: ${this.password}`);
    }
}

class Teacher extends User2 {
    constructor(name, age, password) {
        super(name, age, password); // ✅ must call super() first
    }
}

const teacher = new Teacher('Jane Smith', 40, 'teacherPassword456');
teacher.logMe();


console.log(teacher instanceof Teacher); // true