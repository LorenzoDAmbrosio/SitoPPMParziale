var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("main-nav").style.top ="-120px";
        document.getElementById("main-nav-mobile").style.top ="-120px";
    } else {
        document.getElementById("main-nav").style.top = "0px";
        document.getElementById("main-nav-mobile").style.top = "0px";
    }
    prevScrollpos = currentScrollPos;
}