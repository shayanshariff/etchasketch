const container = document.getElementById("container");

function createGrid(dimensions)
{   
    let rows = dimensions;
    let cols = dimensions;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++)
    {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
    document.querySelectorAll(".grid-item").forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "black";
        })
    })
}

createGrid(16);



function clearGrid(){
    container.innerHTML = '';

    let dimensions = prompt("Grid size(1 - 100): ");
    if (dimensions >= 1 && dimensions <= 100){
        createGrid(dimensions);
    }
    else {
        clearGrid;
    }
}
document.getElementById("reset").addEventListener("click", clearGrid);

