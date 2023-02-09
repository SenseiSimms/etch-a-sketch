const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#newGridBtn");





let buildGrid = function () {
   
    for (let i = 0; i < 16*16; i++)
    {
const newDiv = document.createElement("div");
newDiv.className = "newDiv";
newDiv.style.outline = "solid black 1px";
newDiv.style.height = "20px";
newDiv.style.width = "20px";
container.appendChild(newDiv);}


};



newGridBtn.addEventListener("click", buildGrid);

