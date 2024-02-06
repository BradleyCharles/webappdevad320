
//------------------------------------------------------------------------------------------------------------//
//-Project Functions-----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//


// Function to toggle the different DIV's between visible and not
function toggleDiv(s,h){
    document.getElementById('container'+h).style.display = 'none';
    document.getElementById('container'+s).style.display = 'block';
}


//------------------------------------------------------------------------------------------------------------//
//-Madlib----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//


// Gets value from text input and outputs it to page.
function madlib(){
    var person = document.colormagic.elements[0].value;
    var game = document.colormagic.elements[1].value;
    var verb = document.colormagic.elements[2].value;
    var emotion = document.colormagic.elements[3].value;

    // Checks to see if anyone names Bob is trying to use your Madlib... and gives an output based on your words
    if (person == 'bob' || person == 'Bob'){
            document.getElementById('madlibOutput1').innerHTML = 'Nice try, Bob!'+'<br>';
            document.getElementById('madlibOutput2').innerHTML = 'Try again with a different name.';
    } else {
        document.getElementById('madlibOutput1').innerHTML = 'I want to go to the arcade with '+person+'. there are lots of games to play. The game I want to play the most is '+game+'. The point of the game is to '+verb+' zombies. I could spend all day with '+person+' and teach them all of the best tricks.' +'<br>' +'<br>'+ 'It would be a '+emotion+' day!';
        document.getElementById('madlibOutput2').innerHTML = 'Try again with the name Bob...';
    }
}

function resetMadlib(){
    person = '';
    game = '';
    verb = '';
    emotion = '';
    document.getElementById('madlibOutput1').innerHTML = '';
    document.getElementById('madlibOutput2').innerHTML = '';
}


//------------------------------------------------------------------------------------------------------------//
//-Blackjack-------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//


// Blackjack loop
let blackjackTotal = 0;
function blackjack(){
    let hitMe = true;
    do {
        // Gives you your first pair of cards and asks if you want another one
        if (hitMe){
            takeCard();
            if (blackjackTotal > 21){break;}//Checks for busts
            if (confirm('Your hand is ' + blackjackTotal + '. Take another card?') == true){hitMe = true;}
        else {hitMe = false;}
    }}
    while (hitMe);
        if (blackjackTotal > 21){
            alert(blackjackTotal + ' YOU BUST!');
            document.getElementById('blackjackOutput').innerHTML = 'YOU BUST!';
        } else {
            result();
}}

// Do the math
function takeCard(){
    let card = 0;
    card = Math.ceil(11*Math.random());
    blackjackTotal += card;
}

//Display results
function result(){
    let dealer = 0;
    dealer = Math.ceil(11*Math.random()) + Math.ceil(11*Math.random()); //dealer always takes 2 cards
    if (dealer >= blackjackTotal && dealer <22) {
        alert('Your hand is worth ' + blackjackTotal + '. Dealer got ' + dealer + '.' + '\n' + 'DEALER WINS!!!');
        document.getElementById('blackjackOutput').innerHTML = 'Your hand is worth ' + blackjackTotal + '. Dealer got ' + dealer + '.' + '<br>' + 'DEALER WINS!!!';
    } else {
        alert('Your hand is worth ' + blackjackTotal + '. Dealer got ' + dealer + '.' + '\n' + 'YOU WIN!!!');
        document.getElementById('blackjackOutput').innerHTML = 'Your hand is worth ' + blackjackTotal + '. Dealer got ' + dealer + '.' + '<br>' + 'YOU WIN!!!';
}}

//Resets your total and the paragraph to blank so you can play again.
function resetBlackjack(){
    blackjackTotal = 0;
    document.getElementById('blackjackOutput').innerHTML = '';
}
    
//------------------------------------------------------------------------------------------------------------//
//-Calclator-------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//
    
    // Gets value from text input and outputs it to page.
function calculate(){
    var operator = document.getElementById('math').value;
    var numberOne = document.getElementById('numberOne').value;
    var numberTwo = document.getElementById('numberTwo').value;
    n=document.mathForm.elements[0].value;

    if (isNaN(n) || n == '') {
        alert('Please enter numbers only');
    } else if (operator == 'add'){
            mathAdd(numberOne,numberTwo);
    } else if(operator == 'subtract'){
            mathSubtract(numberOne,numberTwo);
    } else if(operator == 'multiply'){
            mathMultiply(numberOne,numberTwo);
    } else {
            mathDivide(numberOne,numberTwo);
    }
}

// Add two numbers and output result
function mathAdd(a,b){
    var firstNumber = parseFloat(a);
    var secondNumber = parseFloat(b);
    var solution = (firstNumber+secondNumber);
    document.getElementById('CalculatorOutput').innerHTML = firstNumber + ' + ' + secondNumber + ' = ' + solution;
}

// Subtract two numbers and output result
function mathSubtract(a,b){
    var firstNumber = parseFloat(a);
    var secondNumber = parseFloat(b);
    var solution = (firstNumber-secondNumber);
    document.getElementById('CalculatorOutput').innerHTML = firstNumber + ' - ' + secondNumber + ' = ' + solution;
}

// Multiply two numbers and output result
function mathMultiply(a,b){
    var firstNumber = parseFloat(a);
    var secondNumber = parseFloat(b);
    var solution = (firstNumber*secondNumber);
    document.getElementById('CalculatorOutput').innerHTML = firstNumber + ' x ' + secondNumber + ' = ' + solution;
}

// Divide two numbers and output result
function mathDivide(a,b){
    var firstNumber = parseFloat(a);
    var secondNumber = parseFloat(b);
    var solution = (firstNumber/secondNumber);
    document.getElementById('CalculatorOutput').innerHTML = firstNumber + ' / ' + secondNumber + ' = ' + solution.toFixed(2);
}


//------------------------------------------------------------------------------------------------------------//
//-Color Picker----------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//


/* Main function that gets input from the sliders and sends them to vaiables that can be used to manipulate 
the background color of the swatch container and can be used in the outputs to display the RGB and HEX codes */
function colors(){ 
    var red= document.getElementById('red').value; // Value for the color red
    var green = document.getElementById('green').value; // Value for the color green
    var blue = document.getElementById('blue').value; // Value for the color blue
    colorBox.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'; // Changes the value for backgroundColor to the RGB value
    document.getElementById('outputRGB').innerHTML = 'RGB ' + red + ',' + green + ',' + blue + ''; // Output for RGB
    document.getElementById('outputHex').innerHTML= hexOutput(red, green, blue); // Output for Hex
}

/* Function that converts the RGB raw numbers to HEX code and formats it to be output */
function hexOutput(r, g, b) {
return 'HEX #' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}


//------------------------------------------------------------------------------------------------------------//
//-Decoder / Encoder-----------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//
    

//Function that takes your letter and decodes it
function encodeText(){
    n=document.encodeForm.elements[0].value;
    if (!isNaN(n)) {     
        err('letter');
    } else {
        var text = document.encodeForm.elements[0].value;
        var code = text.charCodeAt(0);
document.getElementById('encodeValue').innerHTML = code;
}}

//Function that takes your number and encodes it
function decodeText(){
    n=document.decodeForm.elements[0].value;
    if (isNaN(n) || n == '') {
        err('number');
    } else { 
        var text = String.fromCharCode(document.decodeForm.elements[0].value);
        document.getElementById('decodeValue').innerHTML = text;
}}

//Error alert
function err(t){
    error = t;
    alert('Please enter a ' + error + '.');
}