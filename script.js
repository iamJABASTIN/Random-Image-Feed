const container = document.querySelector(".img-container");
const imageURL = "https://source.unsplash.com/random/";
const row = 10;

for (let i = 1; i <= row * 3; i++) {
    const img = document.createElement('img')
    img.src = `${imageURL}${randomSize()}`
    container.appendChild(img)
}

function randomSize() {
    return `${randomNum()}x${randomNum()}`
}

function randomNum() {
    return Math.floor(Math.random() * 10 + 300)
}


