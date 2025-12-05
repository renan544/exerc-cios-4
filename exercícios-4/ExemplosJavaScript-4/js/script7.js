let somatorio = 0;
let contadora = 1;

do {
    let numero = Number(prompt("Digite um número:"));
    somatorio = somatorio + numero;
    contadora++;
} while (contadora <= 5);

console.log("A média é: " + (somatorio / 5));
