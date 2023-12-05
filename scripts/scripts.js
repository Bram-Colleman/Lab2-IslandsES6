let islands = [];
let savedIslands = [];
let emojis = ["😄","😍","😎","🥵","😈"]


function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function addIsland() {
    let i = document.createElement("span");
    i.style.fontSize = "3rem";
    i.innerText = emojis[Math.round(getRandomNumber(1,emojis.length-1))];
    
    let hz = (Math.random() * (document.querySelector(".canvas").clientWidth));
    let vt = (Math.random() * (document.querySelector(".canvas").clientHeight));
    
    i.style.top = vt + "px";
    i.style.left = hz + "px";
    
    document.querySelector(".canvas").appendChild(i);
    islands.push(i);
}

function saveIslands() {
    savedIslands = islands;
}

function loadIslands() {
    clearIslands();
    savedIslands.forEach(island => {
        document.querySelector(".canvas").appendChild(island)
    });
    islands = savedIslands;
}

function clearIslands() {
    document.querySelector(".canvas").innerHTML = "";
    islands = [];
}

document.getElementById("addIsland").onclick = function() {addIsland()};
document.getElementById("saveIslands").onclick = function() {saveIslands()};
document.getElementById("loadIslands").onclick = function() {loadIslands()};
document.getElementById("clearIslands").onclick = function() {clearIslands()};