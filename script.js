var k = 0

function ready() {
    setInterval(stroka, 500)
}

function stroka() {
    var h = document.getElementsByClassName("title")[0];
    if (h.textContent[0] == "К" && k < 2) {
        k++;
        return;
    } else {
        h.textContent = h.textContent.substr(1, h.textContent.length-1) + h.textContent[0];
        k = 0;
    }
}

document.addEventListener("DOMContentLoaded", ready);
