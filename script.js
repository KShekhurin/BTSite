var k = 0
var firstText = ""
var menuOpened = false;

function ready() {
    firstText = document.getElementsByClassName("title")[0].textContent;
    setInterval(stroka, 500);

    $('.navbar-hider').click(function() {
        $('.arrow').toggleClass("rotated");
        //$('.arrow')[0].textContent = ($('.arrow')[0].textContent === "▼") ? "▲" : "▼"; 

        if(menuOpened) {
            $('.navbar').css({"display": "none"});
        } else {
            $('.navbar').css({"display": "flex"});
        }
        menuOpened = !menuOpened;
        //$('.navbar').slideToggle(100);
    });
}

window.addEventListener("resize", function() {
    /*
    var orientation = screen.orientation.type;
    if (orientation === "landscape-primary" || orientation === "landscape-secondary") {
        $('.navbar').css({"display": "flex"});
    } else {
        $('.navbar').css({"display": "none"});
    }
    console.log(orientation)
    */
    $('.navbar').css(($(window).width() > 700 || menuOpened == true) ? {"display": "flex"} : {"display": "none"});
    if($(window).width() > 700) {
       $('.arrow').removeClass("rotated");
       menuOpened = false;
    }
}, false);

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
