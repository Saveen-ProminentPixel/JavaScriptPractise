
const button = document.getElementById("new-page");

const newWindow = () => {
    window.open("hello.html");
};

button.addEventListener("click", newWindow);