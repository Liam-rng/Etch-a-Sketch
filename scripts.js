
const container = document.querySelector(`#container`)

const n = 256;

for(let i = 0; i < n; i++){
    container.innerHTML += `<div class="dot"></div>`;
}

const dots = document.querySelectorAll(`.dot`);

let selected_color = `background-color: red;`;


dots.forEach(dot => {
    dot.addEventListener('mouseover', function handleClick(event) {
      dot.setAttribute('style', selected_color);
    });
});
