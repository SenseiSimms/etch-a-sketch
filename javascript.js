const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");






let buildGrid = function buildGrid() {
    let z = prompt("How many squares per side?");
    let gridArea = z * z;
   

    for (let i = 1; i <= gridArea; i++)
    {
       
        const newDiv = document.createElement("div");


newDiv.className = "newDiv";
newDiv.style.outline = "solid black 1px";
newDiv.style.gridTemplateColumns = `repeat(${z}}, 1fr)`;
newDiv.style.gridTemplateRows = `repeat(${z}, 1fr)`;
newDiv.style.width = "25px";
newDiv.style.height = "25px";
container.appendChild(newDiv);}
};




newGridBtn.addEventListener("click", buildGrid);

