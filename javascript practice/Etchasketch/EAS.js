// etchasketch
//the goal is to create a series of divs that change color when you hover over them
//maybe some functionality where the divs are animated and fade to white
//achieving the shake feature of the real toy

/*
function to clear the screen, function to update screen, function to change color
function to prompt user for size
*/
let counter;

function clearScreen(){
    let screen = document.querySelector("#screen");
    screen.innerHTML = "";
}

function createScreen(numSquare=16) {
    clearScreen();
    counter = 0;
    let screen = document.querySelector("#screen");
    for(let x = 0; x < numSquare; x++){
        for(let y = 0; y < numSquare; y++){
            let div = document.createElement("div");
            div.textContent = "a";
            div.addEventListener("mouseover", changeColor);
            screen.appendChild(div);
            counter++
        }
    }
    let current = document.getElementById("size");
    current.textContent = `${numSquare} x ${Math.sqrt(counter)}`;
    console.log(counter);
}

function askSize(){
    let response = prompt("how bigs your square");
    let size = parseInt(response);

    if(isNaN(size)){
        return;
    }
    if(size < 1){
        size = 1;
        alert("can't be smaller than 1");
    }
    if(size > 100){
        size = 1;
        alert("can't be bigger than 100");
    }

    createScreen(size);
}

function changeColor(e){
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'black';
}
window.onload = function() {
    createScreen(5);
};