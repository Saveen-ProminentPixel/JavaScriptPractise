// Library Land
const uid = Symbol("uid");
console.log(uid);

const user = {
    // id: "p1",
    [uid]: "p1",
    name: "Max",
    age:30
};

//  App Land => using the library 

user.id = "p2";

console.log(user);

