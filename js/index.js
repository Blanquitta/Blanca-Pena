//Create a footer element
const aFooter = document.createElement('FOOTER');
aFooter.className = "footer";
aFooter.setAttribute("id", "myfooter");
document.body.appendChild(aFooter);
console.log(aFooter);

//Get the current year
var today = new Date();
var thisYear = today.getFullYear();
console.log(thisYear);

//find the added footer element
var newFooter = document.querySelector("footer");
console.log(newFooter);

//create the copyright
var aCopyright = document.createElement("p");
const copyrightSymbol = '\u00A9'
var copyrightText = copyrightSymbol + "Blanca Lilian Pena" + thisYear;
aCopyright.innerHTML = copyrightText;
console.log(aCopyright);

//Append copyright to footer
newFooter.appendChild(aCopyright);
console.log(newFooter);

//skills section - list of technical skills
const skills = ["computer programming", "database", "access", "powerpoint", "excell", " visualbasic", "c++"];
console.log(skills);

//find the skills section and unordered list
const skillsSection = document.querySelector("#skills-section");
console.log(skillsSection);
var skillsList = document.getElementById("skills-list");
console.log(skillsList);

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.innerText = skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);
}
//callback for remove buttom
function onRemoveButton(event) {
    console.log("Remove");
    const entry = event.target.parentNode; entry.remove();

    const messageSection = document.getElementById
        ("Message")
    const messageList = messageSection.
        getElementsByTagName("li");
    console.log(messageList);
    console.log(messageList.length);
    if (messageList.length === 0) {
        messageSection.hidden = true;
    }
}
//callback for submit
function onformSubmit(event) {
    console.log({ event });
    event.preventDefault();

    const data = new FormData(event.target);
    console.log(data);

    const usersName = data.get("usersName");
    const email = data.get("usersEmail");
    const usersMessage = data.get("usersMessage");
    console.log(usersName);
    console.log(email);
    console.log(usersMessage);

    //Display message beneath message section
    const messageSection = document.getElementById("message");
    const messageList = messageSection.getElementsByTagName("ul");
    console.log(messageList);

    //diplay message section
    messageSection.hidden = false;

    const newMessage = document.createElement("LI");
    const newString = `<a href = "mailto:${email}">${usersName}</a>\n
    <span>${usersMessage} </span>`;
    console.log(newString);
    newMessage.innerHTML = newString;

    //Add a remove button
    const removeButton = document.createElement("BUTTON");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("id", "removeButtonId");
    removeButton.addEventListener("click", onRemoveButton);
    console.log(removeButton);

    //Add remove buttom
    newMessage.appendChild(removeButton);

    //Add message
    messageList[0].appendChild(newMessage);

}
const messageForm = document.querySelector("[name='leave_message']");
console.log(messageForm);
messageForm.addEventListener("submit", onformSubmit);

// Get repositories from github
fetch("https://api.github.com/users/Blanquitta/repos")
    .then((res) => {
        return res.json();

    })
    .then((repositories) => {

        //TODO: add repositories to DOM 
        console.log("repositories:", repositories);
        //DOM selectors 
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");
         console.log({projectSection, projectList})
        // loop repositories array
        for (let i = 0; i < repositories.length; i++) {
            // get specific data
            const project = repositories[i].name;
            const link = repositories [i].html_url
            console.log(project)
            console.log(link);
            // create DOM Elements
            const li = document.createElement("li");
        const li2 = document.createElement("a");
        li2.href = link 
            //Add DOM element to the page
            li.innerText = project;
            li2.textContent = link
            projectList.appendChild(li);
            projectList.appendChild(li2);
            


        }


    })
    .catch((error) => {
        // add error to DOM 
        console.log(error);
    }
    )