const container = document.querySelector("#container");

document.addEventListener("keydown", (event) => {
    let values = {
        keyCode: event.keyCode,
        key: event.key,
        code: event.code,
    };
    let allDivs = [];
    Object.entries(values).forEach(([key, value]) => {
        const div = document.createElement("div");
        div.className = "key";
        div.innerHTML = value === " " ? "Space" : value;
        const text = document.createElement("small");
        text.innerHTML = key;
        div.appendChild(text);
        allDivs.push(div);
    });
    container.replaceChildren(...allDivs);
    console.log(event);
});
