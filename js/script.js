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

// ==========================WEEK 9 and 10 ADD DELETE IN MY ARRAY ==================================================
// =========================== data.html =========== ARRAY for Submarine Data================

let submarines = [    //have created array for submarine objects, it is main dataset for data.html
    // added id because it is uniq to find/sort/delete/add
{
    "id": 1,
    "name": "Dugong",
    "subClass": "Scout",
    "tier": 1,
    "crew": 4,
    "danger": 4,
    "note": "Small starter submarine. It is simple, but crew must repair fast."
},

{
    "id": 2,
    "name": "Barsuk",
    "subClass": "Attack",
    "tier": 1,
    "crew": 5,
    "danger": 6,
    "note": "Cheap attack submarine. Good if captain accepts chaos."
},

{
    "id": 3,
    "name": "Humpback",
    "subClass": "Attack",
    "tier": 2,
    "crew": 6,
    "danger": 7,
    "note": "Balanced submarine with stronger fight mood and good team pressure."
},

{
    "id": 4,
    "name": "Orca",
    "subClass": "Scout",
    "tier": 2,
    "crew": 5,
    "danger": 5,
    "note": "Fast scout submarine. Useful when crew wants movement more than armor."
},

{
    "id": 5,
    "name": "Camel",
    "subClass": "Transport",
    "tier": 2,
    "crew": 7,
    "danger": 6,
    "note": "Transport submarine. Has space for cargo and for losing your friends."
},
];

// DO NOT CHANGE AND TOUCH============================
// copy of first array for reset button
let firstSubmarineArray = submarines.slice(); 

//was teached by practical 9 - Week 9
// [  https://tutors.dev/lab/setu-website-development-2/topic-09-JavaScript-9/book-01-Objects]

//---------------------------------------------------------------------------------------------
//========== Variabels that using only for total data section================================
let submarineTemplate = document.getElementById("submarineTemplate");
let submarineOutput = document.getElementById("submarineOutput");
let submarineForm = document.getElementById("submarineForm");
let submarineSearch = document.getElementById("submarineSearch");
let submarineSort = document.getElementById("submarineSort");
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
let resetSubmarineData = document.getElementById("resetSubmarineData");
let totalSubmarines = document.getElementById("totalSubmarines");
let averageDanger = document.getElementById("averageDanger");
let averageCrew = document.getElementById("averageCrew");
let mostDangerousSubmarine = document.getElementById("mostDangerousSubmarine");

