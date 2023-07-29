// print the pattern

let n = 5;

for(let i=1;i<=n;i++){
    let a = "";
    for(let j=1;j<=i;j++){
        a += "*";
    }
    console.log(a);
}



// sum of elements

let arr = [1, 12, 54, 65, 23, 41, 5, 9, 85, 74, 17];

let sum = 0;
for(let a of arr){
    sum += a;
}
console.log(sum);



// Print e from string

let st = "saelenkwejejeeohje";
let stArray = st.split("");
console.log(stArray);

let x = 0;
const eArray = stArray.filter(a => a === "e").map(a => {
    let e = x + "e";
    x++;
    return e;
});
console.log(eArray);



// 4.

let nums = [3,4,6,89,5,2,45,7,8,95,1,23,2,3,6,89,5,68,74,5,2,1,3];

const filterednums = nums.filter(a => a > 5);
console.log(filterednums);

const mappednums = nums.map(a => {
    const numObj = {num: a};
    return numObj;
});
console.log(mappednums);  

const multiplication = nums.reduce((a,b) => a*b, 1);
console.log(multiplication);



// find Max
const findMax = (arr) => {

    let max = -Infinity;
    for(const abc of arr){
        if(abc > max){
            max = abc;
        }
    }
    console.log(max);
};

findMax(arr);

const findMaxMin = (arr) => {

    let max = -Infinity;
    let min = Infinity;
    for(const abc of arr){
        if(abc > max){
            max = abc;
        }
        if(abc < min){
            min = abc;
        }
    }

    const maxMin = Array.of(max, min);

    return maxMin;
    // const [maxNum, minNum] = maxMin;
}

const ans = findMaxMin(arr);

const [max, min] = ans;

console.log(max, min);



// 7.

const setA = new Set([2,6,7,2,9,8,3,2,6,5,6,9,8]);
console.log(setA);