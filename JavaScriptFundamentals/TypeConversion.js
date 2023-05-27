//String Conversion
let value = true;
alert(typeof value);//boolean
value = String(value);//now here 'true'
alert(typeof value);//String
//Numeric conversion
alert('6'/'2');//3,strings are converted to numbers
alert(typeof num);//number

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion 

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
//Boolean conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
alert( Boolean(" ") ); // true