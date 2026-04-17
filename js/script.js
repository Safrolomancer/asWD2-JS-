// ========= Section 1 index.html ============== typeText =================================
let text = "Barotrauma is a cooperative survival game where players travel in a submarine under the frozen ocean of Jupiter’s moon Europa. In the game, you need to work as a team, control different systems in the submarine, repair damage, and survive dangerous sea creatures and other threats. The game is known for its tense atmosphere, teamwork, and unexpected situations.";
let index = 0; //number of letter 0 because index starts from 0
let speed = 30; // 70 means mileseconds  = 0.07 ms

// just take a function 
function typeText() {
    if (index < text.length) { // say that keep going until index != || < text.lenght 
        document.getElementById("typeEffect").textContent += text[index]; // took element by id and add .textContent
        index++; // say to index to go on next letter was 0 became 1 was 1 became 2 etc
        setTimeout(typeText, speed); // says to use declared speed 
    }
}

typeText(); // call my function. Because before we only declared but never called

// ============================================================================
// =========================== Section 3 index.html =========== Accordion for Warning================
// As a guidence I have been using other source. Reference provided to follow fairnes rules
// Reference: https://itchief.ru/javascript/accordion

let show = document.getElementById("showButton"); 
// I am not declearing smth new, I say to fing alredy existing 
let hide = document.getElementById("hideButton");
let textWarning = document.getElementById("textWarning");

// I had a id "textWarning" and I say to add class "open" o my class "content"
// in my div. So and in css I created format for "open" 
// and we are using add && remove function when show or hide will be clicked 
show.addEventListener("click", function (){
    textWarning.classList.add("open");
    // action
});

hide.addEventListener("click", function (){
    textWarning.classList.remove("open");
    //action
});
// ============================================================================
// =========================== Section 2 index.html =========== ARRAY for Crew Cards================

const crew = [    //have created array for nickanmes, mages and roles 
{ 
    "nickname": "Safrolomancer",
    "role": "Captain",
    "image": "/images/logo.png"
},
{ 
    "nickname": "ChiWaWa",
    "role": "Medic",
    "image": "/images/logo.png"
},
{ 
    "nickname": "Registem",
    "role": "Engineer",
    "image": "/images/logo.png"
},
];

// declare "source" as find template by id and take content as line
const source = document.getElementById("tookWeek6").innerHTML // allow to change HTML [ .innerHTML ]
// Create my text in function that can be called
const template = Handlebars.compile(source);
const act = template(crew); // getting my array "Crew" and put in html

document.getElementById("crewoutput").innerHTML = act; // deployment for my HTMKL