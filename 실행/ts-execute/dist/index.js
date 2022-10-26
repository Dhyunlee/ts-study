let car = 'bmw';
let isAdult = true;
let aa = null;
let bb = undefined;
const arrNumber = [1, 2, 3];
const arrNumber2 = [10, 20, 30];
const week1 = ['월', '화', '수'];
const week2 = ['월', '화', '수'];
let b;
b = ['강아지', 5];
b[0].toLocaleLowerCase();
function sayHello() {
    console.log('hello!');
}
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
    }
}
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android";
})(Os || (Os = {}));
var Os2;
(function (Os2) {
    Os2[Os2["Window"] = 3] = "Window";
    Os2[Os2["Ios"] = 4] = "Ios";
    Os2[Os2["Android"] = 5] = "Android";
})(Os2 || (Os2 = {}));
var Os3;
(function (Os3) {
    Os3[Os3["Window"] = 3] = "Window";
    Os3[Os3["Ios"] = 5] = "Ios";
    Os3[Os3["Android"] = 6] = "Android";
})(Os3 || (Os3 = {}));
console.log(Os3[5]);
console.log(Os3['Ios']);
var os4;
(function (os4) {
    os4["Window"] = "win";
    os4["Ios"] = "ios";
    os4["Android"] = "and";
})(os4 || (os4 = {}));
let myOs;
myOs = os4.Window;
