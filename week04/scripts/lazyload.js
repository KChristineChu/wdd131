let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("currently").textContent = myYear;

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;