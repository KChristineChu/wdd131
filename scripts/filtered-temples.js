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

//Array of temple objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370.jpg"

    },
    {
        templeName: "St. Louis Missouri",
        location: "St. Louis, Missouri, United States",
        dedicated: "1997, June 1",
        area: 58749,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-louis-missouri-temple/st.-louis-missouri-temple-5449.jpg"

    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-5018.jpg"
    },

];


function createTempleCard(temples) {
    document.querySelector(".container").innerHTML = "";

    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);

    });
}

function allTemples() {
    createTempleCard(temples);
}

function oldTemples() {
    let olderTemples = temple.filter(temples => temples.dedicated < 1900);
    createTempleCard(olderTemples);
}

function newTemples() {
    let newerTemples = temples.filter(temple => temple.dedicated > 2000);
    createTempleCard(newerTemples);
}

function largeTemples() {
    let bigTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(bigTemples);
}

function smallTemples() {
    let littleTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(littleTemples);
}


document.querySelector("#home").addEventListener("click", allTemples);
document.querySelector("#old").addEventListener("click", oldTemples);
document.querySelector("#new").addEventListener("click", newTemples);
document.querySelector("#large").addEventListener("click", largeTemples);
document.querySelector("#small").addEventListener("click", smallTemples);

allTemples();