function closeAreaCalculator() {
    close();
}

var calculateAgain = true;
while (calculateAgain) {
    var shape = prompt("choose a shape: circle , Triangle , Square , Rectangle , parallelogram ,Trapezium ,Ellipse").toLowerCase().toString();

    switch (shape) {
        case 'circle':
            var r = Number(prompt("enter radius"));
            area = Math.PI * Math.pow(r, 2);
            alert("circle area = " + area);
            break;
        case 'triangle':
            var base = Number(prompt("enter base"));
            var height = Number(prompt("enter height"));
            area = 0.5 * base * height;
            alert("Triangle area = " + area);
            break;
        case 'square':
            var a = Number(prompt("enter length"));
            area = Math.pow(a, 2);
            alert("Square area = " + area);
            break;
        case 'rectangle':
            var width = Number(prompt("enter width"));
            var length = Number(prompt("enter length"));
            area = width * length;
            alert("Rectangle area = " + area);
            break;
        case 'parallelogram':
            var base1 = Number(prompt("enter base"));
            var verticalHight = Number(prompt("enter vertical height"));
            area = base1 * verticalHight;
            alert("parallelogram area = " + area);
            break;
        case 'trapezium':
            var a1 = Number(prompt("enter first length"));
            var b1 = Number(prompt("enter second length"));
            var hight = Number(prompt("enter height"));
            area = 0.5 * (a1 + b1) * hight;
            alert("Trapezium area = " + area);
            break;
        case 'ellipse':
            var a2 = Number(prompt("enter half minor value"));
            var b2 = Number(prompt("enter half major value"));
            area = Math.PI * a2 * b2;
            alert("Ellipse area = " + area);
            break;
        default:
            alert("please choose one of shown shapes");
    }
    calculateAgain = confirm("do you want calculate the Area of another Shape ? ");
}

