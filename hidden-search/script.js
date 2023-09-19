const btn = document.querySelector(".btn");
const search = document.querySelector(".search");

btn.onclick = function () {
    if (search.classList.contains("active")) search.classList.remove("active");
    else search.classList.add("active");
};

search.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let query = e.target.value;
        if (!query) {
            alert("Please enter a query");
            return;
        }
        query = query.split(" ").join("+");
        console.log("query: " + query);
        window.open("https://www.google.com/search?q=" + query);
    }
});