// This checks that we are on data.html, because other pages do not have submarine template
if (submarineTemplate && submarineOutput && window.Handlebars) {
    // declare "submarineSource" as find template by id and take content as line
    const submarineSource = submarineTemplate.innerHTML // allow to change HTML [ .innerHTML ]
    // Create template for submarine cards. Same idea as crew cards but with another array
    // tah i did on main page.
    const submarineCardTemplate = Handlebars.compile(submarineSource);

//====================================================================================================
//====================================================================================================
//====================================================================================================
    const submarineStorageKey = "barotraumaSubmarines"; // name for localStorage, like small save file in browser

    // localStorage keeps my array even after page reload
    function saveSubmarines() {
        if (window.localStorage) {
            // found it in WEEK 10 lab 
            // and on this page as well
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
            window.localStorage.setItem(submarineStorageKey, JSON.stringify(submarines));
        }
    }

    // load saved array from browser, but if nothing saved it keeps my first array
    function loadSubmarines() {
        if (window.localStorage) {
            let savedSubmarines = window.localStorage.getItem(submarineStorageKey);

            if (savedSubmarines) {
                submarines = JSON.parse(savedSubmarines);
            }
        }
    }

    // this is calculated feature for assignment, it counts data from my array
    function updateSubmarineStats() {
        if (totalSubmarines && averageDanger && averageCrew && mostDangerousSubmarine) {
            if (submarines.length === 0) {
                totalSubmarines.textContent = "0";
                averageDanger.textContent = "0";
                averageCrew.textContent = "0";
                mostDangerousSubmarine.textContent = "None";
                return;
            }

            let dangerTotal = 0;
            let crewTotal = 0;
            let mostDangerous = submarines[0];

            submarines.forEach(function (submarine) {
                dangerTotal += submarine.danger;
                crewTotal += submarine.crew;

                if (submarine.danger > mostDangerous.danger) {
                    mostDangerous = submarine;
                }
            });

            totalSubmarines.textContent = submarines.length;
//average 
// [toFixed return text and not number because returning result into HTML as a text]            
            averageDanger.textContent = (dangerTotal / submarines.length).toFixed(1);
            averageCrew.textContent = (crewTotal / submarines.length).toFixed(1);
            mostDangerousSubmarine.textContent = mostDangerous.name + " (" + mostDangerous.danger + "/10)";
        }
    }

 //====================================================================================================
 //====================================================================================================
 //==================================================================================================== 

    // This function is needed because every add, delete, search or sort must draw cards again
    function renderSubmarines() {
        let searchText = "";
        let sortValue = "nameAsc";

        if (submarineSearch) {
            //trim here is to delete space and to lowecase to search.
            //like no difference between upper or lower 
            searchText = submarineSearch.value.trim().toLowerCase();
        }

        if (submarineSort) {
            sortValue = submarineSort.value;
        }


        //=-========REFERENCE-===========
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#:~:text=array%20is%20returned.-,Description,included%20in%20the%20new%20array.
        //  it only makes list for screen
        let visibleSubmarines = submarines.filter(function (submarine) {
            let nameText = submarine.name.toLowerCase();
            let classText = submarine.subClass.toLowerCase();

            return nameText.includes(searchText) || classText.includes(searchText);
        });

        // sort is here for changing order on screen, so user can check data easier
        // so this function because it is not deleting something from array
        // it is just showing what is in filter 
        visibleSubmarines.sort(function (firstSubmarine, secondSubmarine) {
            if (sortValue === "nameAsc") {
                return firstSubmarine.name.localeCompare(secondSubmarine.name);
            } else if (sortValue === "nameDesc") {
                return secondSubmarine.name.localeCompare(firstSubmarine.name);
            } else if (sortValue === "crewAsc") {
                return firstSubmarine.crew - secondSubmarine.crew;
            } else {
                return secondSubmarine.crew - firstSubmarine.crew;
            }
        });


        //=================================================
        const submarineCards = submarineCardTemplate({
            "submarines": visibleSubmarines,
            "hasSubmarines": visibleSubmarines.length > 0
        }); // getting my array "submarines" and put in html

        submarineOutput.innerHTML = submarineCards; // deployment for my data page HTML through inner
        updateSubmarineStats();
    }

    if (submarineForm) {
        // submit is used because this is real form for adding new object to array
        submarineForm.addEventListener("submit", function (event) {
            event.preventDefault(); // to avoid reloading of my page 
            // found in https://www.w3schools.com/Jsref/event_preventdefault.asp

            let newSubmarine = {
                "id": Date.now(),
                "name": document.getElementById("subName").value.trim(),
                "subClass": document.getElementById("subClass").value.trim(),
                "tier": Number(document.getElementById("subTier").value),
                "crew": Number(document.getElementById("subCrew").value),
                "danger": Number(document.getElementById("subDanger").value),
                "note": document.getElementById("subNote").value.trim()
            };

            submarines.push(newSubmarine); // put new object in my array, after that render shows it
            submarineForm.reset(); // clear form because object already was added
            saveSubmarines(); // save after add, so reload will not delete new card
            renderSubmarines();
        });
    }

    if (resetSubmarineData) {
        // reset brings back first data, because user can delete or add too much during testing
        resetSubmarineData.addEventListener("click", function () {

            submarines = firstSubmarineArray.slice(); //slice makes new copie of the array.

            if (submarineSearch) {
                submarineSearch.value = "";
            }

            if (submarineSort) {
                submarineSort.value = "nameAsc";
            }

            saveSubmarines();
            renderSubmarines();
        });
    }

//====================DELETE DELETE DELETE DELTE =====================================================
    // click is on output because delete buttons are created by Handlebars after page loads
    submarineOutput.addEventListener("click", function (event) {
        if (event.target.classList.contains("deleteSubmarineButton")) {
            //event.target element that I have just clicked. CLICKED because before was 
            //when I only pointed on text
            let idToDelete = Number(event.target.dataset.id);
            // delete uses id because two submarines can have same name
            submarines = submarines.filter(function (submarine) {
                // If it DOESN`T contain id it is staying in the array
                //If submarine has the same value as button delete than this submarine doesnt adding in new array
                return submarine.id !== idToDelete;
            });
//render
            saveSubmarines(); // save after delete, so deleted card will stay deleted after reload
            renderSubmarines();
        }
    });

    if (submarineSearch) {
        submarineSearch.addEventListener("input", renderSubmarines);
    }

    if (submarineSort) {
        submarineSort.addEventListener("change", renderSubmarines);
    }

    loadSubmarines();
    renderSubmarines();
}
//some information material I took for themes above from: 
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
