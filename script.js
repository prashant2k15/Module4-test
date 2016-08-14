(function (window) {
var check = ["hp","sony","apple","John","jeo","dell","asus", "Jugnu","nike","philips","nokia","samsung","jbl"];
for (var i in check) {
 var firstLetter = ((check[i]).charAt(0)).toLowerCase();
     if (firstLetter == 'j') {
         window.Bye.speak(check[i]);
      } 
      else {
         window.Hello.speak(check[i]);
      }
    }
    })(window);