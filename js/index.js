//Create a footer element
const aFooter = document.createElement('FOOTER');
aFooter.className ="footer";
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
var aCopyright =document.createElement("p");
const copyrightSymbol = '\u00A9'
var copyrightText = copyrightSymbol + "Blanca Lilian Pena" + thisYear;
aCopyright.innerHTML=copyrightText;
console.log(aCopyright);

//Append copyright to footer
newFooter.appendChild(aCopyright);
console.log(newFooter);

//skills section - list of technical skills
const skills =["database", "access", "powerpoint", "excell", " visualbasic", "c++"];
console.log(skills);

//find the skills section and unordered list
const skillsSection = document.querySelector("skills-section");
console.log(skillsSection);
var skillsList = document.getElementById("skills-list");
console.log(skillsList);

for (let i = 0; i<skills.length; i++)
{
    var skill =document.createElement("li");
    skill.innerText = skills[i];
    console.log(skill);
    skillsList.appendChild(skill);
    console.log(skillsList);
}
