////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Adding a countdown to the First task

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Shorthand Version

var questions = 3;
var questionsLeft = '[' + questions + ' questionsLeft]';

var name = prompt ("What is your name? " + questionsLeft);
questions -= 1;
questionsLeft = '['+ questions +' questionsLeft]';


var  programmingLanguange = prompt ("Enter a programming language you'd like to learn " + questionsLeft);
questions -= 1;
questionsLeft = '['+ questions +' questionsLeft]';

var answer = prompt ("Are you impressed? " + questionsLeft);
questions -= 1;
questionsLeft = '['+ questions +' questionsLeft]';


alert ("Congratulations You've finished the super awesome quiz!");

var story = "Hi " + name;

story+= " This is a great tool for you to learn " +  programmingLanguange;
story+= " . I hope that this impresses you I think it should! Does it? " + answer
story+= " !! Well thank you very much =) "
document.write (story)
