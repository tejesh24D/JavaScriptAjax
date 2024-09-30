function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username == "" || email == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

function sendAjaxRequest() {
    var name = document.getElementById("name").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/ajax-submit", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("responseMessage").innerHTML = xhr.responseText;
        }
    };

    xhr.send("name=" + encodeURIComponent(name));
}
