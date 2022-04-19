// Universal Materials
var gold, silver;
// Tier-Specfic Materials
var guardian_stone, destruction_stone, leapstone, shard, fusion_material;

let btnCalculate = document.createElement("button");
btnCalculate.innerHTML = "Calculate";
btnCalculate.type = "submit";
btnCalculate.onclick = function () {
    calculate();
}
document.body.appendChild(btnCalculate);

// Creates a random integer from 1 to 100, used for creating my randomc hance
function randomInt() {
    return parseInt(Math.random() * (100) + 1);
}

function progressHone(start, end) {
    while (start < end) {
        // VERY TEMPORARY EXAMPLE CASE, NO IMPLEMENTATION OF ACTUAL CHANCE NOR MATERIAL YET
        if (randomInt() <= chance(document.getElementById("tier").value, parseInt(start))) {
            start++;
            printTerminal("Success! Gear level is now: " + start);
        }
        else {
            console.log(`failed at: ${start}`)
            printTerminal("Failed at gear level: " + start);
        }
    }
}

var terminal = document.getElementById("terminal");
function printTerminal(string) {
    if (terminal.value.length > 2000) {
        terminal.value = terminal.value.slice(100);
        var lines = terminal.value.split('\n');
        lines.splice(0,1);
        terminal.value = lines.join('\n');
    }

    terminal.value = terminal.value + string + '\n';
    terminal.scrollTop = terminal.scrollHeight;
}

function calculate() {
    // Resetting variables
    terminal.value = "";
    gold = 0;
    silver = 0;
    guardian_stone = 0;
    destruction_stone = 0;
    leapstone = 0;
    shard = 0;
    fusion_material = 0;

    // Binding variables to document select forms
    var tier = document.getElementById("tier").value
    var head_start = document.getElementById("head_start").value;
    var head_end = document.getElementById("head_end").value;
    var shoulders_start = document.getElementById("shoulders_start").value;
    var shoulders_end = document.getElementById("shoulders_end").value;
    var chest_start = document.getElementById("chest_start").value;
    var chest_end = document.getElementById("chest_end").value;
    var hands_start = document.getElementById("hands_start").value;
    var hands_end = document.getElementById("hands_end").value;
    var legs_start = document.getElementById("legs_start").value;
    var legs_end = document.getElementById("legs_end").value;
    var weapon_start = document.getElementById("weapon_start").value;
    var weapon_end = document.getElementById("weapon_end").value;

    // Run main portion of program
    progressHone(head_start, head_end);
    progressHone(shoulders_start, shoulders_end);
    progressHone(chest_start, chest_end);
    progressHone(hands_start, hands_end);
    progressHone(legs_start, legs_end);
    progressHone(weapon_start, weapon_end);
}



// TESTING CHANCE MANUALLY
/*
for (let i = 0; i < 100; i++) {
    let random = randomInt();
    if (random < 5) {
        console.log(random);
    } 
}

console.log(chance('tier1', 19));
fails = 0;
successes = 0;
for (let i = 0; i < 100000; i++) {
    if (randomInt() <= chance('tier1', 19)) {
        successes++;
    }
    else {
        fails++;
    }
}
console.log(`Successes: ${successes}`)
console.log(`Fails: ${fails}`)
console.log(`Success Rate: ${successes / (successes + fails)}%`)
*/