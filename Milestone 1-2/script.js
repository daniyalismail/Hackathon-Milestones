var togglebutton = document.getElementById("button");
var skills = document.getElementById("skills");
togglebutton.addEventListener("click", function () {
    if (skills.style.display == "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});