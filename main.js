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
        wtdDropdown.style.display = "block";
    } else {
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


const DELETEEVERYTHING = document.getElementById("DELETEEVERYTHING");
const firstPart = document.getElementById("firstPart");
const secondPart = document.getElementById("secondPart");


const progressFull = document.getElementById("progressFull");
const percentage = document.getElementById("percentage");
const progressDesc = document.getElementById("progressDesc");

let progress = 0;

const progressArray = [
    "Finding drives...",
    "Granting permission...",
    "Separating program from file system...",
    "DELETING EVERYTHING..."
];

/*
Finding drives...
Granting permission...
Separating program from file system...
DELETING EVERYTHING...
*/
function increaseProgress() {
    progress++;

    progressFull.style.width = `${progress}%`;
    percentage.innerText = `${progress}%`;

    if (progress === 6) {
        progressDesc.innerText = progressArray[1];
    } else if (progress === 21) {
        progressDesc.innerText = progressArray[2];
    } else if (progress === 31) {
        progressDesc.innerText = progressArray[3];
    }

    setTimeout(() => {
        if (progress < 100) {
            increaseProgress();
        }
    }, 100);
}

DELETEEVERYTHING.onclick = function() {
    firstPart.style.display = "none";
    secondPart.style.display = "block";

    setTimeout(() => {
        increaseProgress();
    }, 1000);
}