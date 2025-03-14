console.log('eventlistener loaded');

const box = document.querySelector('.box');

//single clicked event
// box.addEventListener('click', function () {
//     console.log("clicked the box");
// })

// box.addEventListener('dblclick', function () {
//     console.log("Double clicked the box");
// })

// box.addEventListener('mousedown', function () {
//     console.log("Mouse down");
// })

// box.addEventListener('mouseup', function () {
//     console.log("Mouse up");
// })

// box.addEventListener('mousemove', function () {
//     console.log("Mouse move")
// })

box.addEventListener('mouseover', function () {
    console.log("Mouse over");
})

box.addEventListener('mouseout', function () {
    console.log("Mouse out");
})