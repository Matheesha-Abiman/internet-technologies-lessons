console.log('elements is loded...');

const newDiv = document.createElement("div");
// console.log(newDiv);

newDiv.id = "alert-succes";
newDiv.className = "alert alert-Success";
newDiv.textContent = "Successfully Created";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.borderRadius = "12px";
newDiv.style.padding = "10px";
newDiv.style.marginTop = "10px";
console.log(newDiv);

const newDiv2 = document.createElement("div");

// card.remove();



newDiv2.id = "Not-succes";
newDiv2.className = "alert Not-succes"
newDiv2.textContent = "Successfully Deleted";
newDiv2.style.backgroundColor = "red";
newDiv2.style.color = "white";
newDiv2.style.borderRadius = "12px";
newDiv2.style.padding = "10px";
newDiv2.style.marginTop = "10px";
console.log(newDiv2);

console.log(newDiv2)

const card = document.querySelector(".card");
card.append(newDiv);

const card2 = document.querySelector(".card");
card.append(newDiv2);
const clonedDiv = newDiv2.cloneNode(true);
card.append(clonedDiv);

console.log(card.childNodes());


