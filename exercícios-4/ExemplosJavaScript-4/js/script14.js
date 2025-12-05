let contadora = 1;
let nomes = [];

do {
    let nome = prompt("Digite um nome:");
    nomes.push(nome);
    contadora++;
} while (contadora <= 5);

let i = nomes.length - 1;

do {
    console.log(nomes[i]);
    i--;
} while (i >= 0);
