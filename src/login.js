function validar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var loginErrorMsg = document.getElementById("erro");
    if ( username == "usuario" && password == "senha"){
        window.location = "inicio_professor.html";
        return false;
    }
    else{
        loginErrorMsg.className = "aparece";
        // location.reload()
        document.forms['login-form'].reset()
        return false;
    }
}


function erro(){
    window.location = "msg_erro.html";
}
