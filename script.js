let num1 = "", num2 = "";
let op = "";

let calcScreen = document.getElementById("screen");

function input(ipt) {
    if(!(Number.isInteger(parseInt(ipt)))) {
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

function displayValues() {
    calcScreen.textContent = num1+op+num2;
}