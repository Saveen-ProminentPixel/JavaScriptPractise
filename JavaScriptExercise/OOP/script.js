class vehicle {

    fuel = "petrol";

    constructor() {
        this.tyres = 4;
        this.type = "car";
        
    }

    // constructor(fuel){
    //     this.tyres = 4;
    //     this.type = "car";
    //     this.fuel = fuel;
    // }

    created(){
        console.log("Vehicle Object is created.");
    }
}

const v1 = new vehicle();
const v2 = new vehicle("disel");

v1.created();
v2.created();

console.log(v1.fuel);
console.log(v2.fuel);



class Person {
    age;
    name;
    city;
    
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
        this.printPerson();
    }

    printPerson(){
        console.log(`person with name ${this.name} and age ${this.age} has been created.`)
    }
}


const p1 = new Person("Sam", 23, "Surat");
const p2 = new Person("Jack", 26, "Ahmedabad");
const p3 = new Person("Alex", 25, "Vadodara");
const p4 = new Person("Max", 27, "Rajkot");




function Employee(name){
    this.name  = name;
}

const empGreet = {
    greet(){
        console.log("Hello There..! " + this.name);
    }
}

Employee.prototype.greet = empGreet.greet;

const emp1 = new Employee("Saveen");

emp1.greet();