const conteiner = document.querySelector(".conteiner");
const btn = document.querySelector("#btn");
const btnExcluir = document.querySelector("#btnEx");
const pesquisarExcluir = document.querySelector("#excluirFuncionario");
const buscar = document.querySelector("#pesquisar");
const filtrar = document.querySelector("#filtrar");
const valorOriginalFiltrar = filtrar.value;
const addFunc = document.querySelector("#btnAddFunc");


let arrayPessoa = [];

class Pessoa {
    constructor(nome,idade,sexo,matricula){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.matricula = matricula;
    }
}

let pessoa1 = new Pessoa("diego",22,'m',2233);
let pessoa2 = new Pessoa("emilly",20,'f',2299);
let pessoa3 = new Pessoa("sergio",15,'m',2255);
let pessoa4 = new Pessoa("alek",25,'m',2277);
let pessoa5 = new Pessoa("danificada",13,'f',2155);
let pessoa6 = new Pessoa("oisumida",69,'f',1277);
let pessoa7 = new Pessoa("danificada",13,'f',2155);
let pessoa8 = new Pessoa("oisumida",69,'f',1277);
let pessoa9 = new Pessoa("danificada",13,'f',2155);
let pessoa10 = new Pessoa("oisumida",69,'f',1277);

arrayPessoa.push(pessoa1);
arrayPessoa.push(pessoa2);
arrayPessoa.push(pessoa3);
arrayPessoa.push(pessoa4);
arrayPessoa.push(pessoa5);
arrayPessoa.push(pessoa6);
arrayPessoa.push(pessoa7);
arrayPessoa.push(pessoa8);
arrayPessoa.push(pessoa9);
arrayPessoa.push(pessoa10);


// objeto funcionarios com os metodos de add, buscar, imprimir, deletar tudo ou um, e filtrar

