let contadora = 1;
let maiores = 0;

do {
    let idade = Number(prompt("Digite a idade:"));
    if (idade >= 18) {
        maiores++;
    }
    contadora++;
} while (contadora <= 10);

console.log("Quantidade de maiores de idade: " + maiores);
