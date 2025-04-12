//hamburger menu
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

//Set modified date and time
let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

//Array of tours
const tours = [
    {
        location: "Great Britain",
        numberOfDays: 8,
        image: "images/london.webp"
    },

    {
        location: "France",
        numberOfDays: 9,
        image: "images/France.webp"
    },

    {
        location: "Greece",
        numberOfDays: 9,
        image: "images/greece.webp"
    },

    {
        location: "Germany",
        numberOfDays: 8,
        image: "images/germany.webp"
    },

    {
        location: "Ireland",
        numberOfDays: 5,
        image: "images/ireland.webp"
    },

    {
        location: "Italy",
        numberOfDays: 8,
        image: "images/italy.webp"
    },

    {
        location: "Belgium",
        numberOfDays: 4,
        image: "images/belgium.webp"
    },

    {
        location: "Switzerland",
        numberOfDays: 5,
        image: "images/switzerland.webp"
    },

    {
        location: "Spain",
        numberOfDays: 6,
        image: "images/spain.webp"
    },
];

function createTourCard(tours) {
    document.querySelector(".container2").innerHTML = "";

    tours.forEach(tour => {
        let card = document.createElement("section");
        let location = document.createElement("p");
        let numberOfDays = document.createElement("p");
        let image = document.createElement("img");

        location.innerHTML = `<span class="label">Location: </span> ${tour.location}`;
        numberOfDays.innerHTML = `<span class="label">Number of Days: </span>${tour.numberOfDays}`;
        image.classList.add("tour-img");
        image.setAttribute("src", tour.image);
        image.setAttribute("alt", `${tour.location}`);
        image.setAttribute("loading", "lazy");

        card.appendChild(location);
        card.appendChild(numberOfDays);
        card.appendChild(image);

        document.querySelector(".container2").appendChild(card);
    });
}


function allTours() {
    createTourCard(tours);
}

function shortTours() {
    let shortTours = tours.filter(tour => tour.numberOfDays < 7);
    createTourCard(shortTours);
}

function longTours() {
    let longTours = tours.filter(tour => tour.numberOfDays >= 7);
    createTourCard(longTours);
}

document.querySelector("#allTours").addEventListener("click", allTours);
document.querySelector("#shortTours").addEventListener("click", shortTours);
document.querySelector("#longTours").addEventListener("click", longTours);
allTours();

//local storage
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("signUpCount", count);
document.querySelector(".signUpCount").textContent = count;
