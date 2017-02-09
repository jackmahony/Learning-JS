///////////////////////////////////////////////////////////////////////////////////////////////////////////

// More Complex Random number

////////////////////////////////////////////////////////////////////////////////////////////////////////////

var randomNumber1 = prompt ("please type a starting number");
var convertedRandomNumber1 = parseInt(Math.round(randomNumber1));

var randomNumber = prompt ("please enter a random number");
var convertedRandomNumber = parseInt(Math.round(randomNumber));

var returnedNumber = Math.floor(Math.random()* (convertedRandomNumber - convertedRandomNumber1 + 1)) + convertedRandomNumber1;

var message = "<p>" + returnedNumber + " Is a number between " + convertedRandomNumber1 +  " and " + convertedRandomNumber + "</p>";

document.write (message)


///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Simple Random Number

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var randomNumber = prompt ("please enter a random number");
//
// var convertedRandomNumber = parseInt(Math.round(randomNumber));
//
// var returnedNumber = Math.floor(Math.random()*convertedRandomNumber) + 1;
//
// var message = "<p>" + returnedNumber + " Is a random number between 1 and " + convertedRandomNumber + "</p>";
//
// document.write (message)
//
