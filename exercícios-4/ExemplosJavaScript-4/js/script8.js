let contadora = 1;
let a = 0;
let b = 1;

do {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    contadora++;
} while (contadora <= 10);
