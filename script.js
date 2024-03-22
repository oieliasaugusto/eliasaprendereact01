let dia = "amanheceu";

if (dia=="amanheceu") {
console.log ("Bom dia! Está claro.")
}

else {
console.log ("Boa noite! Agora está de noite.")
}

let n=2;

for (let n=2; n <=20; n+=2) { console.log (n) }

// function mensagem = o nome da função a ser ativa
// (frase) = parâmetro definido para essa função

function mensagem (frase) {
console.log (frase)
}
mensagem ("Essa é uma mensagem exibida apenas no console.");

function nome (meuNome) {
console.log (`Meu nome é `+meuNome)
}
nome ("Elias");

function sobreMim (Nome, Idade, estiloMusical) {
    console.log (`Meu nome é `+Nome+`. `)
    console.log (`Minha idade é `+Idade+`. `)
    console.log (`E o meu estilo musical favorito é `+estiloMusical+`.`)
    }
    sobreMim ("Elias Augusto", "26", "Indie");

function favoritos (Filme, Musica) {
    console.log (`Meu filme favorito é `+Filme+`. `)
    console.log (`Minha música favorita é `+Musica+`. `)
    }
    favoritos ('"A Chegada"', '"November - Max Ritcher"');
function triplica(numero) {
    return numero * 3;
}
const numero = 4;
const triplo = triplica(numero);
console.log ("O triplo de",numero,"é",triplo);

function maiorQ10 (numero) {
    return numero > 10; 
}
console.log (maiorQ10(25));
console.log (maiorQ10(1));

// Não havia observado os nomes antes, fiz com frutas e fiquei com receio de apagar tudo
let frutas = ["morango", "uva", "manga", "pêra", "acerola"]
frutas.unshift ("banana");
frutas.pop();
frutas.push("jabuticaba","melão");
frutas.shift();
frutas.splice(3,0,"melancia");
console.log (frutas);

let numeros = [7,5,6,3,8,9,2,1,4];
console.log(numeros.sort());
