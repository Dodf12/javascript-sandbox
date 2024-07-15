const myString = 'developer';

let myNewString = myString.toUpperCase()
let tempString = myNewString[0];

myNewString = myNewString.toLowerCase()
console.log(myNewString);
myNewString = myNewString.substring(1, myNewString.length);

myNewString = tempString + myNewString;
console.log(myNewString);