let container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const output = document.getElementById('value');
const clear = document.getElementById('clear')
const rMode = document.getElementById('rainbow')

// const darken = document.getElementById('shadow')
// const lighten = document.getElementById('light')

output.textContent = `${slider.value}x${slider.value} `;
let size = slider.value;
let rainbow = false;
// let dark = false;
// let light = false;

clear.addEventListener('click', draw);

rMode.addEventListener('click',() =>    {
    rainbow = !rainbow;
});//toggle rainbow mode on click

// darken.addEventListener('click',() =>    {
//     dark = !dark;
// });

//updates text and value of the slider
slider.oninput =function(){
    output.textContent = `${this.value}x${this.value} `;
    size = slider.value;
    draw();
    
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
            if(!rainbow){
            square.style.backgroundColor = document.getElementById('cvalue').value;
        }else{
            square.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16) // random color value generator
        }
        })
    })
}

draw();