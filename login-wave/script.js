const labels = document.querySelectorAll("#loginForm label");
const toggleBtns = document.querySelectorAll("a");
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".register");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join("");
});

toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (loginForm.classList.contains("show")) {
            // Hide login form and show signup form
            loginForm.classList.remove("show");
            signupForm.classList.add("show");
        } else {
            // Hide signup form and show login form
            signupForm.classList.remove("show");
            loginForm.classList.add("show");
        }
    });
});
