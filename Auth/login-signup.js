
function signup(e) {
    e.preventDefault();
    var userName = document.getElementById("suserName").value.trim();
    var email = document.getElementById("semail").value.trim();
    var Password = document.getElementById("spass").value.trim();

    if (!userName || !email || !Password) {
        swal({
            title: "Not Signup!",
            text: "Please Enter All Fields",
            icon: "error",
            button: "ok",
        });
        return;
    }

    var userRecord = {
        name: userName,
        email: email,
        password: Password,
    };

    var userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push(userRecord);

    localStorage.setItem("userData", JSON.stringify(userData));

    swal({
        title: "Signup Successfull" + " " + userName,
        icon: "success",
        button: "ok",
    });

    document.getElementById("suserName").value = "";
    document.getElementById("semail").value = "";
    document.getElementById("spass").value = "";
}



function login(e) {
    e.preventDefault();
    var email = document.getElementById("lemail").value.trim();
    var password = document.getElementById("lpass").value.trim();

    if (!email || !password) {
        swal({
            title: "Not Login!",
            text: "Please Enter All Fields",
            icon: "error",
            button: "ok",
        });
        return;
    }

    var userData = JSON.parse(localStorage.getItem("userData")) || [];

    var userFound = userData.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (userFound) {
        swal({
            title: "Login successfully",
            text: "Good Work",
            icon: "success",
            button: "ok",
        });

        window.location = "../Todo-Dashboard/todo.html"

        localStorage.setItem("currentLoggedinUser", JSON.stringify(userFound));
    } else {
        swal({
            title: "User Not Found!",
            text: "Please Check Your Email and Password",
            icon: "error",
            button: "ok",
        });
    }

    document.getElementById("lemail").value = "";
    document.getElementById("lpass").value = "";
}


// var userData = localStorage.getItem("user") || []
// JSON.parse(null)
// JSON.parse("[]")
// var userData = JSON.parse(localStorage.getItem("user"))
// var userData = JSON.parse(null)

// if(null){
// console.log("true hai")
// }else

// !!true
// !!false
// !!0
// !!undefined
// !![]

