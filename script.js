function showpage() {
    var element = document.getElementById("rightselection")
    element.classList.toggle("visibleform")
}
var countDown = new Date("Aug 12, 2025 15:37:25").getTime();

var x = setInterval(function () {
    var current = new Date().getTime();
    var timeLeft = countDown - current;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
