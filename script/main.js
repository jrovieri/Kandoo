function showOrHideDisplay (card) {
    if (card.style.display == "block"){
        card.style.display = "none";
    } else {
        card.style.display = "block";
    }
}

//settings menu button
const btnSettings = document.getElementById("btn-settings");
const lateralMenuRight = document.getElementById("lateral-menu-right");

btnSettings.addEventListener("click", function () {
    showOrHideDisplay(lateralMenuRight);
})