const Funcionarios = {

    adicionarFuncionario: (array)=>{

        let nome = prompt("Informe o nome do funcionario:");
        let idade = prompt("Informe a idade do funcionario:");
        let sexo = prompt("Informe o sexo do funcionario (M ou F):");
        let matricula = prompt("Informe a matricula(em numeros) do funcionario - EX(1111):");
        array.push(new Pessoa(nome,Number(idade),sexo,Number(matricula)));

        conteiner.innerHTML = "";
        Funcionarios.imprimirFuncionarios(array);

    },

    imprimirFuncionarios: (array)=>{

        conteiner.innerHTML = "";
        array.forEach((pessoa, indice) =>{

            if(indice === 0){

                let cabecalho = document.createElement("div");
                cabecalho.className = "divConteiner";
                cabecalho.style.backgroundColor = "#4F4F4F";
                cabecalho.style.color = "white";

                let divCabecalhoNome = document.createElement("div");

                let divCabecalhoIdade = document.createElement("div");

                let divCabecalhoSexo = document.createElement("div");

                let divCabecalhoMatricula = document.createElement("div");

                let cabecalhoNome = document.createElement("p")
                cabecalhoNome.textContent = "Nome";

                let cabecalhoIdade = document.createElement("p")
                cabecalhoIdade.textContent = "Idade";

                let cabecalhoSexo = document.createElement("p")
                cabecalhoSexo.textContent = "Sexo";

                let cabecalhoMatricula = document.createElement("p")
                cabecalhoMatricula.textContent = "Matricula";

                conteiner.appendChild(cabecalho);
                cabecalho.appendChild(divCabecalhoNome);
                cabecalho.appendChild(divCabecalhoIdade);
                cabecalho.appendChild(divCabecalhoSexo);
                cabecalho.appendChild(divCabecalhoMatricula);
                divCabecalhoNome.appendChild(cabecalhoNome);
                divCabecalhoIdade.appendChild(cabecalhoIdade);
                divCabecalhoSexo.appendChild(cabecalhoSexo);
                divCabecalhoMatricula.appendChild(cabecalhoMatricula);

            }

            let div = document.createElement("div");
            div.className = "divConteiner";

            let divNome = document.createElement("div");

            let divIdade = document.createElement("div");

            let divSexo = document.createElement("div");

            let divMatricula = document.createElement("div");

            let liNome = document.createElement("p")
            liNome.textContent = pessoa.nome;

            let liIdade = document.createElement("p")
            liIdade.textContent = `${pessoa.idade}`;

            let liSexo = document.createElement("p")
            liSexo.textContent =  pessoa.sexo;

            let liMatricula = document.createElement("p")
            liMatricula.textContent = `${pessoa.matricula}`;

            conteiner.appendChild(div);
            div.appendChild(divNome);
            div.appendChild(divIdade);
            div.appendChild(divSexo);
            div.appendChild(divMatricula);
            divNome.appendChild(liNome);
            divIdade.appendChild(liIdade);
            divSexo.appendChild(liSexo);
            divMatricula.appendChild(liMatricula);
        });
    },

    removerListaFuncionarios: (array)=>{
        array.length = 0;
        conteiner.innerHTML = "";
    },

    removerFuncionario: (array,matricula)=>{
        array.forEach((elemento,indice) => {
            if(elemento.matricula === matricula){
                array.splice(indice,1);
            }
        });
        Funcionarios.imprimirFuncionarios(array);
    },

    pesquisarFuncionario: (array,nome)=>{
        conteiner.innerHTML = "";

        let arrayPesquisar = array.filter((elemento)=>{
            return elemento.nome === nome.toLowerCase();
        });

        Funcionarios.imprimirFuncionarios(arrayPesquisar);
    },

    filtrarFuncionario: (array, event)=>{
        if(event === "idade"){

            conteiner.innerHTML = "";
            let arrayOrdenado = [...array];
            arrayOrdenado.sort((a,b) => a.idade - b.idade);
            Funcionarios.imprimirFuncionarios(arrayOrdenado);

        }else if(event === "masculino"){

            conteiner.innerHTML = "";
            let arrayOrdenado = array.filter((elemento) => {
                return elemento.sexo.toLowerCase() === "m";
            });
            Funcionarios.imprimirFuncionarios(arrayOrdenado);

        }else if(event === "feminino"){

            conteiner.innerHTML = "";
            let arrayOrdenado = array.filter((elemento) => {
                return elemento.sexo.toLowerCase() === "f";
            });
            Funcionarios.imprimirFuncionarios(arrayOrdenado);

        }else if(event === "matricula"){
            
            conteiner.innerHTML = "";
            let arrayOrdenado = [...array];
            arrayOrdenado.sort((a,b) => a.matricula - b.matricula);
            Funcionarios.imprimirFuncionarios(arrayOrdenado);

        }else if(event === "nome"){

            conteiner.innerHTML = "";
            let arrayOrdenado = [...array];
            arrayOrdenado.sort((a,b) => a.nome.localeCompare(b.nome));
            Funcionarios.imprimirFuncionarios(arrayOrdenado);

        }
    },
};

//eventos

addFunc.addEventListener("click", ()=>{
    Funcionarios.adicionarFuncionario(arrayPessoa);
});

btn.addEventListener("click", ()=>{
    Funcionarios.imprimirFuncionarios(arrayPessoa);
});

btnExcluir.addEventListener("click", ()=>{
    Funcionarios.removerListaFuncionarios(arrayPessoa);
});

pesquisarExcluir.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        Funcionarios.removerFuncionario(arrayPessoa, Number(pesquisarExcluir.value));
        pesquisarExcluir.value = "";
    }
})

buscar.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        Funcionarios.pesquisarFuncionario(arrayPessoa, buscar.value);
        buscar.value = "";
    }
})

filtrar.addEventListener("change", (e)=>{
    Funcionarios.filtrarFuncionario(arrayPessoa, e.target.value);
    filtrar.value = valorOriginalFiltrar;
})

