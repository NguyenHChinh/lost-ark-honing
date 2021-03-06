// Universal Materials
var gold, silver;
// Tier-Specfic Materials
var guardian_stone, destruction_stone, leapstone, shard, fusion_material;
// Debugging Variables
var successes, fails, pities;

// Specific forms
var terminal = document.getElementById("terminal");
var output = document.getElementById("output");
var tier_select = document.getElementById("tier");
var start_select = document.getElementById("set_start");
var end_select = document.getElementById("set_end");
var head_start_select = document.getElementById("head_start");
var head_end_select  = document.getElementById("head_end");
var shoulders_start_select  = document.getElementById("shoulders_start");
var shoulders_end_select  = document.getElementById("shoulders_end");
var chest_start_select  = document.getElementById("chest_start");
var chest_end_select  = document.getElementById("chest_end");
var hands_start_select  = document.getElementById("hands_start");
var hands_end_select  = document.getElementById("hands_end");
var legs_start_select  = document.getElementById("legs_start");
var legs_end_select  = document.getElementById("legs_end");
var weapon_start_select  = document.getElementById("weapon_start");
var weapon_end_select  = document.getElementById("weapon_end");
var all_selects = [tier_select, start_select, end_select,
                   head_start_select, head_end_select,
                   shoulders_start_select, shoulders_end_select,
                   chest_start_select, chest_end_select,
                   hands_start_select, hands_end_select,
                   legs_start_select, legs_end_select,
                   weapon_start_select, weapon_end_select];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let btnAverage = document.createElement("button");
btnAverage.innerHTML = "Average of 1000 Runs";
btnAverage.type = "submit";
btnAverage.onclick = function () {
    disableInputs();
    averageRuns();
}
document.body.appendChild(btnAverage);

let btnSingleRun = document.createElement("button");
btnSingleRun.innerHTML = "Single Run";
btnSingleRun.type = "submit";
btnSingleRun.onclick = function () {
    disableInputs();
    singleRun();
}
document.body.appendChild(btnSingleRun);

// Creates a random integer from 1 to 100, used for creating my randomc hance
function randomInt() {
    return parseInt(Math.random() * (100) + 1);
}

function disableInputs() {
    btnSingleRun.disabled = true;
    btnAverage.disabled = true;
    btnSingleRun.className = "disabled";
    btnAverage.className = "disabled";

    for (let i = 0; i < all_selects.length; i++) {
        all_selects[i].disabled = true;
    }
}

function enableInputs() {
    btnSingleRun.disabled = false;
    btnAverage.disabled = false;
    btnSingleRun.className = "";
    btnAverage.className = "";

    for (let i = 0; i < all_selects.length; i++) {
        all_selects[i].disabled = false;
    }
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
            pities++;
            bonus = 0;
            artisan = 0;
            continue;
        }

        if (randomInt() <= chance) {
            successes++;
            // Increasing "item level"
            start++;
            // Resetting chance bonus
            bonus = 0;
            // Resetting Artisan's energy
            artisan = 0;
        }
        else {
            fails++;
            // Increasing bonus, stacking with each fail
            bonus += base_chance * 0.1;
            // Increasing Artisan's energy based on current chance
            artisan = artisan + (chance * 0.465);
        }
    }
}

// Asynchronous Version of progressHone
async function asyncProgressHone(start, end, type, specific) {
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
            pities++;
            bonus = 0;
            artisan = 0;
            printTerminal(`${specific} Armor: Yikes.. You hit pity! Gear level is now: ${start}`);
            continue;
        }

        if (randomInt() <= chance) {
            successes++;
            // Increasing "item level"
            start++;
            // Resetting chance bonus
            bonus = 0;
            // Resetting Artisan's energy
            artisan = 0;
            printTerminal(`${specific} Armor: Success! Honed with ${chance.toFixed(2)}% chance! New gear level: +${start}!`);
        }
        else {
            fails++;
            // Increasing bonus, stacking with each fail
            bonus += base_chance * 0.1;
            // Increasing Artisan's energy based on current chance
            artisan = artisan + (chance * 0.465);
            printTerminal(`${specific} Armor: Failed at gear level: +${start} with a ${chance.toFixed(2)}% chance!`);
        }

        await sleep(10);
    }
}

function printTerminal(string) {
    if (/*terminal.value.length > 2000*/false) {
        terminal.value = terminal.value.slice(100);
        var lines = terminal.value.split('\n');
        lines.splice(0,1);
        terminal.value = lines.join('\n');
    }

    terminal.value = terminal.value + string + '\n';
    terminal.scrollTop = terminal.scrollHeight;
}

function printOutput(string) {
    output.value = output.value + string + '\n';
}

