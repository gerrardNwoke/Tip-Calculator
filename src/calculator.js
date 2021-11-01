// Global variable for the tip percentages and colors
let percent = 0;
const highlightBackgroundColor = 'hsl(172, 67%, 45%)';
const highlightFontColor = 'hsl(183, 100%, 15%)';



// Collects the bill and no. people information inputted and checks if no. people is valid 
function info(){
    let people = parseInt(document.getElementById("people").value);
    let bill = parseFloat(document.getElementById("bill").value);

    if (people == 0){
        document.getElementById("errorMsg").style.opacity = '1';
        document.getElementById("people").style.outlineColor = 'red';

    }  else {
        people = parseInt(people);
        document.getElementById("errorMsg").style.opacity = '';
        document.getElementById("people").style.outlineColor = '';
    }

    noLetters(people, "people");

    noLetters(bill, "bill");

    if (bill !== bill){
        bill = 0;
    }

    if (people !== people){
        people = 0;
    }

    return [bill, people];
}

function noLetters(value, valueId){
    if (value !== value){
        document.getElementById(valueId).value = "";
    }
}

// Tip percent: Assigns the number needed for the percent global variable and highlights the current tip% option being used
function btn5(){
    btnHighlightReset();
    const btn = document.getElementById("5%");
    btn.style.backgroundColor = highlightBackgroundColor;
    btn.style.color = highlightFontColor;
    percent = 0.05;
    tip();
}

function btn10(){
    btnHighlightReset();
    const btn = document.getElementById("10%");
    btn.style.backgroundColor = highlightBackgroundColor;
    btn.style.color = highlightFontColor;
    percent = 0.1;
    tip();
}

function btn15(){
    btnHighlightReset();
    const btn = document.getElementById("15%");
    btn.style.backgroundColor = highlightBackgroundColor;
    btn.style.color = highlightFontColor;
    percent = 0.15;
    tip();
}

function btn25(){
    btnHighlightReset();
    const btn = document.getElementById("25%");
    btn.style.backgroundColor = highlightBackgroundColor;
    btn.style.color = highlightFontColor;
    percent = 0.25;
    tip();
}

function btn50(){
    btnHighlightReset();
    const btn = document.getElementById("50%");
    btn.style.backgroundColor = highlightBackgroundColor;
    btn.style.color = highlightFontColor;
    percent = 0.5;
    tip();
}

function btnCustom(){
    let customPercent = parseFloat(document.getElementById("custom-tip").value);
    const input = document.getElementById("custom-tip");
    btnHighlightReset();
    input.style.outlineColor = "hsl(172, 67%, 45%)";

    noLetters(customPercent, "custom-tip");

    if (customPercent !== customPercent){
        customPercent = 0;
    }
    
    
    customPercent = parseFloat(customPercent);
    percent = customPercent /100;
    tip();
    
}
// Tip percent Ends


//btn highlightReset for the tip options: resets any possible styling done when a tip% option is selected

function btnHighlightReset(){
    const button = document.getElementsByClassName("tip-btn");
    const input = document.getElementById("custom-tip");

    for (let i = 0; i < 5; i++){
        button[i].style.backgroundColor = "";
        button[i].style.color = "";
    }

    input.style.outlineColor = ""
}


// Tip Calculation
function tip(){

    bill = info()[0];
    people = info()[1];

    // Tip per person
    const tip = (bill * percent)/people;

    // Total amount per person
    const total = ((tip*people) + bill)/people;

    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
    document.getElementById("tip-amount").innerText = `$${tip.toFixed(2)}`;

    // use console.log to check which value tip and total gives
    console.log(tip);
    if (tip !== tip || tip == Infinity){
        document.getElementById("tip-amount").innerText = `$0.00`; 
    }

    if (total !== total){
        document.getElementById("total").innerText = `$0.00`;
    }
    
}

// resetting all the values
function reset(){
    document.getElementById("tip-amount").innerText = "$0.00";
    document.getElementById("total").innerText = "$0.00";
    document.getElementById("bill").value = "";
    document.getElementById("custom-tip").value = "";
    document.getElementById("people").value = "";

    // Styling
    document.getElementById("errorMsg").style.opacity = '';
    document.getElementById("people").style.outlineColor = '';

    // Tip% Option Styling Reset
    btnHighlightReset();
    percent = 0;
}

