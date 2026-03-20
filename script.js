function showMessage() {
    alert("Welcome to my portfolio!");
}

function copyEmail() {
    navigator.clipboard.writeText("dharanibaliga315@gmail.com");
    alert("Email copied to clipboard!");
}

window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY;

    links.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));

        if (
            section.offsetTop <= fromTop + 50 &&
            section.offsetTop + section.offsetHeight > fromTop + 50
        ) {
            link.style.color = "#38bdf8";
        } else {
            link.style.color = "white";
        }
    });
});
function showSectionsOnLoad() {
    const sections = document.querySelectorAll("section");
    sections.forEach(sec => {
        sec.classList.add("show");
    });
}

window.onload = showSectionsOnLoad;