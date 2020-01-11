//fetch the history element by Id
function getHistory() {
    return document.getElementById("history-value").innerText;
}

//Print the History to Screen
function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

//Fetch the Output Element
function getOutput() {
    return document.getElementById("output-value").innerText;
}

//Print the expected solution to the calculator screen
function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(
            num
        );
    }
}