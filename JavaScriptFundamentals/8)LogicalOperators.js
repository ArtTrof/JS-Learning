//or
alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false
alert(1 || 0); // 1 (1 is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
//and
alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false
// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5
// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0
//not 
//A double NOT !! is sometimes used for converting a value to boolean type:
alert(!!"non-empty string"); // true
alert(!!null); // false
