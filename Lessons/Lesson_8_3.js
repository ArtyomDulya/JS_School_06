
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, I'm ${this.name}`);
        console.log(`I'm a ${this.occupation}`);
    }
}

class Worker_1 extends Person1 {
    constructor(name, age, occupation) {
        super(name, age);
        this.occupation = occupation;
    }
}

class Manager_1 extends Worker_1 {
    constructor(name, age, occupation, role ) {
        super(name, age, occupation);
        this.role;
    }
}
let p2 = new Person1("Olga", 23);
p2.introduce();
let w3 = new Worker_1("Fedor", 65, "teacher");
w3.introduce();
let m3 = new Manager_1("Alexandr", 35, "teacher", "principal");



let obj1 = {};
obj1.name = "Anna";
obj1.occupation = "student";
obj1.introduce = function () {
    console.log(`Hello, I'm ${this.name}`);
    console.log(`I'm a ${this.occupation}`);
}

let obj2 = {
    name: "Anna",
    occupation: "student",
    ointroduce: function () {
        console.log(`Hello, I'm ${this.name}`);
        console.log(`I'm a ${this.occupation}`);
    }
}

let obj3 = {
    name: "Serj",
    age: 32,
    show: function () {
        return `Name: ${this.name}, age ${this.age}`;
    }
}

let obj4 = {
    __proto__: obj3,
    occupation: "Teacher"
}

obj4.name = "Arhip";

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
        console.log(`Hello, I'm ${this.name}`);
        console.log(`I'm a ${this.age}`);
    }
}

let person1 = new Person("Anna", 24);
let person2 = new Person("Serj", 32);

function Worker(name, age, occupation) {
    Person.call(this, name, age);
    this.occupation = occupation;
    this.officialGreeting = function () {
        console.log(`let me introduce myself, I'm ${this.name}`);
        console.log(`I'm working as a ${this.occupation}`);
    };
}

let p1 = new Person("Anna", 17);
let w2 = new Worker("John", 45, "teather");

function Manager(name, age, occupation, role) {
    Worker.call(this, name, age, occupation);
    this.role = role;

}

let m1 = new Manager("Maria", 25, "teacher", "principal");
m1.introduce();

class Employee {
    constructor(name){
        this._name = name;
    }
    introduce() {
        console.log(`Hello, I'm ${this._name}`);
    }
    setName(name) {
        this._name = name;
    }
    getName(){
        return this._name;
    }
}

let e1 = new Employee("Stan");

e1.setName("Alex");
console.log(e1.getName());
e1.setName("Alexanr");
console.log(e1.getName());



