const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

right.addEventListener("mouseenter", () => container.classList.add("hover-right"));
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"));

let count = 0;

const interval = setInterval(() => {
    if (container.classList.contains("hover-left")) {
        left.style.background = `url(ps${count % 5}.jpg)`;
        left.style.backgroundRepeat = "no-repeat";
        left.style.backgroundSize = "cover";
    } else if (container.classList.contains("hover-right")) {
        right.style.background = `url(xbox${count % 5}.jpg)`;
        right.style.backgroundRepeat = "no-repeat";
        right.style.backgroundSize = "cover";
    }
    count += 1;
}, 2000);
