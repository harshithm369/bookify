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


function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const samplemail = "a@gmail.com"
    const samplepswd = "a@gmail.com"
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const age = document.getElementById("age").value
    const pin = document.getElementById("pin").value

    if (email == "" || password == "" || age == "" || pin == "") {
        alert("field cannot be empty")
    } else if (email.includes("@gmail.com") != true) {
        alert("enter valid email")
    } else if (pin.length != 6) {
        alert("pin code must be 6 digits")
    } else if (age.isInteger() != false && pin.isInteger() != false) {
        alert("incorrect pin or age")
    } else if (password.length < 8) {
        alert("must contain atlest 8 charecters")
    } else if (emailRegex.test(email)!=true) {
        alert("enter valid email")
    }
}