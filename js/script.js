// ========= Section 1 index.html ============== typeText =================================
let text = "Barotrauma is a cooperative survival game where players travel in a submarine under the frozen ocean of Jupiter's moon Europa. In the game, you need to work as a team, control different systems in the submarine, repair damage, and survive dangerous sea creatures and other threats. The game is known for its tense atmosphere, teamwork, and unexpected situations.";
let index = 0; //number of letter 0 because index starts from 0
let speed = 30; // 70 means mileseconds  = 0.07 ms
let typeEffect = document.getElementById("typeEffect");

// just take a function 
function typeText() {
    if (typeEffect && index < text.length) { // say that keep going until index != || < text.lenght 
        typeEffect.textContent += text[index]; // took element by id and add .textContent
        index++; // say to index to go on next letter was 0 became 1 was 1 became 2 etc
        setTimeout(typeText, speed); // says to use declared speed 
    }
}

typeText(); // call my function. Because before we only declared but never called

// ============================================================================
// =========================== Section 2 index.html =========== Reactor Check================

let reactorButton = document.getElementById("reactorButton");
let reactorStatus = document.getElementById("reactorStatus");
let reactorBar = document.getElementById("reactorBar");

// When the button is clicked, JavaScript creates a random reactor power value.
// Extra check needed because this JS file is also loaded on about.html and data.html
if (reactorButton && reactorStatus && reactorBar) {
    reactorButton.addEventListener("click", function () {
        let reactorPower = Math.floor(Math.random() * 46) + 55;

        // Change the green bar width to visually show the reactor power.
        reactorBar.style.width = reactorPower + "%";

        // Change the text depending on the random power value.
        if (reactorPower >= 85) {
            reactorStatus.textContent = "Stable output: " + reactorPower + "%. Engines are ready.";
        } else if (reactorPower >= 70) {
            reactorStatus.textContent = "Acceptable output: " + reactorPower + "%. Keep checking the fuel rods.";
        } else {
            reactorStatus.textContent = "Unstable output: " + reactorPower + "%. Engineer required.";
        }
    });
}

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
// Extra check needed because this JS file is also loaded on about.html and data.html
if (show && hide && textWarning) {
    show.addEventListener("click", function (){
        textWarning.classList.add("open");
        // action
    });

    hide.addEventListener("click", function (){
        textWarning.classList.remove("open");
        //action
    });
}
// ============================================================================
// =========================== Section 2 index.html =========== ARRAY for Crew Cards================

const crew = [    //have created array for nickanmes, mages and roles 
{ 
    "nickname": "ChiWaWa",
    "role": "Medic-Clown",
    "image": "images/ChiWaWa.png",
    "info": "A quack doctor who starts crying when he runs out of morphine. He only treats patients when he's in the mood."
},

{ 
    "nickname": "Safrolomancer",
    "role": "Coalition Admiral",
    "image": "images/Safrolo.png",
    "info": "The team captain is mentally unstable. He starts to panic when he doesn't have a firearm with him."
},

{ 
    "nickname": "Registem",
    "role": "Veteran Coalition Mechanic",
    "image": "images/Registem.png",
    "info": "A mechanic who serves as a dispatcher, medic, captain, engineer, security officer, pharmacist, electrician, prisoner, and assistant. Earns 4 credits for missions worth 9,000 credits"
},
];

let crewTemplate = document.getElementById("tookWeek6");
let crewOutput = document.getElementById("crewoutput");

// Extra check needed because this JS file is also loaded on about.html and data.html
if (crewTemplate && crewOutput && window.Handlebars) {
    // declare "source" as find template by id and take content as line
    const source = crewTemplate.innerHTML // allow to change HTML [ .innerHTML ]
    // Create my text in function that can be called
    const template = Handlebars.compile(source);
    const act = template(crew); // getting my array "Crew" and put in html

    crewOutput.innerHTML = act; // deployment for my HTMKL
}

// ==========================WEEK 9 ADD DELETE IN MY ARRAY ==================================================
// =========================== data.html =========== ARRAY for Submarine Data================

const submarines = [    //have created array for submarine objects, it is main dataset for data.html
{
    "name": "Dugong",
    "subClass": "Scout",
    "tier": 1,
    "crew": 4,
    "danger": 4,
    "note": "Small starter submarine. It is simple, but crew must repair fast."
},

{
    "name": "Barsuk",
    "subClass": "Attack",
    "tier": 1,
    "crew": 5,
    "danger": 6,
    "note": "Cheap attack submarine. Good if captain accepts chaos."
},

{
    "name": "Humpback",
    "subClass": "Attack",
    "tier": 2,
    "crew": 6,
    "danger": 7,
    "note": "Balanced submarine with stronger fight mood and good team pressure."
},

{
    "name": "Orca",
    "subClass": "Scout",
    "tier": 2,
    "crew": 5,
    "danger": 5,
    "note": "Fast scout submarine. Useful when crew wants movement more than armor."
},

{
    "name": "Camel",
    "subClass": "Transport",
    "tier": 2,
    "crew": 7,
    "danger": 6,
    "note": "Transport submarine. Has space for cargo and for losing your friends."
},
];

//was teached by practical 9 - Week 9
// [  https://tutors.dev/lab/setu-website-development-2/topic-09-JavaScript-9/book-01-Objects]

let submarineTemplate = document.getElementById("submarineTemplate");
let submarineOutput = document.getElementById("submarineOutput");

// This checks that we are on data.html, because other pages do not have submarine template
if (submarineTemplate && submarineOutput && window.Handlebars) {
    // declare "submarineSource" as find template by id and take content as line
    const submarineSource = submarineTemplate.innerHTML // allow to change HTML [ .innerHTML ]
    // Create template for submarine cards. Same idea as crew cards but with another array
    // tah i did on main page.
    const submarineCardTemplate = Handlebars.compile(submarineSource);
    const submarineCards = submarineCardTemplate(submarines); // getting my array "submarines" and put in html

    submarineOutput.innerHTML = submarineCards; // deployment for my data page HTML through inner
}
