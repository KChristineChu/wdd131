const hambutton = document.querySelector("#menu");
const navMenu = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    hambutton.classList.toggle("show");
});

let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;