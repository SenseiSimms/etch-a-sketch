const container = document.querySelector(".container");

const newGridBtn = document.querySelector("#newGridBtn");

const newDiv = document.createElement("div");
newDiv.className = "newDiv";

const blackColorBtn = document.querySelector(".newDiv");
newDiv.style.backgroundColor = "black";

   

//When button is clicked, a pop-up appears asking for the size of grid to be made.

    function newGrid() {
        let squares = prompt("How many squares on each side?");
        const gridArea = squares * squares;
    
        if (sizeRange(squares)) {
        for (let i = 0; i < gridArea; i++) {
            container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
            
            newDiv.style.outline = "solid grey 1px";
    
            container.appendChild(newDiv);
        }
        }
    }

//A function that sets a range of how big or small the grid can be as to not crash the site.

    function sizeRange(input) {
        if (input >= 2 && input <= 100) {
        return true;
        } else {
        alert(`${input} is an invalid size, squares can only be between 2 and 100.`);
        return false;
        }
    }
    



newGridBtn.addEventListener("click", newGrid);
newDiv.addEventListener("mouseover", blackColorBtn);
