const container = document.querySelector(".container");
const button = document.querySelector(".resetBtn");

function grid(size) {
    container.replaceChildren();

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.flex = `0 0 calc(100%/ ${size})`;
        square.style.aspectRatio = "1";
        square.style.backgroundColor = "rgb(88, 86, 86)";
        let alpha = .1;
        square.addEventListener("mouseover", () => {
        if (alpha < 1) {
            alpha =  Math.min(alpha + .1, 1);
            square.style.backgroundColor = randomRgbColor(alpha);
        }
    });
        container.appendChild(square);
    }
};

const randomRgbColor = (alpha) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = .1;
    return `rgba(${r}, ${g}, ${b}, ${alpha})` ;
};

button.addEventListener("click", () => {
    let size = prompt("How many numbers of squares per side would you like?")

    if (size <= 100 ) {
        grid(size);
    } else alert("Maximum user input limit is 100!");
});



      
console.log(randomRgbColor());
console.log(randomRgbColor());


container.before(button);
grid(16);

