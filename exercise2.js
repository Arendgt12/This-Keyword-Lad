//The Data Attribute Reader
const swatches = document.querySelectorAll('.swatch');

function applyDataColor() {
    const selectedColor = this.dataset.color;
    
    this.style.backgroundColor = selectedColor;
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', applyDataColor);
});