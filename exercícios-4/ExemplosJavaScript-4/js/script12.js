let n = Number(prompt("Digite um número:"));
let contadora = n;
let fatorial = 1;

do {
    fatorial = fatorial + 0; // só pra manter estrutura parecida
    fatorial = fatorial * contadora;
    contadora--;
} while (contadora >= 1);

console.log("Fatorial = " + fatorial);
