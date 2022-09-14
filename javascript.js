let container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const output = document.getElementById('value');
const clear = document.getElementById('clear')

output.textContent = `${slider.value}x${slider.value} `;
let size = slider.value;


clear.addEventListener('click', draw);

//updates text and value of the slider
slider.oninput =function(){
    output.textContent = `${this.value}x${this.value} `;
    size = slider.value;
    
}


function draw(){
    container.replaceChildren();//deletes all divs inside container
    document.getElementById('1').style.gridTemplateColumns = `repeat(${size},1fr)`; //set grid columns
    let cuadros = size* size;
    for(cuadros;cuadros>0;cuadros--){ //adds the divs to the grid
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
}
mouseDetection();
}

function mouseDetection(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover',() =>{
            square.style.backgroundColor = document.getElementById('cvalue').value;
        })
    })
}
draw();