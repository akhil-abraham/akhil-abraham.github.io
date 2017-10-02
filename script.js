document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        alert('Left was pressed');

    }
    else if (event.keyCode == 39) {
        alert('Right was pressed');
    }
}, true);
