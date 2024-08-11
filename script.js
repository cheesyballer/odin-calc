let num1 = "", num2 = "";
let op = "";

let calcScreen = document.getElementById("screen");

function input(ipt) {
    if(!(Number.isInteger(parseInt(ipt)))) {
        if(num1 == "") {
            displayValues("INPUT NUM FIRST");
            return;
        }

        switch(ipt) {
            case "add":
                op = "+";
                break;
            case "sub":
                op = "-";
                break;
            case "mult":
                op = "x";
                break;
            default:
                op = "/";
        }

        displayValues();
        return;
    }

    if(op != "") {
        num2 += ipt;
        displayValues();
        return;
    }

    num1 += ipt;

    displayValues();
}

function displayValues(command) {
    if(command != null) {
        calcScreen.textContent = command;
        return;
    }

    calcScreen.textContent = num1+op+num2;
}

function calculateIt() {
    if(num1 === "") {
        displayValues("INPUT 1ST NUM");
        return;
    }
    if(op === "") {
        displayValues("INPUT OPERATOR");
        return;
    }
    if(num2 === "") {
        displayValues("INPUT 2ND NUM");
        return;
    }

    switch(op) {
        case "+":
            displayValues(parseInt(num1) + parseInt(num2));
            break;
        case "-":
            displayValues(parseInt(num1) - parseInt(num2));
            break;
        case "x":
            displayValues(parseInt(num1) * parseInt(num2));
            break;
        case "/":
            displayValues(parseInt(num1) / parseInt(num2));
            break;
        default:
            alert("Error: operator not selected, yet calculation function ran");
    }

    num1 = "";
    num2 = "";
    op = "";
}

function clear() {
    num1 = "";
    num2 = "";
    op = "";
    displayValues("");
}