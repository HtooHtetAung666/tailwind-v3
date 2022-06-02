let home = document.querySelector("#home");
let hobbies = document.querySelector("#hobbies");
let skills = document.querySelector("#skills");
let contact = doucment.querySelector("#contact");

home.addEventListener("click", navigateHome, false);

function navigateHome(e) {
    home.scrollIntoView();
}

hobbies.addEventListener("click", navigateHobbies, false);

function navigateHobbies(e) {
    hobbies.scrollIntoView();
}