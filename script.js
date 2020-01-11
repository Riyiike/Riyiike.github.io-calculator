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
    let n;
    let numb = num.toString();
    if (numb === "-") {
        return "";
    }
    if (numb.includes(".")){
        return numb;
    }
    else{
        n = Number(numb);
        n = n.toLocaleString("en");
    }
    return n;
}

//Replace Number with comma with empty string
// eg: 4,999 will be replaced to 4999
function reverseNumberFormat(num) {
    if(num == ".")
        return num;
    return num.replace(/,/g, "");
}
// Get all numbers
function getNumbers() {
    let number = document.getElementsByClassName("number");
    for (let i = 0; i < number.length; i++) {
        //Add event listener to the numbers to listen for clicks
        number[i].addEventListener("click", function() {
            //get the number from the button clicks
            let output = reverseNumberFormat(getOutput());
            if (output != NaN) {
                //if output is a number, then remove concatenation//
                output = output + this.id;
                printOutput(output);
            }
        });
    }
}

//Calculation from Operators class
function operatorCalculation() {
    let operator = document.getElementsByClassName("operator");
    for (let i = 0; i < operator.length; i++) {
        operator[i].addEventListener("click", function() {
            //bring clear and backspace operators to function //
            if (this.id === "clear") {
                printHistory("");
                printOutput("");
            } else if (this.id === "backspace") {
                let output = reverseNumberFormat(getOutput()).toString();
                if (output) {
                    //if output has a value
                    output = output.substr(0, output.length - 1);
                    printOutput(output);
                }
            } else {
                let output = getOutput();
                let history = getHistory();
                //if output is empty history might not be empty//
                if (output === "" && history != "") {
                    if (isNaN(history[history.length - 1])) {
                        history = history.substr(0, history.length - 1);
                    }
                }
                //if output is not empty history might be empty//
                if (output != "" || history != "") {
                    //conditional statement//
                    output = output === "" ? output : reverseNumberFormat(output);
                    if (history === "0") history = "";
                    history = history + output;
                    if (this.id == "=") {
                        // the eval function is responsible for doing the basic maths
                        let result = eval(history);
                        printOutput(result);
                        printHistory("");
                    } else {
                        history = history + this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
        });
    }
}

// call both functions
getNumbers();
operatorCalculation();
