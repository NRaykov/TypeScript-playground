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
