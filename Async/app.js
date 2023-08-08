
let ans = new Promise((resolve, reject) => {
    const n = Math.floor(Math.random() * 10);

    if(n<5){
        return resolve();
    }else{
        return reject();
    }
});

ans.then(function(){
    console.log("below");
}).catch(function(){
    console.log("above");
});


// promise chaining

let p1 = new Promise((resolve, reject) => {
    console.log("First promise completed");
    return resolve();
});

let p2 = p1.then(function(){
    return new Promise((resolve, reject) => {
        console.log("Second promise completed");
        return resolve();
    })
});

let p3 = p2.then(function(){
    return new Promise((resolve, reject) => {
        console.log("Third promise completed");
        return resolve();
    })
});

let p4 = p3.then(function(){
    return new Promise((resolve, reject) => {
        console.log("Fourth promise completed");
        return resolve();
    })
});



// async await

async function abcd(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json();
    console.log(ans);
}

abcd();
