const container = document.querySelector(".container");
const newGridBtn = document.querySelector("#newGridBtn");


//A function that sets a range of how big or small the grid can be as to not crash the site.
function sizeRange(input) {
   
    if (input >= 2 && input <= 100) {
        newGrid;
    } else {
        console.log("Too many squares");
    }
}

//When button is clicked, a pop-up appears asking for the size of grid to be made.
function newGrid() 
{
    let squares = prompt("How many squares on each side?");
   const gridArea = squares * squares;
   sizeRange(squares);
    

    for (let i = 0; i <= gridArea; i++)

    {
        container.style.gridTemplateColumns = `repeat(${squares} , 1fr)`;
        container.style.gridTemplateRows = `repeat(${squares} , 1fr)`;
        const newDiv = document.createElement("div");
        newDiv.className = "newDiv";
        newDiv.style.outline = "solid grey 1px";

        container.appendChild(newDiv);
}

;}

newGridBtn.addEventListener("click", newGrid);

