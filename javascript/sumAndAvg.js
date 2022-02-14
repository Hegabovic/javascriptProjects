function closeSumAndAvg() {
    close();
}

var sum = 0;
var avg = 0;

var arrayElementsNumber = Number(prompt("how many numbers do you want ?"));

var myArr = [];
for (var j = 0; j < arrayElementsNumber ; j++) {
    myArr[j] = Number(prompt("enter numbers"));
}

for (var i = 0; i < myArr.length; i++) {
    // sum+= myArr[i];
    sum = myArr.reduce(function (p, n) {
        return p += n;
    });
}
avg = sum / myArr.length;


alert("Sum = " + sum + " , avg = " + avg);
