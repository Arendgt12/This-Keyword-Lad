//The Mutli-Button Highlight
const buttons = document.querySelectorAll('.color-btn');

function changeColor() {
    this.style.backgroundColor = "yellow";
}

//Loop
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
});