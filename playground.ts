class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
};

document.body.appendChild(button);


//Explicity assign types
let myAge: number;
myAge = 29;
// myAge = '28'; // error

let myName: string;
myName = 'Max';

// ***** Arrays ******
let hobbies = ['cooking', 'Sports'];
console.log(typeof hobbies);
console.log(hobbies[0]);

let hobbies2: any[] = ['cooking', 'Sports'];
hobbies2 = [200];

// ***** Arrays Tuples ******
let tuplesType: [string, number] = ['Car', 20344];
//First type is string second type is number HINT!!! THE ORDER IS IMPORTANT


// ***** Enums ******
enum Color { // Create enum of type Color (custom type)
    Green, // 0
    Red, // 1
    Blue // 2
}
let getGreen: Color = Color.Green; //Create variable of type Color and get the green color of this type
console.log(getGreen); // HINT because of enum type console will show 0 (first index of Color Array)

// Bonus enum hint
enum ColorWithBrakeOrder {
    Green, // 0
    Red = 100, //100
    Blue // 101
}
let getBlue: ColorWithBrakeOrder = ColorWithBrakeOrder.Blue;
console.log(getBlue); //Will show 101





// ***** functions ******

function returnMyName(): string {
    return myName;
    
}
//returns value with string

function sayHello(): void {
    console.log('Say Hello');
}
//returns nothing (undefined by default) uses VOID type;


//** Argument type **//
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 5)); //Returns 10

let myMultiply: (value1: number, value2: number) => number;
//Functions Types ES6 arrow (value1 and value2 as arguments) => type of number as a return value


//***** Objects Types *****/
let userData: {name: string, age: number} = { // {name: string, age: number} kind of blueprint of the object
    name: 'Max',
    age: 29,
};
// userData = {}; //Error

//HINT The name of the props is important
userData = {
    name: 'John',
    age: 40
};


//Complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
        data: [100, 3.99, 10],
        output: function (all: boolean): number[] {
            return this.data;
        }
};


