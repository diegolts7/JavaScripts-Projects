const hora = document.querySelector("#hora");
const minuto = document.querySelector("#minuto");
const segundo = document.querySelector("#segundo");

function definirData(){

    let data = new Date();

    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    horas = formatarhorario(horas);
    minutos = formatarhorario(minutos);
    segundos = formatarhorario(segundos);

    hora.textContent = horas;
    minuto.textContent = minutos;
    segundo.textContent = segundos;
}

function formatarhorario(horario){
    return horario < 10 ? `0${horario}` : horario;
}

setInterval(definirData, 1000);

definirData();