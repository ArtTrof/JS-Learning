//no error 
let message = "Hello World";
message = 123;
//numbers
let n =12;
n=12.534;
//Infinity
alert(n/0);//Infinity
alert(Infinity);//Infinity
//NaN
alert("not a number"/0);//NaN
alert(NaN+1);//NaN
alert(NaN*3);//NaN
//strings
let str ="Aboba";
let phrase =`some text here ${str}`;
//boolean
let isTrue = true;
let isFalse = false;
let isGreater = 1>5;
alert(isTrue);//False
//null
let notNull = null;
//unundefined
let age;
alert(age); // shows "undefined"
let age2 = 100;
// change the value to undefined
age2 = undefined;
alert(age2); // "undefined"
//typeof
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)