let num1 = "", num2 = "";
let op = "";

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

        return;
    }

    if(op != "") {
        num2 += ipt;
        return;
    }

    num1 += ipt;
}