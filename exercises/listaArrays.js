const conteiner = document.querySelector(".conteiner");
const btn = document.querySelector("#btn");
const btnExcluir = document.querySelector("#btnEx");
const pesquisarExcluir = document.querySelector("#excluirFuncionario");
const buscar = document.querySelector("#pesquisar");
const filtrar = document.querySelector("#filtrar");
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
    },

    imprimirFuncionarios: (array)=>{

        conteiner.innerHTML = "";
        array.forEach((pessoa) =>{

            let div = document.createElement("div");

            let h3 = document.createElement("h3");
            h3.textContent = `Funcionario`;

            let ul = document.createElement("ul");

            let liNome = document.createElement("li")
            liNome.textContent = "Nome: " + pessoa.nome;

            let liIdade = document.createElement("li")
            liIdade.textContent = `Idade: ${pessoa.idade}`;

            let liSexo = document.createElement("li")
            liSexo.textContent = "Sexo: " + pessoa.sexo;

            let liMatricula = document.createElement("li")
            liMatricula.textContent = `Matricula: ${pessoa.matricula}`;

            conteiner.appendChild(div);
            div.appendChild(h3);
            ul.appendChild(liNome);
            ul.appendChild(liIdade);
            ul.appendChild(liSexo);
            ul.appendChild(liMatricula);
            div.appendChild(ul);
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
    }
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
})

