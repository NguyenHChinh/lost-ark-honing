let btnCalculate = document.createElement("button");
btnCalculate.innerHTML = "Calculate";
btnCalculate.type = "submit";
btnCalculate.onclick = function () {
    calculate();
}
document.body.appendChild(btnCalculate);

function randomInt() {
    return Math.random() * (100 - 1) + 1;
}

function progressHone(start, end) {
    while (start < end) {
        if (randomInt() < 50) {
            printTerminal("Failed at gear level: " + start);
        }
        else {
            start++;
            printTerminal("Success! Gear level is now: " + start);
        }
    }
}

var terminal = document.getElementById("terminal");
function printTerminal(string) {
    if (terminal.value.length > 500) {
        terminal.value = terminal.value.slice(250);
    }

    terminal.value = terminal.value + string + '\n';
    terminal.scrollTop = terminal.scrollHeight;
}

function calculate() {
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
       
/*     console.log(tier);
    console.log(head_start);
    console.log(head_end);
    console.log(shoulders_start);
    console.log(shoulders_end);
    console.log(chest_start);
    console.log(chest_end);
    console.log(hands_start);
    console.log(hands_end);
    console.log(legs_start);
    console.log(legs_end);
    console.log(weapon_start);
    console.log(weapon_end); */

    progressHone(head_start, head_end);
}