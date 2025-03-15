const hambutton = document.querySelector("#menu");
const nav = document.querySelector(".header-nav");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;