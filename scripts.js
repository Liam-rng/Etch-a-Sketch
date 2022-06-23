const container = document.querySelector(`#container`)
const choseSize = document.querySelector(`#size_changer`);

const createContainer = function (side, total) {
    document.getElementById(`container`).style.gridTemplateColumns = `repeat(${side},1fr)`
    container.innerHTML = ``;
    for (let i = 0; i < total; i++) {
        container.innerHTML += `<div class="dot"></div>`;
    };
};


let side = 8;
const total = side * side;
createContainer(side, total);

const dots = document.querySelectorAll(`.dot`);

buttons = document.querySelectorAll(`button`);
let styling_str = `background-color:`;
let color;
buttons.forEach(button => {
    button.addEventListener(`click`, function buttonClick(event) {
        if (event.target.id == `size_changer`) {
            user_side = window.prompt(`How many squares should the square have per side?`);
            user_total = user_side * user_side;
            createContainer(user_side, user_total);
        }
        else {
            color = event.target.id;
        }
    });
});

dots.forEach(dot => {
    dot.addEventListener('mouseover', function handleHover() {
        let selected_color = styling_str + color + `;`;
        dot.setAttribute('style', selected_color);
    });
});

