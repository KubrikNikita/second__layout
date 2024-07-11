const operation = document.querySelector('#operation');
const firstNumber = document.querySelector('#first__number');
const secondNumber = document.querySelector('#second__number');
const calcForm = document.querySelector('#calc__form');
const formButton = document.querySelector('#calcButton');
let result = document.querySelector('h2');



formButton.addEventListener('click', (event) => {
    event.preventDefault()
    const isValidation = validation(firstNumber.value, secondNumber.value, operation.value)

    if (!isValidation){
         result.innerHTML = "Найдено неверное значение";
         return;
    }

    const valueResult = calc(firstNumber.value, secondNumber.value, operation.value)
    result.innerHTML = valueResult;
})



function validation(firstNumber, secondNumber, operation) {
    const checkedNumberFirst = isNumber(firstNumber);
    const checkedNumberSecond = isNumber(secondNumber);
    const checkedOperation = checkValidOperation(operation);
    console.log(checkedNumberFirst);
    console.log(checkedNumberSecond);
    console.log(checkedOperation);


    if (!checkedNumberFirst || !checkedNumberSecond || !checkedOperation) {
        return false
    }

    return true
}

function calc(firstNumber, secondNumber, operation) {
    let calcResult;

   switch (operation){
    case "+":
        calcResult = +firstNumber + +secondNumber;
        break;
    case "-":
        calcResult = +firstNumber - +secondNumber;
        break;
    case ":":
    case "/":
        if (secondNumber == 0){
            calcResult = "Infinity"
        }
            calcResult = +firstNumber / +secondNumber;
        break;
    case "*":
        calcResult = +firstNumber * +secondNumber;
        break;
        
   }
   return calcResult;
}
function isNumber(val) {
    if (val != +val) {
        return false
    }

    return true
}

function checkValidOperation(operation) {
    const list = ["+", "-", "*", "/", ":"]

    return list.indexOf(operation) !== -1

}


