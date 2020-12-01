function adicionar_turma() {
    var username = document.getElementById("turma").value;
    var password = document.getElementById("professor").value;
    location.reload()
}


function adicionar_aluno() {
    var turma = document.getElementById("turma").value;
    var professor = document.getElementById("professor").value;

    window.location = "add_aluno.html";
    return false;
}


function salvar_aluno() {
    var nome = document.getElementById("nome").value;
    var numero = document.getElementById("numero").value;

    window.location = "add_turma.html";
    return false;
}


function adicionar_responsavel() {
    window.location = "add_responsavel.html";
    return false;
    
}


function salvar_responsavel() {
    var nome_resp = document.getElementById("responsavel").value;
    var celular = document.getElementById("celular").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;

    window.location = "add_aluno.html";
    return false;
}


function salvar_turma() {
    var turma = document.getElementById("turma").value;
    var professor = document.getElementById("professor").value;
    window.location = "turmas.html"
}


// exemplo

// function validar(){
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     var loginErrorMsg = document.getElementById("erro");
//     if ( username == "usuario" && password == "senha"){
//         window.location = "inicio_professor.html";
//         return false;
//     }
//     else{
//         loginErrorMsg.className = "aparece";
//         // location.reload()
        
//         return false;
//     }
// }


// function erro(){
//     window.location = "msg_erro.html";
// }
