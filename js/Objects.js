console.log("load");

//1. object create

let person = {
    firstName: 'jony',
    lastName: 'gune',
    age: 25,
    hobbies: ['cricket', 'football', 'movies'],
    addres: {
        country: 'sri lanka',
        city: 'galle'
    },
    getBirthYear: function () {
        return 2025 - this.age;
    }
}

console.log(person);

//1.dot notation
console.log(person.firstName);
console.log(person.age);
console.log(person.getBirthYear());
console.log(person.addres.city);

//2.bracket notation
console.log(person['firstName']);
console.log(person['age']);
console.log(person['getBirthYear']());

//adding properties
person.phone = "056543";
console.log(person);

//modify
person.firstName = "abiman";
console.log(person);

//delete
delete person.phone;
console.log(person);

console.log('==========================');

let car = {
    brand: 'toyota',
    model: 'Corolla',
    year: 2022,
    getDescription: function() {
        return `The ${this.brand} - ${this.model} - ${this.year}`;
    }
}

let description = car.getDescription();
console.log(description);

console.log('==========================');

//looping object properties
for (let key in person) {
    console.log(key);
}

console.log('==========================');

for (let key in person) {
    console.log(key, person[key]);
}

console.log('==========================');

let { firstName, age, lastName } = person;
console.log(firstName);
console.log(age);
// console.log(hobbies); //error - object destructing

//1.object keys

console.log(Object.keys(person));

//2.objects values
console.log(Object.values(person));

//2.objects entries
console.log(Object.entries(person));

//class definition
class Student{
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
