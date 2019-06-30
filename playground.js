var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
//Explicity assign types
var myAge;
myAge = 29;
// myAge = '28'; // error
var myName;
myName = 'Max';
// ***** Arrays ******
var hobbies = ['cooking', 'Sports'];
console.log(typeof hobbies);
console.log(hobbies[0]);
var hobbies2 = ['cooking', 'Sports'];
hobbies2 = [200];
// ***** Arrays Tuples ******
var tuplesType = ['Car', 20344];
//First type is string second type is number HINT!!! THE ORDER IS IMPORTANT
// ***** Enums ******
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var getGreen = Color.Green; //Create variable of type Color and get the green color of this type
console.log(getGreen); // HINT because of enum type console will show 0 (first index of Color Array)
// Bonus enum hint
var ColorWithBrakeOrder;
(function (ColorWithBrakeOrder) {
    ColorWithBrakeOrder[ColorWithBrakeOrder["Green"] = 0] = "Green";
    ColorWithBrakeOrder[ColorWithBrakeOrder["Red"] = 100] = "Red";
    ColorWithBrakeOrder[ColorWithBrakeOrder["Blue"] = 101] = "Blue"; // 101
})(ColorWithBrakeOrder || (ColorWithBrakeOrder = {}));
var getBlue = ColorWithBrakeOrder.Blue;
console.log(getBlue); //Will show 101
// ***** functions ******
function returnMyName() {
    return myName;
}
//returns value with string
function sayHello() {
    console.log('Say Hello');
}
//returns nothing (undefined by default) uses VOID type;
//** Argument type **//
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 5)); //Returns 10
var myMultiply;
//Functions Types ES6 arrow (value1 and value2 as arguments) => type of number as a return value
//***** Objects Types *****/
var userData = {
    name: 'Max',
    age: 29
};
// userData = {}; //Error
//HINT The name of the props is important
userData = {
    name: 'John',
    age: 40
};
//Complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//Union types
var unionType = 50; //number OR string OR boolean
console.log(unionType);
//Never type
function neverReturns() {
    throw new Error('An Error');
}
/* ******************************************************************************** */
/* Classes */
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
        //'this.name' -> refers to Person property 'name'
        //'name' -> refers to constructor property
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        //We CAN access Person.type property because we are inside Person class
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 'max');
console.log(person.name + " " + person.username);
person.printAge();
person.setType('Test');
/* Inheritance */
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    //When extending a class, we always have to call SUPER first which call the constructor of the Patent class
    function Max(username) {
        var _this = 
        //super refers to the parent class
        _super.call(this, "MadMax", username) || this;
        //HINT child class props ALWAYS overrides props from super class (parent class)
        _this.name = 'Max'; // Overrides Person.name props
        return _this;
    }
    return Max;
}(Person));
var max = new Max("John");
console.log(max);
