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
