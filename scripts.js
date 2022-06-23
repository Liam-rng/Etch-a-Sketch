var side = window.prompt(`How many squares should the square have per side?`);
const container = document.querySelector(`#container`)

const n = side * side;
document.getElementById(`container`).style.gridTemplateColumns = `repeat(${side},1fr)`
for(let i = 0; i < n; i++){
    container.innerHTML += `<div class="dot"></div>`;
}

const dots = document.querySelectorAll(`.dot`);

buttons = document.querySelectorAll(`button`);
let styling_str = `background-color:`;
let color;
buttons.forEach(button => {
    button.addEventListener(`click`, function buttonClick(event){
        if(event.target.id !== `size_changer`){
        color = event.target.id;
         console.log(color);}
    });
});

dots.forEach(dot => {
    dot.addEventListener('mouseover', function handleHover(event) {
      let selected_color = styling_str + color + `;`;
        dot.setAttribute('style', selected_color);
    });
});



// do nothing if the id of the button is size_changer