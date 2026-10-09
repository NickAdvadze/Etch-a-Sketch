const mainContainer = document.querySelector("#container");
const container = document.createElement("div");
container.id = "divs";
const button = document.createElement("button");
button.textContent = "Change pixel resolution";
mainContainer.appendChild(button);
mainContainer.appendChild(container);

const getRandomColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
        return `hsl(${randomHue}, 100%, 50%)`;
};

function createGrid(x) {
    container.innerHTML = "";
    const sizeInPercent = 100 / x;
    for (let i=0; i < x; i++) {
        for (let j=0; j < x; j++) {
            let div = document.createElement('div');
            div.style.height = `${sizeInPercent}%`;
            div.style.width = `${sizeInPercent}%`;

            div.addEventListener('mouseenter', () => {
                div.style.background = getRandomColor();
            });
            div.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    div.style.backgroundColor = "";
            }, 1000);
        });
        container.appendChild(div);
        };
        
    };
};
createGrid(16);

button.addEventListener("click", () => {
    let x = parseInt(prompt('please enter a value for matrix: '));
    if (isNaN(x) || x < 0 || x > 100) {
            alert('Enter values between 1-100');
            x = 16;
        };
    container.innerHTML = '';
    createGrid(x);
});