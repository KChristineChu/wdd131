const d = new Date();
let year = d.getFullYear();
document.getElementById("currently").innerHTML = year;

let options = {
    dateStyle: "short",
    timeStyle: "short"
};

let shortDate = d.toLocaleString('en-US', options);

document.getElementById("lastModified").innerHTML = shortDate;