async function singleRun() {
    // Resetting variables
    terminal.value = "";
    output.value = "";
    gold = 0;
    silver = 0;
    guardian_stone = 0;
    destruction_stone = 0;
    leapstone = 0;
    shard = 0;
    fusion_material = 0;

    successes = 0;
    fails = 0;
    pities = 0;

    // Binding variables to document select forms
    var tier = document.getElementById("tier").value;
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
    await asyncProgressHone(head_start, head_end, "armor", "Head");
    await asyncProgressHone(shoulders_start, shoulders_end, "armor", "Shoulder");
    await asyncProgressHone(chest_start, chest_end, "armor", "Chest");
    await asyncProgressHone(hands_start, hands_end, "armor", "Hand");
    await asyncProgressHone(legs_start, legs_end, "armor", "Leg");
    await asyncProgressHone(weapon_start, weapon_end, "weapon", "Weapon");

    // If non-zero, output to output terminal
    if (guardian_stone) {
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Guardian Stone Fragments: ";
                break;
            case 'tier2':
                output = "Guardian Stones: ";
                break;
            default:
                output = "Guardian Stone Crystals: ";
                break;
        }
        output = output + guardian_stone;
        printOutput(output);
    }
    if (destruction_stone) {
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Destruction Stone Fragments: ";
                break;
            case 'tier2':
                output = "Destruction Stones: ";
                break;
            default:
                output = "Destruction Stone Crystals: ";
                break;
        }
        output = output + destruction_stone;
        printOutput(output);
    }
    if (leapstone) {
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Harmony Leapstones: ";
                break;
            case 'tier2':
                output = "Life Leapstones: ";
                break;
            case 'tier3L':
                output = "Honor Leapstones: ";
                break;
            case 'tier3M':
                output = "Great Honor Leapstones: ";
                break;
        }
        output = output + leapstone;
        printOutput(output);
    }
    if (fusion_material) {
        let output = "";
        switch (tier) {
            case 'tier2':
                output = "Caldarr Fusion Material: ";
                break;
            case 'tier3L':
                output = "Simple Oreha Fusion Material: ";
                break;
            case 'tier3M':
                output = "Basic Oreha Fusion Material: "
                break;
        }
        output = output + fusion_material;
        printOutput(output);
    }
    if (shard) {
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Harmony Shards: ";
                break;
            case 'tier2':
                output = "Life Shards: ";
                break;
            default:
                output = "Honor Shards: ";
                break;
        }
        output = output + shard;
        printOutput(output);
    }
    if (gold) {
        printOutput("Gold: " + gold);
    }
    if (silver) {
        printOutput("Silver: " + silver);
    }

    if (output.value != "") {
        printOutput("");
    }
    printOutput("Fails: " + fails)
    printOutput("Pities: " + pities)

    enableInputs();
}

function averageRuns() {
    // Resetting variables
    terminal.value = "";
    output.value = "";
    gold = 0;
    silver = 0;
    guardian_stone = 0;
    destruction_stone = 0;
    leapstone = 0;
    shard = 0;
    fusion_material = 0;

    successes = 0;
    fails = 0;
    pities = 0;

    terminal.value = "Currently calculating! Please be patient..";

    // Binding variables to document select forms
    var tier = document.getElementById("tier").value;
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

    runs = 1000;
    // Run main portion of program
    for (let i = 0; i < runs; i++) {
        progressHone(head_start, head_end, "armor", "Head");
        progressHone(shoulders_start, shoulders_end, "armor", "Shoulder");
        progressHone(chest_start, chest_end, "armor", "Chest");
        progressHone(hands_start, hands_end, "armor", "Hand");
        progressHone(legs_start, legs_end, "armor", "Leg");
        progressHone(weapon_start, weapon_end, "weapon", "Weapon");
    }

    terminal.value = "Done! Check out the values on the right.";
    // If non-zero, output to output terminal
    if (guardian_stone) {
        guardian_stone /= 1000;
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Guardian Stone Fragments: ";
                break;
            case 'tier2':
                output = "Guardian Stones: ";
                break;
            default:
                output = "Guardian Stone Crystals: ";
                break;
        }
        output = output + guardian_stone.toFixed(2);
        printOutput(output);
    }
    if (destruction_stone) {
        destruction_stone /= 1000;
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Destruction Stone Fragments: ";
                break;
            case 'tier2':
                output = "Destruction Stones: ";
                break;
            default:
                output = "Destruction Stone Crystals: ";
                break;
        }
        output = output + destruction_stone.toFixed(2);
        printOutput(output);
    }
    if (leapstone) {
        leapstone /= 1000;
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Harmony Leapstones: ";
                break;
            case 'tier2':
                output = "Life Leapstones: ";
                break;
            case 'tier3L':
                output = "Honor Leapstones: ";
                break;
            case 'tier3M':
                output = "Great Honor Leapstones: ";
                break;
        }
        output = output + leapstone.toFixed(2);
        printOutput(output);
    }
    if (fusion_material) {
        fusion_material /= 1000;
        let output = "";
        switch (tier) {
            case 'tier2':
                output = "Caldarr Fusion Material: ";
                break;
            case 'tier3L':
                output = "Simple Oreha Fusion Material: ";
                break;
            case 'tier3M':
                output = "Basic Oreha Fusion Material: "
                break;
        }
        output = output + fusion_material.toFixed(2);
        printOutput(output);
    }
    if (shard) {
        shard /= 1000;
        let output = "";
        switch (tier) {
            case 'tier1':
                output = "Harmony Shards: ";
                break;
            case 'tier2':
                output = "Life Shards: ";
                break;
            default:
                output = "Honor Shards: ";
                break;
        }
        output = output + shard.toFixed(2);
        printOutput(output);
    }
    if (gold) {
        gold /= 1000;
        printOutput("Gold: " + gold.toFixed(2));
    }
    if (silver) {
        silver /= 1000;
        printOutput("Silver: " + silver.toFixed(2));
    }

    if (output.value != "") {
        printOutput("");
    }
    printOutput("Fails: " + (fails / 1000).toFixed(2));
    printOutput("Pities: " + (pities / 1000).toFixed(2));

    enableInputs();
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