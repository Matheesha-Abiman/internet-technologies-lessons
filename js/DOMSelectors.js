console.log("DOMSelector is loaded");

console.log(document);

//1.select using element ID
const heading = document.getElementById("heading");
console.log(heading);

//2.select elements by class name - return an HTMLCollection 
const paragraph = document.getElementsByClassName("paragraph")
console.log(paragraph);

//3.select elements by tag name
const tags = document.getElementsByTagName("p");
console.log(tags);

// 4.select the first element that matches css selector(s)
const querySelector = document.querySelector(".paragraph");
console.log(querySelector);

const querySelector2 = document.querySelector(".box h2");
console.log(querySelector2);

//5.select the all elements that match a specific css selector(s) - return type important all
const querySelectorAll = document.querySelectorAll(".box h2");
console.log(querySelectorAll)




