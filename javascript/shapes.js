class Shape {
    // private members
    #X;
    #Y;

    // creating parent constructor
    constructor(_x = 0, _y = 0) {
        if (new.target.name == "Shape") {
            throw new Error("YOU CAN'T CREATE AN OBJECT FROM ABSTRACT CLASS !");
        }
        // public _x , _y
        this.#X = _x;
        this.#Y = _y;
    }

    // Area method to be overridden
    getArea() {
        return 0;
    }

    // Circumference method to be overridden
    getCircumference() {
        return 0;
    }

    // Log method to be overridden in all classes
    log() {
        console.log(`Circumference:${this.getCircumference()} Area:${this.getArea()} Type:${this.constructor.name}`);
    }
}

class Rectangle extends Shape {
    // class private members
    #Width;
    #Height;

    // creating constructor
    constructor(_width, _height, _x, _y) {
        super(_x, _y);
        this.#Width = _width;
        this.#Height = _height;
    }

    // overriding super method
    getArea() {
        return this.#Width * this.#Height;
    }

    // overriding super method
    getCircumference() {
        return (this.#Width + this.#Height) * 2;
    }
}

class Square extends Rectangle {
    // class private members
    #Length;

    constructor(_length, _x, _y) {
        super(_length, _length, _x, _y);
        this.#Length = _length;
    }

    // overriding super method
    getArea() {
        return super.getArea();
    }

    // overriding super method
    getCircumference() {
        return super.getCircumference();
    }
}

class Oval extends Shape {
    // private members
    #A;
    #B;

    constructor(_a, _b, _x, _y) {
        super(_x, _y);
        this.#A = _a;
        this.#B = _b;
    }

    // overriding super method
    getArea() {
        return (this.#A * this.#B * Math.PI.toFixed(2));
    }

    // overriding super method
    getCircumference() {
        return (this.#A + this.#B) * Math.PI.toFixed(2);
    }

}

class Circle extends Oval {
    // private members
    #R;

    constructor(_r, _x, _y) {
        super(_r, _r, _x, _y);
        this.#R = _r;
    }

    // overriding super method
    getArea() {
        return super.getArea(this.#R, this.#R).toFixed(1);
    }

    // overriding super method
    getCircumference() {
        return super.getCircumference(this.#R, this.#R).toFixed(2);
    }
}

// creating an array of objects
let myArr = [
    new Rectangle(10, 5, 0, 0),
    new Square(5, 0, 0),
    new Oval(10, 5, 0, 0),
    new Circle(5, 0, 0)
];

console.log(myArr.forEach(P => P.log()));

alert(myArr.forEach(P => P.log()));