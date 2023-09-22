const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

var url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${api_key}`;

async function getNewsData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to retrieve data from the API");
        }
        const newsData = await response.json();
        return newsData;
    } catch (error) {
        throw new Error(`An error occurred: ${error.message}`);
    }
}

getNewsData()
    .then((data) => {
        console.log(data);
        boxes.forEach((box, index) => {
            box.querySelector("h3").innerHTML = data.articles[index].title;
            box.querySelector("a").href = data.articles[index].url;
            box.querySelector("p").innerHTML = data.articles[index].description;
            box.style.backgroundImage = `linear-gradient(115deg, rgba(58, 58, 158, 0.8), rgba(136, 136, 206, 0.7)), url(${data.articles[index].urlToImage})`;
        });
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
