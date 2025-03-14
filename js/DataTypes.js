console.log("DataTypes");

//Primitive Data Types

//1. number
let num1 = 10;
console.log(typeof num1);
let num2 = 10.5;
console.log(typeof num2);
console.log("================");

//2. string
let name = "Matheesha";
console.log(typeof name);
console.log("================");

//3. boolean
let isLogged = true;
console.log(typeof isLogged);
console.log("================");

//4. undefined
let x;
console.log(x);
console.log(typeof x);
console.log("================");

//5. null
let y = null;
console.log(y);
console.log(typeof y);
console.log("================");

//6. BigInt(n important to bigInt)
let bigIntValue = 4455543322113345677888766545433211n;
console.log(bigIntValue);
console.log(typeof bigIntValue);
console.log("================");

//Non Primitive data types

//7. objects
let person = {
    firstName : "Nimal",
    lastName : "Perera",
    age : 30

}
console.log(person);
console.log(typeof person);
console.log("================");

//8. array

let colors = ["red", "green", "orange"];
console.log(colors);
console.log(typeof colors);

//9. Function

function greet() {
    console.log("hi");
}

greet();
console.log(typeof greet);
console.log("================")

// 10. date

let today = new Date();
console.log(today);
console.log(typeof Date);
