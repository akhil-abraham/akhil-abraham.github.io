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
    } else {
        word = "";   
    }
}, true);

window.onload = function() {
    function check () {
        if (word == "stuff") {
            var newUrl = ["akhil-abraham.github.io/stuff.html"];
            setTimeout(function(){document.location.href = newUrl},500);
            word = "";
        }
    }
    setInterval(check, 0);
}
