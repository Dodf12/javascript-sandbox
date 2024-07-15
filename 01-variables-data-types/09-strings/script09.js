let x;

const name = 'Abhi';
const age = '18';

x = 'Hello, my name is' + name + 'and Im' + age +'years old';

//Template literals
x= 'Hello, my name is ${8} and I am ${age} years';
console.log(x);

//String properties and methods
const s ='Hellow Word';

x = s.length;

  //accessing invidiual character
  x = s[1] //singel character

x = s.__proto__;

x = s.toUpperCase();
x = s.toLocaleLowerCase();

x = s.charAt(0);

x= s.indexOf('d');

x= s.substring(7);
//or
x = s.substring(0,4);

x = s.slice()

x = x.trim() //Removes leading and trailing whitespace
x = s.replace('World', 'John'); //Will find the string that is listed first, a
//replace it with the second string

x = s.valueOf();

x = s.split(); //Splits string into array


console.log(x);
