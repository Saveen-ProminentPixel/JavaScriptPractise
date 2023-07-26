

const sum = (resultHandler, ...number) => {
    let total = 0;
    for(const num of number){
        total += num;
    }
    resultHandler(total);
}

const showResult = (total) => {
    console.log("The total is ", total);
}

sum(showResult, 2,8,9,6,3,56,7,89,1,24,6);


const combine = (resultHandler, operation, ...number) => {
    let total = 0;
    for(const num of number){
        if(operation === "ADD"){
            total += num;
        }
        else{
            total -= num;
        }
    }
    resultHandler(total);
}

const result = (messageText, total) => {
    console.log(messageText, total);
}

combine(result.bind(this, "The total of addtion is :"), "ADD", 2,8,9,6,3,56,7,89,1,24,6);
combine(result.bind(this, "the total of subtraction is : "), "SUBTRACT", 2,8,9,6,3,56,7,89,1,24,6);

