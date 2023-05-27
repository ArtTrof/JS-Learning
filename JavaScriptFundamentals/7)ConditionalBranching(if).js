let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert('You are right!');
let cond = (year == 2015); // equality evaluates to true or false
if (cond) {
    alert('You are right!');
} else {
    alert('You are wrong!');
}

let accessAllowed;
let age = prompt('How old are you?', '');
if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);
accessAllowed = (age > 18) ? true : false;

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
alert(message);

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ? alert('Right!') : alert('Wrong.');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}