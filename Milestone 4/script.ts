const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplayElement = document.getElementById("resume-display") as HTMLDivElement;
form.addEventListener("submit", (event : Event) =>{
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const resumeHTML = `
    <h1><b>Editable Resume</b></h1>
    <h3>Personal Information</h3>
    <p>sName: <span contenteditable="true">${name}</span></p>
    <p>Email: <span contenteditable="true">${email}</span></p>
    <p>Phone: <span contenteditable="true">${phone}</span></p>
    <p>LinkedIn: <span contenteditable="true">${linkedin}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">Education: ${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable="true">Experience: ${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">Skills: ${skills}</p>
    `;
    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
    console.error('Resume display element Not found');
    }
    });