function closeCalc() {
    close();
}

var isContinue = false;
var isAgain = true;
var result = 0;

while (isAgain || isContinue) {
    var firstNumber = parseInt(prompt("please enter first number"));
    var operation = prompt("choose operation: + , - , * , /, %");
    if (!isContinue) {
        var secondNumber = parseInt(prompt("please enter second number"));
    }
    switch (operation) {
        case '+':
            if (!isContinue) {
                result = firstNumber + secondNumber;
                alert(firstNumber + " + " + secondNumber + " = " + result);
            } else {
                result += firstNumber;
                alert("result = " + result);
            }
            break;
        case '-':
            if (!isContinue) {
                result = firstNumber - secondNumber;
                alert(firstNumber + " - " + secondNumber + " = " + result);
            } else {
                result -= firstNumber;
                alert("result = " + result);
            }
            break;
        case '/':
            if (!isContinue) {
                result = firstNumber / secondNumber;
                alert(firstNumber + " / " + secondNumber + " = " + result);
            } else {
                result /= firstNumber;
                alert("result = " + result);
            }
            break;
        case '%':
            if (!isContinue) {
                result = firstNumber % secondNumber;
                alert(firstNumber + " % " + secondNumber + " = " + result);
            } else {
                result %= firstNumber;
                alert("result = " + result);
            }
            break;
        case '*':
            if (!isContinue) {
                result = firstNumber * secondNumber;
                alert(firstNumber + " * " + secondNumber + " = " + result);
            } else {
                result *= firstNumber;
                alert("result = " + result);
            }
            break;
        default:
            alert("choose one of the provided operations");
    }
    isAgain = confirm("do you want to repeat ?");
    if (!isAgain) {
        isContinue = confirm("do your next operation using result");
    } else{
        result = 0;
        isContinue = false;
    }
}