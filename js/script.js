// ========= Section 1 index.html ===============================================
let text = "Barotrauma is a 2D co-op submarine simulator – in space, with survival horror and RPG elements. Steer your submarine, complete missions, fight monsters, fix leaks, operate machinery, man the guns and craft items, and stay alert: danger in Barotrauma doesn’t announce itself!";
let index = 0; //number of letter 0 because index starts from 0
let speed = 70; // 70 means mileseconds  = 0.07 ms

// just take a function 
function typeText() {
    if (index < text.length) { // say that keep going until index != || < text.lenght 
        document.getElementById("typeEfect").textContent += text[index]; // took element by id and add .textContent
        index++; // say to index to go on next letter was 0 became 1 was 1 became 2 etc
        setTimeout(typeText, speed); // says to use declared speed 
    }
}

typeText(); // call my function. Because before we only declared but never called

// ============================================================================