let container = document.querySelector('.container');

let size = prompt("Choose gride size");
let cuadros = size* size;
document.getElementById('1').style.gridTemplateColumns = `repeat(${size},1fr)`;

console.log(container.gridTemplateColumns)

for(cuadros;cuadros>0;cuadros--){
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover',() =>{
        square.style.backgroundColor = 'black';
    })
})