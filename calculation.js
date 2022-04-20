// Universal Materials
var gold, silver;
// Tier-Specfic Materials
var guardian_stone, destruction_stone, leapstone, shard, fusion_material;
// Debugging Variables
var successes, fails;

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

function progressHone(start, end, type) {
    let chance = 0;
    let bonus = 0;
    let artisan = 0;
    while (start < end) {
        // Base chance
        let base_chance = findChance(document.getElementById("tier").value, parseInt(start));
        chance = base_chance;
        // Bonus chance on fails
        chance += bonus;

        tier = document.getElementById("tier").value;
        increaseMaterials(tier, start, type);

        if (artisan >= 100) {
            start++;
            bonus = 0;
            artisan = 0;
            printTerminal(`Yikes.. You hit pity! Gear level is now: ${start}`);
            continue;
        }
        // VERY TEMPORARY EXAMPLE CASE, NO IMPLEMENTATION OF ACTUAL CHANCE NOR MATERIAL YET
        if (randomInt() <= chance) {
            successes++;
            // Increasing "item level"
            start++;
            // Resetting chance bonus
            bonus = 0;
            // Resetting Artisan's energy
            artisan = 0;
            printTerminal(`Success! Honed with ${chance.toFixed(2)}% chance! New gear level: +${start}!`);
        }
        else {
            fails++;
            // Increasing bonus, stacking with each fail
            bonus += base_chance * 0.1;
            // Increasing Artisan's energy based on current chance
            artisan = artisan + (chance * 0.465);
            printTerminal(`Failed at gear level: +${start} with a ${chance.toFixed(2)}% chance!`);
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

    successes = 0;
    fails = 0;

    // Binding variables to document select forms
    var head_start = parseInt(document.getElementById("head_start").value);
    var head_end = parseInt(document.getElementById("head_end").value);
    var shoulders_start = parseInt(document.getElementById("shoulders_start").value);
    var shoulders_end = parseInt(document.getElementById("shoulders_end").value);
    var chest_start = parseInt(document.getElementById("chest_start").value);
    var chest_end = parseInt(document.getElementById("chest_end").value);
    var hands_start = parseInt(document.getElementById("hands_start").value);
    var hands_end = parseInt(document.getElementById("hands_end").value);
    var legs_start = parseInt(document.getElementById("legs_start").value);
    var legs_end = parseInt(document.getElementById("legs_end").value);
    var weapon_start = parseInt(document.getElementById("weapon_start").value);
    var weapon_end = parseInt(document.getElementById("weapon_end").value);

    // Run main portion of program
    progressHone(head_start, head_end, "armor");
    progressHone(shoulders_start, shoulders_end, "armor");
    progressHone(chest_start, chest_end, "armor");
    progressHone(hands_start, hands_end, "armor");
    progressHone(legs_start, legs_end, "armor");
    progressHone(weapon_start, weapon_end, "weapon");

    console.log(`Successes: ${successes}`)
    console.log(`Fails: ${fails}`)
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