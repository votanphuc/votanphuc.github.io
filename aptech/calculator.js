var numberA = 0, numberB = 0;
var symbol;

function clearClick() {
    numberA = 0;
    numberB = 0;
    symbol = "";
    document.getElementById("display").innerHTML = "";
}

function numClick(num) {
    document.getElementById("display").innerHTML += num;
    if (!symbol) {
        numberA = 10*numberA + parseInt(num);
    } else {
        numberB = 10*numberB + parseInt(num);
    }
}

function equalClick() {
    var c;
    switch (symbol) {
        case "+": {
            c = numberA + numberB;
            break;
        }
        case "-": {
            c = numberA - numberB;
            break;
        }
        case "*": {

            c = numberA * numberB;
            break;
        }

        case "/": {
            c = numberA / numberB;
            break;
        }
    }

    document.getElementById("display").innerHTML = c;

    numberA = 0;
    numberB = 0;
}

function symbolClick(sym) {
    symbol = sym;
    document.getElementById("display").innerHTML = "";
}