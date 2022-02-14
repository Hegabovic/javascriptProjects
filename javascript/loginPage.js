var userName = "admin";
var password = "421$$";
var isAgain = true;

function closeCalc(){
    close();
}
while (isAgain) {
    var userInput_userName = prompt("please enter your username ");
    var userInput_password = prompt("Enter your password");

    var isRightUsername = (userName === userInput_userName);
    var isRightPassword = (password === userInput_password);

    if (!(isRightUsername && isRightPassword)) {
        if (!isRightUsername && !isRightPassword) {
            alert("check username and password and try again later");
        } else if (!isRightUsername) {
            alert("check your username");
        } else if (!isRightPassword) {
            alert("check your password");
        }
    } else {
        alert("Welcome login success");
    }
     isAgain = confirm("do you want to try again ? ");
}

