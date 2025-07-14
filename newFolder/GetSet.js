class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }

    setName(name){
        this.name = name;
    }

    setAge(age){
        this.age = age;
    }
}
const user = new User('John', 30);
console.log(user.getName()); // John
console.log(user.getAge()); // 30


// Example usage                
user.setName('Jane');
user.setAge(25);
console.log(user.getName()); // Jane
console.log(user.getAge()); // 25