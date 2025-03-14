console.log("load");

// function greet(firstName) {
//     console.log("hello" + " "+ firstName);
// }

// greet("jony");

// function greet(firstName) {
//     console.log("hello" + " "+ firstName);
// }

// greet();

// function greet(firstName) {
//     if (typeof firstName === "undefined") {
//         console.log("hello world");
//     } else {
//         console.log("hello " + firstName);
//         // console.log("hello ", firstName); concat
//         // console.log(`Hello ${firstName}!`);
//     }
    
// }

// greet("jony");
// greet();

// 2. Function Expression

// let greet2 = function (firstName) {
//     console.log(`Hello ${firstName}!`);
// }

// greet2("jony");


//3. Arrow Function
// let greet3 = (firstName) => {
//     console.log(`Hello ${firstName}!`);
// }

// greet3("nimal");

// let greet4 = firstName => console.log(`Hello ${firstName}!`);
// let greet4 = () => console.log(`Hello ${firstName}!`);

//4. Default Parameters
// let greet5 = (firstName = "sam") => {
//     console.log(`Hello ${firstName}!`);
// }

// greet5();
// greet5("nimal");

//5. Rest Parameters
let sum = (...numbers) => {
    numbers.forEach(number => console.log(number));
}

sum(1, 2, 3, 4, 5);