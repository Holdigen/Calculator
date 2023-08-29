// vars
let savedString = false;
let inputString = "0";
let mode = "";
function updateNumber(newNumber, overwrite) {
    if (overwrite) {
        inputString = newNumber;
    } else {
        if (inputString == "0") {
            inputString = newNumber;
        } else if (inputString.length > 16) {
            return;
        } else {
            inputString += newNumber;
        }
    }
    
    document.getElementById("input").textContent = inputString;
}

// supporting buttons
document.getElementById("backslash-button").textContent = "<";

for (const button of document.getElementById("number-holder").children) {
    button.addEventListener("click", async (event) => {
        if (!parseInt(button.textContent) && button.textContent != "0") {
            if (!savedString) {
                return
            }
            if (mode == "/") {
                const calculated = parseInt(savedString) / parseInt(inputString);
                updateNumber(calculated.toString(), true);
                savedString = false;
            } else if (mode == "*") {
                const calculated = parseInt(savedString) * parseInt(inputString);
                updateNumber(calculated.toString(), true);
                savedString = false;
            } else if (mode == "-") {
                const calculated = parseInt(savedString) - parseInt(inputString);
                updateNumber(calculated.toString(), true);
                savedString = false;
            } else if (mode == "+") {
                const calculated = parseInt(savedString) + parseInt(inputString);
                updateNumber(calculated.toString(), true);
                savedString = false;
            }
        } else {
            updateNumber(button.textContent, false);
        }
    })
}
for (const button of document.getElementById("mod-holder").children) {
    button.addEventListener("click", async (event) => {
        const buttonType = button.textContent;
        if (buttonType == "AC") {
            mode = "";
            savedString = false;
            updateNumber("0", true);
        } else if (buttonType == "/") {
            mode = "/";
            savedString = inputString;
            updateNumber("0", true);
        } else if (buttonType == "*") {
            mode = "*";
            savedString = inputString;
            updateNumber("0", true);
        } else if (buttonType == "-") {
            mode = "-";
            savedString = inputString;
            updateNumber("0", true);
        } else if (buttonType == "+") {
            mode = "+";
            savedString = inputString;
            updateNumber("0", true);
        }
    })
}
document.getElementById("backslash-button").addEventListener("click", async (event) => {
    if (inputString == "0") {
        return;
    } else if (inputString.length == 1) {
        updateNumber("0", true);
    } else {
        updateNumber(inputString.substring(0, inputString.length - 1), true)
    }
})