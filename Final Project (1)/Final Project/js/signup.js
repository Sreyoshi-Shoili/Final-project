$(document).ready(function() {
    $("#spinner").hide()
})

const registerBtn = document.getElementById("signup").onclick = ((e) => {
    e.preventDefault()

    const username = document.getElementById("name").value
    const password = document.getElementById("pass").value
    const re_password = document.getElementById("re_pass").value
    const email = document.getElementById("email").value


    // verify username
    if (username.length >= 20 || username.length <= 3) {
        $("#name").css("border-bottom", "solid red 2px");
        $("#error-name").text("Username must be atleast 4 characters and less than 20 characters.")
        return false
    }


    if (password.length < 6) {
        $("#pass").css("border-bottom", "solid red 2px");
        $("#error-pass").text("Password must be atleast 6 characters")
        return false
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        $("#email").css("border-bottom", "solid red 2px")
        $("#error-email").text("Invalid email address format")
        return false
    }

    if (password !== re_password) {
        $("#pass").css("border-bottom", "solid red 2px")
        $("#re_pass").css("border-bottom", "solid red 2px")
        $("#error-pass").text("Passwords do not match")
        $("#error-re_pass").text("Passwords do not match")
        return false
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
                    window.location.href = "/login.html"
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