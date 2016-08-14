(function (window) {
var Hello = {};
var speak = "Hello";
Hello.speak = function (name) {
  console.log(speak + " " + name);
}
window.Hello = Hello;
})(window);