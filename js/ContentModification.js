console.log('content loded');

const heading = document.getElementById("heading");

console.log(heading);
console.log(heading.textContent);//print krnn 
heading.textContent = "Hello World";

//2.innerHTML - Gets or sets the HTML inside of an element
const card = document.querySelector(".card");
console.log(card.innerHTML);//innerHTML ek print krnn 
card.innerHTML = "<h2>My Card</h2><p>This is card</p>";

//3.innerText - Gets or sets the text content of an elemnt
console.log(card.innerText);
card.innerText = "Just the text";

const input = document.querySelector('input[type = "text"]');
console.log(input.value);
input.value = "Hello World";