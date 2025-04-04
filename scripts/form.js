let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];


let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);
document.querySelector(".reviewCount").textContent = count;



/*const count = document.querySelector(".reviewCount");
let numreviews = Number(localStorage.getItem("reviewCount-ls"));

if (numreviews !== 0) {
    count.textContent = numreviews;
} else {
    count.textContent = `Thank you for your review.`;
}
numreviews++;
localStorage.setItem("reviews-ls", numreviews);
*/




