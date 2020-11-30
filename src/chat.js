function enviar(){
    var mensagem= document.getElementById("mensagem").value;
    var ul= document.getElementById('ul');
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(mensagem));
    li.className += "a-sub1";
    ul.appendChild(li);
    document.forms['form-chat'].reset()
    return false; 
}