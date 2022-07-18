console.log("I'm ready!");
// Iteration 1: Names and Input
//1.1
hacker1 = "Adam";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
hacker2 = "Sofia";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
let capitals = "";
for (let i = 0; i < hacker1.length; i++){
    capitals += hacker1[i].toUpperCase();
    capitals += " ";
}
console.log(capitals);

//3.2
let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    newHacker2 += hacker2[i];
}
console.log(newHacker2);

//3.3
if (hacker1.charAt(0).localeCompare(hacker2.charAt(0)) === -1) {
    console.log("The driver's name goes first");
}
else if (hacker1.charAt(0).localeCompare(hacker2.charAt(0)) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}

//Bonus 1
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget fermentum nibh. Proin tristique felis consectetur magna egestas suscipit. Etiam euismod, turpis ac vehicula pulvinar, est est iaculis ipsum, molestie aliquet sem libero sit amet eros. Sed laoreet tortor sapien. Aliquam gravida pharetra leo, a ultricies neque ullamcorper at. Aliquam nec sapien quis metus pretium commodo. Sed ac lacus non sapien lacinia vulputate. Maecenas a iaculis massa. Sed tempor, lectus id congue sollicitudin, urna justo pulvinar diam, nec viverra risus massa at ex. Nullam metus elit, vestibulum dictum odio sed, suscipit dignissim nisl. Mauris sed mi ligula. Vestibulum malesuada, arcu vitae tincidunt consectetur, elit odio bibendum augue, eget lobortis dui augue ac urna. Cras facilisis urna ut turpis luctus rutrum. Praesent efficitur justo massa, ac molestie felis volutpat eu. Donec eget congue augue, ac bibendum libero. Donec finibus vestibulum sem, a ultricies nulla faucibus id. Nullam mattis massa non pharetra viverra. Pellentesque et lacus porta, efficitur ligula at, condimentum lectus. Vestibulum eget lorem dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vehicula enim nisi, id ullamcorper metus bibendum id. Nunc leo neque, tincidunt et nisi non, vehicula sodales neque. Vestibulum fermentum dolor ut metus auctor, eu pretium urna convallis. Fusce id efficitur nisi. Cras facilisis nisi sit amet libero iaculis ornare. Vivamus malesuada sem eu elit elementum, in convallis neque dapibus. Nam tempus aliquet ligula, non rhoncus leo dignissim ac. Quisque posuere vulputate sollicitudin. Duis non lacus vitae sem maximus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id imperdiet neque, quis auctor mi. Praesent sit amet laoreet ipsum. Nam non elementum eros. Sed a orci vitae massa iaculis posuere vitae vitae justo.";
let count = 1;
let etCount = 0; 
for (let i = 0; i < text.length; i++){
    if (text[i] === " "){
        count += 1;
    } else if (text ===""){
        count = 0; 
    }

    if (text[i] === "e" && text[i+1] === "t" && text[i-1] === " " && text[i+2] === " "){
        etCount += 1;
    }
}
console.log(count); 
console.log(etCount);

//Bonus 2
let phraseToCheck = "race car";
let phraseBackwards = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--){
    phraseBackwards += phraseToCheck[i];
}
console.log(`The phrase is: ${phraseToCheck}`);
console.log(`The phrase backwards is: ${phraseBackwards}`);

//Getting rid of spaces for the phrase 
let newPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++){
    if (phraseToCheck[i] !== " ") {
        newPhrase += phraseToCheck[i];
    }
}

//Getting rid of spaces for the phrase backwards
let newPhrase1 = "";
for (let i = 0; i < phraseBackwards.length; i++){
    if (phraseBackwards[i] !== " ") {
        newPhrase1 += phraseBackwards[i];
    }
}

//Checking if the phrases without spaces are equal
if (newPhrase === newPhrase1) {
    console.log("The phrase is a Palindrome");
}
else {
    console.log("The phrase is not a Palindrome");
}
