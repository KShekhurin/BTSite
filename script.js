function ready() {
    setInterval(stroka, 500)
}
    
function stroka() {
    var h = document.getElementsByClassName("title")[0];
    h.textContent = h.textContent.substr(1, h.textContent.length-1) + h.textContent[0];
}
    
document.addEventListener("DOMContentLoaded", ready)