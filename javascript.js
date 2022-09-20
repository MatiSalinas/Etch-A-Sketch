let container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const output = document.getElementById('value');
const clear = document.getElementById('clear');
const rMode = document.getElementById('rainbow');
const shadow = document.getElementById('shadow');
const light = document.getElementById('light');

output.textContent = `${slider.value}x${slider.value} `;
let size = slider.value;
let rainbow = false;
let darkenBool = false;
let lightenBool = false;

let pressed = false;

window.addEventListener('mousedown', ()=>{
    pressed=true;
})

window.addEventListener('mouseup', ()=>{
    pressed=false;
})


clear.addEventListener('click', draw);

rMode.addEventListener('click',() =>    {
    rMode.classList.toggle('on')
    rMode.classList.toggle('off')
    rainbow = !rainbow;
});//toggle rainbow mode on click
shadow.addEventListener('click',() =>    {
    shadow.classList.toggle('on')
    shadow.classList.toggle('off')
    darkenBool = !darkenBool;
});//toggle rainbow mode on click
light.addEventListener('click',() =>    {
    light.classList.toggle('on')
    light.classList.toggle('off')
    lightenBool = !lightenBool;
});//toggle rainbow mode on click


//updates text and value of the slider
slider.oninput =function(){
    output.textContent = `${this.value}x${this.value} `;
    size = slider.value;
    draw();
    
}
function darken(rgb){
    rgbArr = rgb.substring(4,rgb.length-1).replace(/ /g,'').split(',');
    
    rgbNum = rgbArr.map(num => parseInt(num*0.9,10));

    final = `rgb(${rgbNum[0]},${rgbNum[1]},${rgbNum[2]})`;

    return  final
    
}

function lighten(rgb){
    rgbArr = rgb.substring(4,rgb.length-1).replace(/ /g,'').split(',');
    
    rgbNum = rgbArr.map(num => parseInt(num*1.1,10));

    final = `rgb(${rgbNum[0]},${rgbNum[1]},${rgbNum[2]})`;

    return  final
    
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
            if(pressed){
            if(!rainbow && !darkenBool && !lightenBool){
            square.style.backgroundColor = document.getElementById('cvalue').value;
        }else if(rainbow){
            square.style.backgroundColor = "#" + ((1<<24)*Math.random() | 0).toString(16) // random color value generator
            

        }else if(darkenBool){
            square.style.backgroundColor = darken(square.style.backgroundColor);
        }else if(lightenBool){
            square.style.backgroundColor = lighten(square.style.backgroundColor);
        }
        }})
    })
}

draw();



