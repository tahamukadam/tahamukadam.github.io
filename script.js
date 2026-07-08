const text = [
    "Full Stack Developer",
    "Cloud Computing Learner",
    "Python Developer",
    "Web Designer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = text[i];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            current.substring(0, j++);
    } else {
        document.getElementById("typing").textContent =
            current.substring(0, j--);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 60 : 120);
}

type();

const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});