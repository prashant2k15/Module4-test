(function (window) {
var Bye = {};
var speak = "Good Bye";
Bye.speak = function (name) {
  console.log(speak + " " + name);
}
window.Bye = Bye;
})(window);