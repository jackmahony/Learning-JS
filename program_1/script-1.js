////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FIRST CHALLENGE TO WRITE A STORY

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Shorthand Version
var name = prompt ("What is your name?");
var story = "Hi " + name;
var  programmingLanguange = prompt ("Enter a programming language you'd like to learn");
var answer = prompt ("Are you impressed?");

alert ("Congratulations You've finished the super awesome quiz!");

story+= " This is a great tool for you to learn " +  programmingLanguange;
story+= " . I hope that this impresses you I think it should! Does it? " + answer
story+= " !! Well thank you very much =) "
document.write (story)




// Longhand Version
var name = prompt ("What is your name?");

var  programmingLanguange = prompt ("Enter a programming language");

var answer = prompt ("Are you impressed?");

alert ("Congratulations You've finished the super awesome quiz!");

document.write ("Hi " + name + " This is a great tool for you to learn " + programmingLanguange + ". I hope that this impresses you, Does it? " + answer + " Why Thank you =)");
