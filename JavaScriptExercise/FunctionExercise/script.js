
const squareOfANumber = (customFunction, a) => {

    const square = a*a;

    customFunction(square);

};

const printSquare = (num) => {
    console.log(num);
};

const alertSquare = (num) => {
    alert("The square of the given number is " + num);
}

squareOfANumber(printSquare, 4);
squareOfANumber(alertSquare, 5);