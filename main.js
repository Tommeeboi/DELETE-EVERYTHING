const deleteFirst = document.getElementById("deleteFirst");

const delPopUp = document.getElementById("delPopUpBG");
const thingsToDeleteDiv = document.getElementById("thingsToDelete");
const ttdMainText = document.getElementById("ttdMainText");
const ttdDropdown = document.getElementById("ttdDropdown");

const personalDiv = document.getElementById("personalDiv");
const nonPersonalDiv = document.getElementById("nonPersonalDiv");
const everythingTTD = document.getElementById("everythingTTD");

const wtdV = document.getElementById("wtdV");

deleteFirst.onclick = function() {
    delPopUp.style.display = "block";
}

thingsToDeleteDiv.onclick = function() {
    if (ttdDropdown.style.display === "none") {
        wtdV.style.display = "none";
        ttdDropdown.style.display = "block";
    } else {
        wtdV.style.display = "block";
        ttdDropdown.style.display = "none";
    }
}

personalDiv.onclick = function() {
    ttdMainText.innerText = "Personal Stuff";
}

nonPersonalDiv.onclick = function() {
    ttdMainText.innerText = "Non-Personal Stuff";
}

everythingTTD.onclick = function() {
    ttdMainText.innerText = "EVERYTHING";
}

const whereToDeleteDiv = document.getElementById("whereToDelete");
const wtdMainText = document.getElementById("wtdMainText");
const wtdDropdown = document.getElementById("wtdDropdown");

const currentDiv = document.getElementById("currentDiv");
const allRegisteredDiv = document.getElementById("allRegisteredDiv");
const everythingWTD = document.getElementById("everythingWTD");

whereToDeleteDiv.onclick = function() {
    if (wtdDropdown.style.display === "none") {
        // wtdV.style.display = "none";
        wtdDropdown.style.display = "block";
    } else {
        // wtdV.style.display = "block";
        wtdDropdown.style.display = "none";
    }
}

currentDiv.onclick = function() {
    wtdMainText.innerText = "Current Drive";
}

allRegisteredDiv.onclick = function() {
    wtdMainText.innerText = "All Registered Drives";
}

everythingWTD.onclick = function() {
    wtdMainText.innerText = "EVERYTHING";
}