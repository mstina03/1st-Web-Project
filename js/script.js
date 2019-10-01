function clickHandler() {
    var name = document.getElementById('nameid');
    var email = document.getElementById('emailid');
    var message = document.getElementById('msgid');

    if (name.value != "" && email.value != "" && message.value != "") {
        alert("Thank you for your inquiry " + name.value + "!");
    }

}