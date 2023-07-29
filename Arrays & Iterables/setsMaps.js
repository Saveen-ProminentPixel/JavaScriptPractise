const ids1 = new Set(); // Set(0) {size: 0}
console.log(ids1);

const ids2 = new Set([1,2,3]); // {1, 2, 3}
console.log(ids2);

console.log(ids2.has(2));  // true
console.log(ids2.has(5)); // false

for(const entry of ids2.entries()){
    console.log(entry);   // [1,1] [2,2] [3,3]
}

ids2.add(4);
console.log(ids2); //{1, 2, 3, 4}
ids2.delete(3);
console.log(ids2); // {1, 2, 4}


// Map
const person1 = {name: "Sam"};
const person2 = {name: "Alex"};

const personData = new Map([[person1, [{date: "15/06/2022", price: 200}]]]);

personData.set(person2, [{date: "21/10/2021", price: 100}]);

console.log(personData);
console.log(personData.get(person1));

for(const [key, value] of personData.entries()){
    console.log(key, value);
}

for(const key of personData.keys()){
    console.log(key);
}

for(const value of personData.values()){
    console.log(value);
}

console.log(personData.size);



let person = {name: "Saveen"};
const personSet = new WeakSet();
personSet.add(person);

person = null;

console.log(personSet);
console.log(person);