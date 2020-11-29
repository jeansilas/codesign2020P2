function validar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginErrorMsg = document.getElementById("erro");
    if ( username == "usuario" && password == "senha"){
        // alert ("Login successfully");
        window.location = "inicio_professor.html"; // Redirecting to other page.
        return false;
    }
    else{
        location.reload()
        loginErrorMsg.style.opacity = 1;
        return false;
    }
}
