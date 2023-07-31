const person = {
    firstName: "Sam",
    lastName: "Johnson",
    age: 24,
    city: "Surat",
};

const person2 = {
    firstName: person.firstName
};

const person3 = {
    lastName: person.lastName
}

const person4 = {
    age: person.age,
    city: person.city
}

console.log(person);
console.log(person2);
console.log(person3);
console.log(person4);



// dynamic key

const key1 = "name";
const key2 = "surName";
const key3 = "address";
const key4 = "age";


const obj = {
    [key1]: "Saveen",
    [key2]: "Poonia",
    [key3]: "Dindoli",
    [key4]: 23
};

console.log(obj);
