const deaultResult = 0;
let currentResult = deaultResult;
let logEntries = [];

function getUserNumberInput(){
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'Add'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'Subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'Multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else{
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add(){
    calculateResult('Add');
}

function subtract(){
    calculateResult('Subtract');

}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber);
    writeToLog("Multiply", initialResult, enteredNumber, currentResult);

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber);
    writeToLog("Divide", initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


// currentResult = add(10, 20);
// const additionResult2 = add(5, 5);

// let calculationDescription = `(${deaultResult} + 10) * 3 / 2 -1`;



