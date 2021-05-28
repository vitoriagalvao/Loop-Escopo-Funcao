//4 - Utilize a estrutura de repetição for para imprimir no console conforme instruções abaixo:
//a) números de 1 a 100
//b) quando chegar no número 50 interrompa a instrução e pare o loop
//c) quando chegar no número 50 pule a instrução

for (let imprimindo = 1; imprimindo <= 100; imprimindo++) {
  console.log(imprimindo);
}

for (let imprimindo = 1; imprimindo <= 100; imprimindo++) {
  if (imprimindo === 50) {
    break;
  }
  console.log(imprimindo);
}

for (let imprimindo = 1; imprimindo <= 100; imprimindo++) {
  if (imprimindo === 50) {
    console.log("Pulei");
    continue;
  }
  console.log(imprimindo);
}
