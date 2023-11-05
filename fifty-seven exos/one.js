// Intro Exercise 
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

//tipCalculator();

// Exercise 1 : Saying Hello
function sayingHello() {
    let name = readline('What is your name?\t');
    console.log(`Hello, ${name}, nice to meet you!`);
}
//sayingHello()

// Exercise 2 : Counting characters
function countCharacters() {
    let entry = readline('What is the input\t');
    while (entry.length === 0 ) {
        entry = readline('Please provide a word :\t');
    }
    console.log(`${entry} has ${entry.length} characters.`);
}
//countCharacters();


// Exercise 3: Printing quotes