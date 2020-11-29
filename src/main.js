
const loginForm = document.getElementById("login");
const loginButton = document.getElementById("confirma");
const loginErrorMsg = document.getElementById("erro");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const usuario = loginForm.usuario.value;
    const senha = loginForm.senha.value;

    if (username === "usuario" && password === "senha") {
        alert("Sucesso!");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})