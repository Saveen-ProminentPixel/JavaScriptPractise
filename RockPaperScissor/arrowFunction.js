
const sum = (a,b) => a + b;

// no parameter
const message = () => console.log("Hello World");

// single parameter
const square = a => a**a;

const sum2 = (a,b) => {
    a *= 2;
    b *= 2;
    return a + b;
};

const sumUp = () => {
   function newfunction1(){
        console.log("Hello world");
    }
};

// sumUp(1, 4, 6, -2, 5, 8, 9);

const sumUp2 = (...numbers) => {
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;
};

const sumUp3 = (a,b, ...numbers) => {
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;
};

const sumUp4 = function() {
    let sum = 0;
    for(let num of arguments){
        sum += num;
    }
    return sum;
};

// console.log(sumUp2([2,6,7,8,9,3,5,6,42,56,4]));
console.log(sumUp2(2,6,7,8,9,3,5,6,42,56,4));
console.log(sumUp3(2,6,7,8,9,3,5,6,42,56,4));
console.log(sumUp4(2,6,7,8,9,3,5,6,42,56,4));

// sumUp.newfunction1();




