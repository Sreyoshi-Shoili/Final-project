var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "123"){
alert ("Login successfully");
window.location = "dash.html"; // Redirecting to other page.
return false;
}
else{

alert("Email and Password are not correct ");
window.location = "admin_Login.html";
}
}