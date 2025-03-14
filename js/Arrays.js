console.log("load");

//1. Creating an array
let colors = ['red', 'blue', 'black'];
console.log(colors);

let colors2 = new Array("red", "blue", "black");
console.log(colors2);

console.log("====================================");

let array2 = [10, 'nimal', true, undefined, null, { name: 'jony' }, [1, 2, 3]];
console.log(array2);

//2. Accessing Elements
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[9]);

console.log("====================================");

//3. Modifying Elements
array2[0] = 'yellow';
console.log(array2);

console.log("====================================");

let fruits = ['apple', 'orange', 'mango', 'banana'];
fruits.push('grapes');
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift('strawberry');
console.log(fruits);

fruits.shift();
console.log(fruits);

//concat arrays

let vegetables = ['tomato', 'potato', 'onion'];
let items = fruits.concat(vegetables);
console.log(items);

items.forEach(function (items) {
    console.log(items);
})

let upperCaseItems = items.map(items => items.toUpperCase());
console.log(upperCaseItems);

let newarray = items.filter(items => items.length > 5);
console.log(newarray);