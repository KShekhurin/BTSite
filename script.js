var k = 0
var firstText = ""
var menuOpened = true;

function ready() {
    firstText = document.getElementsByClassName("title")[0].textContent;
    setInterval(stroka, 500);

    $('.navbar-hider').click(function() {
        $('.arrow').toggleClass("rotated");
        $('.navbar').slideToggle(100);
    });
}

function stroka() {
    var h = document.getElementsByClassName("title")[0];
    if (h.textContent == firstText && k < 2) {
        k++;
        return;
    } else {
        h.textContent = h.textContent.substr(1, h.textContent.length-1) + h.textContent[0];
        k = 0;
    }
}

document.addEventListener("DOMContentLoaded", ready);
