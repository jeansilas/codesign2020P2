
const loginForm = document.getElementById("login");
const loginButton = document.getElementById("confirma");
const loginErrorMsg = document.getElementById("erro");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = loginForm.usuario.value;
    const senha = loginForm.senha.value;

    if (usuario === "usuario" && senha === "senha") {
        alert("Sucesso!");
        location.href("inicio_professor.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})