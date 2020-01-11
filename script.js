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
//change from number to string
// so it can have commas and also negative values
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}

//Replace Number with comma with empty string
// eg: 4,999 will be replaced to 4999
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ""));
}