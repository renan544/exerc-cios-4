let N = Number(prompt("Digite um número:"));
let contadora = 1;
let somatorio = 0;

do {
    if (contadora % 3 === 0) {
        somatorio = somatorio + contadora;
    }
    contadora++;
} while (contadora <= N);

console.log("Soma dos múltiplos de 3 até " + N + " = " + somatorio);
