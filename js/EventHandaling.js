console.log('Event handling modification is loaded...');

const saveBtn = document.getElementById("btnSave");

function handleClick() {
    console.log("Button is clicked..");
}

saveBtn.addEventListener("click", handleClick);

// Now you can remove it properly
// saveBtn.removeEventListener("click", handleClick);
