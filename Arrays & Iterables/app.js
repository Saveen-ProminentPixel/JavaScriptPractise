// Creating array

const numbers1 = [1, 2, 3, 4]; // [1,2,3,4]
console.log(numbers1);

const numbers2 = new Array("hi", "welcome!"); // ["hi", "welcome!"]
console.log(numbers2);

const numbers3 = new Array(3, 2, 7); // [3,2,7]
console.log(numbers3)

const numbers4 = new Array(5); // Empty array of length 5
console.log(numbers4);

const numbers5 = new Array(3, "Hello", 7); // [3,"Hello",7]
console.log(numbers5);

const numbers6 = Array(3,5,8,9); // [3,5,8,9]
console.log(numbers6);

const numbers7 = Array.of(4,6); // [4,6]
console.log(numbers7);

// const numbers8 = Array.from(2,7); // throws an error
// console.log(numbers8);

// Array.from() take an array-like object as argument
const numbers9 = Array.from(numbers1); // [1, 2, 3, 4]
console.log(numbers9);

const numbers10 = Array.from("Prominent Pixel"); // ['P', 'r', 'o', 'm', 'i', 'n', 'e', 'n', 't', ' ', 'P', 'i', 'x', 'e', 'l']
console.log(numbers10);

const listItems = document.querySelectorAll("li"); // return NodeList
console.log(listItems);

const arrayListItems = Array.from(listItems); // array of the nodeList
console.log(arrayListItems);


// kind of data to store in Arrays

const names = ["saveen", "Ramesh", "Payal", "Jay"];
const personalData = ["Abhishek", 30, {street: "1st Av", city: "LA", state: "California"}];
const arrayOfArrays = [[1,2,3], [4,5,6], [7,8], [9,1,2,3]];

for(const arr of arrayOfArrays){
    console.log(arr);
    for(const a of arr){
        console.log(a);
    }
}


// add data to arrays

const hobbies = ["cricket", "cooking"];

hobbies.push("reading"); // adds the item in the end
console.log(hobbies);

hobbies.unshift("coding"); // adds an intem in the starting
console.log(hobbies);

hobbies.pop(); // you can store popped value in variable if you want to. (e.g. const poppedValue = hobbies.pop();)
console.log(hobbies);

hobbies.shift(); // deletes the item from start
console.log(hobbies);

hobbies[5] = "writing"; // ['cricket', 'cooking', empty × 3, 'writing']
console.log(hobbies);
console.log(hobbies[4]); // undefined

// add item in between array
hobbies.splice(1, 0, "Football"); // footlball will add at index 1
console.log(hobbies);

// delete item from array
hobbies.splice(0, 1); // deletes the item at index 0.
console.log(hobbies);

// hobbies.splice(0); // deletes all the items
// hobbies.splice(2); // deletes all the items starting from index 2
// hobbies.splice(1, 2); // deletes 2 items starting from index 1
// hobbies.splice(-1, 1); // deletes the last element from the array
const removedElememts = hobbies.splice(1, 2);
console.log(removedElememts);



// Slice methods
const testresults = [1, 5.3, 3, -9, 10.56, 6, 5, -5];
const storedResuts = testresults; // both referece to the same array
const storedResuts2 = testresults.slice(); // creates an new array and assign ot to new array. 
testresults.push(3.6);
// console.log(testresults.slice());
console.log(storedResuts, testresults); // return same results for both arays
console.log(storedResuts2, testresults); // does not add 3.6 to storedResults2 arrays

console.log(testresults.slice(0, 2)); // returns new array from index 0 to 1 (first index is included but last index is not included)
console.log(testresults.slice(2)); // returns new array from index 2 to the end. 


// concat methods
const storedResults3 = testresults.concat([3, 6, 7]); // return a new array and add [3, 6, 7] to that array
console.log(storedResults3);


// indexOf
console.log(testresults.indexOf(10.56)); // returns the first matching element's index
console.log(testresults.indexOf(6, 2)); // only starts searching for the index of 6 from index no. 2
console.log(testresults.lastIndexOf(5)); // returns the last index of the matching element

// find
const personData = [{name: "Arjun"}, {name: "Bheem"}, {name: "Yudhistir"}, {name: "Nakul"}, {name: "Shadev"}];
const bheem = personData.find((person, idx, persons) => {
    return person.name === "Bheem";
}); // return the matching object
console.log(bheem);

const nakul = personData.findIndex((person, idx, persons) => {
    return person.name === "Nakul";
}); // returns the index of matching object
console.log(nakul);



// includes
console.log(testresults.includes(10.56)); // return boolean value


const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.2;
const taxAdjustedPrices = [];

// for(const price of prices){
//     taxAdjustedPrices.push(price * (1 + tax));
// }
// console.log(taxAdjustedPrices);

// forEach
prices.forEach((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
   taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);


// Map
const taxAdjustedPrices2 = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
   return priceObj;
});
console.log(prices, taxAdjustedPrices2);

// sort
const sortedPrices = prices.sort((a, b) => {
    if(a > b){
        return 1;
    } else if(a === b){
        return 0;
    } else{
        return -1;
    }
});
console.log(sortedPrices);

// reverse
console.log(sortedPrices.reverse());

// filter
// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 6;
// });
const filteredArray = prices.filter(p => p > 6);

console.log(filteredArray);


// reduce
// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// });
// console.log(sum);

const sum = prices.reduce((prevValue, currValue, curIndex, prices) => prevValue + currValue, 0);
console.log(sum);


// split
const data = "new york;10.99;2000";

const transformedData = data.split(";");
console.log(transformedData);


//join
const nameFragments = ["Saveen", "Poonia"];
const name = nameFragments.join(" ");
console.log(name);


// spread operator
const copiedNameFragments = [...nameFragments];
nameFragments.push("Mr");
console.log(nameFragments, copiedNameFragments);

console.log(Math.min(...prices));

const persons = [{name: "Saveen", age: 24}, {name: "Yash", age: 28}, {name: "Nitin", age: 33}];
const copiedPersons = [...persons];
persons.push({name: "Yati", age: 26}) // does not reflect on copiedPersons array, because it creates a new array
persons[0].age = 23;               // copies only the array, not the objects. so, if you change the object it will chnage in both arrays
console.log(persons, copiedPersons);

const copiedPersons2 = [...persons.map(person => ({name: person.name, age: person.age}))];


//Array Destructuring
const nameData = ["Saveen", "Poonia"];
// const firstName = nameData[0];
// const lastName = nameData[1];
const [firstName, lastName] = nameData;
console.log(firstName, lastName);

const nameData2 = ["Saveen", "Poonia", "Mr", 24];
const [firstName2, lastName2, ...otherInfromation] = nameData2;
console.log(firstName2, lastName2, otherInfromation);
