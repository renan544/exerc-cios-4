let contadora = 1;
let maior = -Infinity;
let menor = Infinity;

do {
    let numero = Number(prompt("Digite um número:"));

    if (numero > maior) {
        maior = numero;
    }

    if (numero < menor) {
        menor = numero;
    }

    contadora++;
} while (contadora <= 10);

console.log("Maior número digitado: " + maior);
console.log("Menor número digitado: " + menor);
