    const container = document.querySelector(".container");
    const newGridBtn = document.querySelector("#newGridBtn");
    const blackColorBtn = document.querySelector("#blackColorBtn");
    const randomColorBtn = document.querySelector("#randomColorBtn");
    let newDivs = document.querySelectorAll(".newDiv");
    let randomColor = false;

    function newGrid() {
    const squares = prompt("How many squares on each side?");
    const gridArea = squares ** 2;

    if (sizeRange(squares)) {
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

        for (let i = 0; i < gridArea; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("newDiv");
        newDiv.style.outline = "solid grey 1px";
        container.appendChild(newDiv);
        }

        newDivs = document.querySelectorAll(".newDiv");
        addColorListener();
    }
    }

    function sizeRange(input) {
    if (input >= 2 && input <= 100) {
        return true;
    } else {
        alert(`${input} is an invalid size, squares can only be between 2 and 100.`);
        return false;
    }
    }

    function addColorListener() {
    newDivs.forEach((newDiv) => {
        newDiv.addEventListener("mouseover", function () {
        this.style.backgroundColor = randomColor
            ? `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)})`
            : "black";
        });
    });
    }

    randomColorBtn.addEventListener("click", function () {
    randomColor = true;
    });

    blackColorBtn.addEventListener("click", function () {
    randomColor = false;
    });

    newGridBtn.addEventListener("click", newGrid);


