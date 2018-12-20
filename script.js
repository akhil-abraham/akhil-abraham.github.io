var word = "";
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 83) {
        word += "s";

    } else if (event.keyCode == 84) {
        word += "t";
    } else if (event.keyCode == 85) {
        word += "u";   
    } else if (event.keyCode == 70) {
        word += "f"; 
    } else if (event.keyCode == 72) {
        word += "h";
    } else if (event.keyCode == 79) {
        word += "o";
    } else if (event.keyCode == 77) {
        word += "m";
    } else if (event.keyCode == 69) {
        word += "e";
    } else {
        word = "";   
    }
}, true);

window.onload = function() {
    function check () {
        if (word == "stuff") {
            var newUrl = ["fluffybluff.github.io/Racing/Racing.html"];
            setTimeout(function(){document.location.href = ("https://" + newUrl)},500);
            word = "";
        } else if (word == "home") {
            var newUrl = ["fluffybluff.github.io"];
            setTimeout(function(){document.location.href = ("https://" + newUrl)}, 500);
            word == "";
        }
    }
    setInterval(check, 0);
}
