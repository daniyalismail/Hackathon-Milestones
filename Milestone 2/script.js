var form = document.getElementById("resume-form");
var resumedisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("linkedin").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n    <h1><b>Resume</b></h1>\n    <h3>Personal Information</h3>\n    <p>Name: ".concat(name, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <p>LinkedIn: ").concat(linkedin, "</p>\n\n    <h3>Education</h3>\n    <p>Education: ").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>Experience: ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>Skills: ").concat(skills, "</p>\n    ");
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element Not found');
    }
});
