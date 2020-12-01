function enviar(){
    var mensagem= document.getElementById("mensagem").value;
    var ul= document.getElementById('ul');
    var li = document.createElement("li");
    if( mensagem==''){
        return false;
    }
    else{
        li.appendChild(document.createTextNode(mensagem));
        li.className += "a-sub1";
        ul.appendChild(li);
        document.forms['form-chat'].reset()
        return false; 
    }
}

function enviar1(){
    var mensagem= document.getElementById("mensagem1").value;
    var ul= document.getElementById('ul1');
    var li = document.createElement("li");
    if( mensagem==''){
        return false;
    }
    else{
        li.appendChild(document.createTextNode(mensagem));
        li.className += "azul";
        ul.appendChild(li);
        document.forms['form-chat1'].reset()
        return false; 
    }
}

function enviar2(){
    var mensagem= document.getElementById("mensagem2").value;
    var ul= document.getElementById('ul2');
    var li = document.createElement("li");
    if( mensagem==''){
        return false;
    }
    else{
        li.appendChild(document.createTextNode(mensagem));
        li.className += "azul";
        ul.appendChild(li);
        document.forms['form-chat2'].reset()
        return false; 
    }
}