// function log(message) {
//   console.log(message);
// }
// var message = "Hello World";
// log(message);
// function doSomething() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("Finally: " + i);
// }
// doSomething();
// let count = 5;
// count = "a";
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
