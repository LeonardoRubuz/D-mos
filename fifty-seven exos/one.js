// Exercise 1
const readline = require('prompt-sync')();
function tipCalculator() {
    let billAmount = 0;
    let tip = 0;
    let tipRate = 0;
    let total = 0;

    function readElements() {
        billAmount = Number(readline("What's the bill amount?\t"));
        tipRate = Number(readline("What's the tip rate?\t"));    
    }
    readElements();

    while (isNaN(billAmount) || isNaN(tipRate)) {
        console.log('Please insert numeric values');
        readElements();
    }

    tip = billAmount * (tipRate/100);
    Math.round(tip);
    total = billAmount + tip;

    console.log(`Tip : $ ${tip}`);
    console.log(`Total : $ ${total}`);

}

tipCalculator();
