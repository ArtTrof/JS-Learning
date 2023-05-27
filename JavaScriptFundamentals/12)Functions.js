function showMessage() {
    alert("Hello World");
}
showMessage();

function showMessage(someText = 'here is default value') {
    alert(`function input:${someText}`);
}
showMessage('someText');

function showMessage(text) {
    if (text === undefined) { // if the parameter is missing
        text = 'empty message';
    }
    alert(text);
}
function showMessage(text) {
    // if text is undefined or otherwise falsy, set it to 'empty'
    text = text || 'empty';
}
function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}
function showMovie(age) {
    if (!checkAge(age)) {
        return;
    } alert("Showing you the movie"); // (*)
}
function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert(i); // a prime
    }
}
function showPrimes(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert(i);  // a prime
    }
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
