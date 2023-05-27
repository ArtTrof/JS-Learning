let i = 0;
while (i < 10) {
    alert(i);
    i++;
}
do {
    alert(i);
    i++;
} while (i < 10);
for (let b = 0; b < 10; b++) {
    alert(b);
}

let sum = 0;

while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break; // (*)
    sum += value;
}

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
}

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
        // do something with the value...
    }
}
alert('Done!');