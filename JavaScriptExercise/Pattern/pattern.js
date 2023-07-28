
const a = "oooooooooooooooo";
const b = "oooo";
let c = "";

for(let i=1;i<9;i++){
    if(i%2 != 0){
        for(let j=0;j<3;j++){
            console.log(a);
        }
    }
    else{
        for(let j=0;j<3;j++){
            console.log(c + b);
        }
        c += "    ";
    }
}