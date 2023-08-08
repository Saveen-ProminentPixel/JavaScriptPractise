// Reverse a String

const s = "Hello World";
let reverseString = "";

for(let i=s.length-1; i>=0; i--){
    reverseString += s[i];
}

console.log(reverseString);



// Strign without frist and last charcter

let ans = s.substring(1,s.length-1);
console.log(ans);