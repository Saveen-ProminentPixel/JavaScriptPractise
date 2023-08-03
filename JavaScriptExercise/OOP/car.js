
class Car {

    name;
    model;
    weight;
    color;

    constructor(name, model, weight, color){
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }

    start(){
        console.log("car is started! >>>>");
    }
    drive(){
        console.log("Drive Safely :)");
    }
    brake(){
        console.log("xxxxx Slow down Man!!!")
    }
    stop(){
        console.log("Car Stopped!!!!")
    }

}

let car1 = new Car("Lamborgini", "XX00", "4 Ton", "Blue");
car1.start();
car1.drive();
car1.brake();
car1.stop();



// Volume of Cylinder

function volumeOfCylinder(radius, height){
    let volume = Math.PI * radius * radius * height;
    return volume.toFixed(4);
}

console.log(volumeOfCylinder(3,7));




// Books

class Book {
    name;
    author;
    readingStatus;

    constructor(name, author, readingStatus){
        this.name = name;
        this.author = author;
        this.readingStatus = readingStatus;
    }

}

let book1 = new Book("The Alchemist", "Paulo Coelho", "Half");
let book2 = new Book("Quiet", "Susan Cain", "one-fourth");
let book3 = new Book("the song of ice and fire", "RR Martin", "Completed");

console.log(`${book1.name} - ${book1.author} - ${book1.readingStatus}`);
console.log(`${book2.name} - ${book2.author} - ${book2.readingStatus}`);
console.log(`${book3.name} - ${book3.author} - ${book3.readingStatus}`);