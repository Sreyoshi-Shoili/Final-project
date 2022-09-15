$(document).ready(function() {
    $("#spinner").hide()
})
  
const registerBtn = document.getElementById("signup").onclick = ((e) => {
    e.preventDefault()

    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value
    const re_password = document.getElementById("re_pass").value
    const email = document.getElementById("email").value


    var usercheck = /^[a-zA-Z\-]+$/;
    var passwordcheck = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ ;
    var emailcheck =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //Verify Username
    if(usercheck.test(username)){
     document.getElementById('error-name').innerHTML=" ";
    }else{
     document.getElementById('error-name').innerHTML="** Username is Invalid";
     return false;
    }
    
    //Verify password
    if(passwordcheck.test(password)){
   
     document.getElementById('error-pass').innerHTML=" ";
    }else{
     document.getElementById('error-pass').innerHTML="** Password is Invalid";
     return false;
    }
    //Verify re-password
    if(passwordcheck.test(re_password)){
  
     document.getElementById('error-re_pass').innerHTML="";
    }
    else{
     document.getElementById('error-re_pass').innerHTML="** Password is not matched";
     return false;
    }
    //Verify Email
    if(emailcheck.test(email)){
     document.getElementById('error-email').innerHTML=" ";
    }
    else{
     document.getElementById('error-email').innerHTML="** Email is Invalid";
     return false;
    }
 





    firebase.firestore().collection("users").where("username", "==", username)



    {
        $("#signup").hide()
        $("#spinner").show()

        const today = new Date()

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                firebase.firestore().collection("users").doc().set({
                    username: username,
                    email: email,
                    userId: userCredentials.user.uid,
                    created_at: today.getFullYear() + " " + (today.getMonth() + 1) + " " + today.getDate()
                })
                swal({
                    title: "Sign Up",
                    text: "You have been succefully registered",
                    icon: "success",
                    button: "Login"
                }).then(function() {
                    window.location.href = "login.html"
                })
            }).catch(error => {
                $("#email").css("border-bottom", "solid red 2px")
                $("#error-email").text(error.message)
                $("#spinner").hide()
                $("#signup").show()
                return false
            })
    }

})