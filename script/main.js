//settings menu button
const btnSettings = document.getElementById("btn-settings");
const lateralMenuRight = document.getElementById("lateral-menu-right");

btnSettings.addEventListener("click", function () {
    if (lateralMenuRight.style.display == "none"){
        lateralMenuRight.style.display = "block";
    } else {
        lateralMenuRight.style.display = "none";
    }
})