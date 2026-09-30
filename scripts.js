const container = document.querySelector(".container");
const button = document.querySelector(".resetBtn");

function grid(size) {
    container.replaceChildren();

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.style.flex = `0 0 calc(100%/ ${size})`;
        square.style.aspectRatio = "1";
        square.style.backgroundColor = "grey";
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
        container.appendChild(square);
    }
}

 button.addEventListener("click", () => {
        let size = prompt("How many numbers of squares per side would you like?")

        if (size <= 100 ) {
          grid(size);
        } else alert("Maximum user input limit is 100!");
      });
      
container.before(button);
grid(16);




