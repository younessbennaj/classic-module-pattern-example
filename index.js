console.log(Module);

//DOM element

// return Element() instance
let repsCell = document.getElementById("repsCell");
let setsCell = document.getElementById("setsCell");
let repsButton = document.getElementById("repsButton");
let setsButton = document.getElementById("setsButton");
//Event handlers

repsButton.addEventListener("click", function () {
    Module.incrementReps();
    repsCell.innerHTML = Module.getReps();
})

setsButton.addEventListener("click", function () {
    Module.incrementSets();
    setsCell.innerHTML = Module.getSets();
})