let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user1 = "John";
alert(user1 ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous");

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let height1 = null;
let width1 = null;
// important: use parentheses
let area = (height1 ?? 100) * (width1 ?? 50);
alert(area); // 5000

// set height=100, if height is null or undefined
height = height ?? 100;

let x = 1 && 2 ?? 3; // Syntax error
let y = (1 && 2) ?? 3; // Works