function check() {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var pin = document.getElementById("pin").value;
    var password = document.getElementById("password").value;

    if (name === "" || address === "" || pin === "" || password === "") {
        alert("Please fill all the entries");
        return false;
    }

    var len = pin.length;
    if (len !== 6) {
        alert("Please enter a valid 6-digit pincode");
        return false;
    }
    var len1 = password.length;
    if (len !== 8) {
        alert("Please enter a valid 6-digit password");
        return false;
    }
    return true;
}