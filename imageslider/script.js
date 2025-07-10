const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imagecontainerEl = document.querySelector(".image-container");

const imgCountEl = document.querySelectorAll("img");

let timeOut;
let currentImg = 1;
nextEl.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeOut);
    updateImg();
});

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeOut);
    updateImg();
});

function updateImg() {
    if (currentImg > imgCountEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgCountEl.length;
    }
    const imageWidth = imgCountEl[0].clientWidth;

    imagecontainerEl.style.transform = `translateX(-${(currentImg - 1) * imageWidth}px)`;
    timeOut = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 4000);
}
updateImg();