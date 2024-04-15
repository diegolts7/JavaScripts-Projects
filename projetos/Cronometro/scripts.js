// variaveis

const textHorario = document.querySelector("#horario");
const botaoComecar = document.querySelector("#botaoComecar");
const botaoPausar = document.querySelector("#botaoPausar");
const botaoContinuar = document.querySelector("#botaoContinuar");
const botaoResetar = document.querySelector("#botaoResetar");

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo;
let pausado = false;
// eventos

botaoComecar.addEventListener("click", rodarCronometro);
botaoPausar.addEventListener("click", pausa);
botaoContinuar.addEventListener("click", continua);
botaoResetar.addEventListener("click", resetar);

// funcoes

function rodarCronometro() {
    botaoComecar.style.display = "none";
    botaoPausar.style.display = "flex";
    intervalo = setInterval(() => {
        if(pausado != true){

            atualizaCronometro();
            let minutoFormatado = formataTempo(minutos);
            let segundoFormatado = formataTempo(segundos);
            let milisegundoFormatado = formataMilisegundos(milisegundos);
            textHorario.textContent = minutoFormatado + ":" + segundoFormatado + ":" + milisegundoFormatado;

        }
    }, 10);
}

function pausa() {
    pausado = true;
    botaoPausar.style.display = "none";
    botaoContinuar.style.display = "flex";
}

function continua() {
    pausado = false;
    botaoContinuar.style.display = "none";
    botaoPausar.style.display = "flex";
}

function resetar() {
    clearInterval(intervalo);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    pausado = false;
    botaoComecar.style.display = "flex";
    botaoPausar.style.display = "none";
    botaoContinuar.style.display = "none";
    textHorario.textContent = "00:00:000";
}

function atualizaCronometro(){
    if(milisegundos<1000){
        milisegundos += 10;
    }else{
        milisegundos = 0;
        segundos++;
        if(segundos > 59){
            segundos = 0;
            minutos++;
        }
    }
}

function formataTempo(tempo){
    return tempo < 10 ? `0${tempo}` : `${tempo}`;
}
function formataMilisegundos(mili){
    if(mili < 100){
        if(mili < 10){
            return `00${mili}`;
        }
        return `0${mili}`;
    }
    return `${mili}`;
}