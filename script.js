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
        //cell.innerText = (i + 1);
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid(16);