let divDinamica = document.querySelector("#conteiner-dinamico");
let divConteinerPrincipal = document.querySelector("#conteiner");
let divConteinerCentralizado = document.querySelector("#conteiner-centralizado");
let body = document.querySelector("body");
let iconeLua = document.querySelector("#icone-lua");
let iconeSol = document.querySelector("#icone-sol");
let execucao = false;

    divDinamica.addEventListener("click", function() {
        if(execucao == false){
            setTimeout(function(){
                divConteinerCentralizado.style.backgroundColor = "rgba(28, 21, 21, 0.73)";
                body.style.backgroundColor= "rgba(28, 21, 21, 0.73)";
                divDinamica.style.backgroundColor = "darkblue";
                iconeSol.style.display = "none";
                iconeLua.style.display = "flex";
            }, 200);
            divDinamica.style.animation = "animation-black .2s forwards ease";
            execucao = true;
        }else{
            setTimeout(function(){
                divConteinerCentralizado.style.backgroundColor = "white";
                body.style.backgroundColor= "white";
                divDinamica.style.backgroundColor = "orange"
                iconeSol.style.display = "flex";
                iconeLua.style.display = "none";
            }, 200);
            divDinamica.style.animation = "animation-white .2s forwards ease";
            
            execucao = false;
        }
    });