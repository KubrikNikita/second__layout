const operation = document.querySelector('#operation');
const firstNumber = document.querySelector('#first__number');
const secondNumber = document.querySelector('#second__selector');
const calcButton = document.querySelector('#calcButton')
calcButton.addEventListener('click', () => {
    const oper = operation.value;
    if ((oper != "+") && (oper != "-") && (oper != "*") && (oper != "/") && (oper != "Сложение") && (oper != "Вычитание") && (oper != "Умножение") && (oper != "Деление")) {
        
    }
})