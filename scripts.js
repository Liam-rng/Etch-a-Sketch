const container = document.querySelector(`#container`);
const choseSize = document.querySelector(`#size_changer`);
const input = document.querySelector("input");

let styling_str = `background-color:`;
let color;

const createContainer = function (side, total) {
    document.getElementById(`container`).style.gridTemplateColumns = `repeat(${side},1fr)`;
    container.innerHTML = ``;
    for (let i = 0; i < total; i++) {
        container.innerHTML += `<div class="dot"></div>`;
    };
};
const addColorCapacity = function () {
    const dots = document.querySelectorAll(`.dot`);
    dots.forEach(dot => {
        dot.addEventListener('mouseover', function handleHover() {
            let selected_color = styling_str + color + `;`;
            dot.setAttribute('style', selected_color);
        });
    });
}
const std_side = 8;
const std_total = std_side * std_side;

createContainer(std_side, std_total);
addColorCapacity();

input.addEventListener("change", function(event){
  color = event.target.value;
});

buttons = document.querySelectorAll(`button`);

buttons.forEach(button => {
    button.addEventListener(`click`, function buttonClick(event) {
        if (event.target.id == `size_changer`) {
            let user_side;
            user_side = window.prompt(`How many squares should the square have per side?`);
            while (user_side > 80) {
                user_side = window.prompt(`Please enter a value smaller than 81 to avoid crashing:`)
            }
            user_total = user_side * user_side;
            createContainer(user_side, user_total);
            addColorCapacity();
        }
        else {
            color = event.target.id;
        }
    });
});
