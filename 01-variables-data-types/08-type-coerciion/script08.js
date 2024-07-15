let x;

//JS coerced the 5 to be a string
x = 5 + '5';

console.log(x, typeof x);


x = 5 + Number('5');

console.log(x, typeof x);

//JS coerce the string 5 to become a number
x = 5 * '5';

console.log(x, typeof x);
