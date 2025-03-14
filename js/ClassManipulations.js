console.log('class manipulation is loded...');

const heading = document.getElementById("heading");
console.log(heading.classList);

// heading.classList.add('new-class');
heading.classList.add("new-class", "rounded");
console.log(heading.classList);

//remove one or more
heading.classList.remove("rounded");
console.log(heading.classList);

heading.classList.toggle("active");
heading.classList.toggle("active");

console.log(heading.classList);
