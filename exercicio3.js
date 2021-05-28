//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function imparPar(entrada1, entrada2) {
  let resultado = entrada1 / entrada2;

  if (resultado % 2 === 0) {
    return `O resultado é ${resultado} e também é par`;
  } else {
    return "é ímpar";
  }
}
console.log(imparPar(12, 2));
