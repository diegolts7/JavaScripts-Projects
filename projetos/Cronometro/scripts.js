// variaveis

const textHorario = document.querySelector("#horario");
const botaoComecar = document.querySelector("#botaoComecar");
const botaoPausar = document.querySelector("#botaoPausar");
const botaoContinuar = document.querySelector("#botaoContinuar");
const botaoResetar = document.querySelector("#botaoResetar");
const abrirModalBtn = document.querySelector("#botaoDefinirAlarme");
const modal = document.querySelector(".modal");
const sairModalBtn = document.querySelector("#botaoAlarme");
const audio = document.querySelector("#audio");
const textAlarmeMinuto = document.querySelector("#alarmeMinuto");
const textAlarmeSegundo = document.querySelector("#alarmeSegundo");
const botaoResetarAlarme = document.querySelector("#botaoResetarAlarme");
const botaoPararAlarme = document.querySelector("#botaoPararAlarme");
textAlarmeMinuto.value = -1;
textAlarmeSegundo.value = -1;

// defindo as variaveis de atualização do cronometro
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
abrirModalBtn.addEventListener("click", abrirModal);

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
            alarme();

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

function abrirModal(){
    modalAberto();
    modal.addEventListener("click", (event) => {
        if(event.target == modal){
            modalFechado();
            textAlarmeMinuto.value = -1;
            textAlarmeSegundo.value = -1;
        }
    })
    sairModalBtn.addEventListener("click", () => {
        if(((textAlarmeMinuto.value.trim() !== "") && (!isNaN(Number(textAlarmeMinuto.value)))) && ((textAlarmeSegundo.value.trim() !== "") && (!isNaN(Number(textAlarmeSegundo.value))))){
            modalFechado();
            abrirModalBtn.style.display = "none";
            botaoResetarAlarme.style.display = "flex";
            botaoResetarAlarme.addEventListener("click", resetarAlarme);
        }
    }
    
)
}

function modalAberto(){
    modal.style.display = "flex";
    textAlarmeMinuto.value = "";
    textAlarmeSegundo.value = "";
}
function modalFechado(){
    modal.style.display = "none";
}
function rodarAudio() {
    audio.volume = 0.5;
    audio.loop = true;
    audio.play();
}
function paraAudio() {
    audio.currentTime = 0;
    audio.pause();
}
function resetarAlarme() {
    textAlarmeMinuto.value = -1;
    textAlarmeSegundo.value = -1;
    resetarAlarme.style.display = "none";
    abrirModalBtn.style.display = "flex";
}
function alarme(){
    if((Number(textAlarmeMinuto.value) === minutos) && (Number(textAlarmeSegundo.value) === segundos)){
        pausa();
        rodarAudio();
        botaoContinuar.style.display = "none";
        botaoResetar.style.display = "none";
        botaoResetarAlarme.style.display = "none";
        botaoPararAlarme.style.display = "flex";
        botaoPararAlarme.addEventListener("click", ()=>{
            paraAudio();
            botaoContinuar.style.display = "flex";
            botaoResetar.style.display = "flex";
            botaoPararAlarme.style.display = "none";
            abrirModalBtn.style.display = "flex";
            textAlarmeMinuto.value = -1;
            textAlarmeSegundo.value = -1;
           
        })
    }
}