const conteiner = document.querySelector(".conteiner");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const iconeMenu = document.querySelector("#icone");
const LinksMenu = document.querySelector(".links");
const theme = document.querySelector(".theme");
const A = document.querySelectorAll("a");
const I = document.querySelectorAll("i");

let themeWhite = false;


iconeMenu.addEventListener("click", abrirMenu);
theme.addEventListener("click", mudarTema);

function abrirMenu() {
    conteiner.style.gridTemplateColumns = "0% auto";
    conteiner.style.gridTemplateRows = "25% auto 5%";
    LinksMenu.style.display = "flex";
    iconeMenu.style.display = "none";
    main.addEventListener("click", ()=>{
        conteiner.style.gridTemplateColumns = "auto 80%";
        conteiner.style.gridTemplateRows = "8% auto 5%";
        LinksMenu.style.display = "none"
        iconeMenu.style.display = "flex";
    })
}

function mudarTema() {
    if(!themeWhite){
        conteiner.style.background = "url('fundo-de-design-texturizado-simples-branco.jpg') repeat fixed";

        A.forEach(function(link) {
            link.style.color = 'black';
        });
        I.forEach(function(link) {
            link.style.color = 'black';
        });

        themeWhite = true;
    }else {
        conteiner.style.background = "url('3418448.jpg') repeat fixed";
        A.forEach(function(link) {
            link.style.color = 'white';
        });
        I.forEach(function(link) {
            link.style.color = 'white';
        });
        themeWhite = false;
    }
}