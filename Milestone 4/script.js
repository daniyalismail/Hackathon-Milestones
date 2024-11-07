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
    var resumeHTML = "\n    <h1><b>Editable Resume</b></h1>\n    <h3>Personal Information</h3>\n    <p>sName: <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n    <p>Phone: <span contenteditable=\"true\">").concat(phone, "</span></p>\n    <p>LinkedIn: <span contenteditable=\"true\">").concat(linkedin, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">Education: ").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable=\"true\">Experience: ").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">Skills: ").concat(skills, "</p>\n    ");
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume display element Not found');
    }
});
