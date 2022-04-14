// You can start typing Javascript in here!
var name = "Efren";
console.log(name);// Prints the result in the console, and you access that via the "inspect" function
alert(name); //This Diesplays contetc on a small pop-up window
document.write(name); // This instructs the HTML document to inser a line, in this case
// Only use this if your intention is to display text that you will modify int he future

document.getElementById('string').innerHTML = name;
//This does two things:
//First it identifies the elemt by it's id in the HTML document
//The it inserts an object into the element
