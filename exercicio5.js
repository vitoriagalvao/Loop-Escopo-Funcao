//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'
//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora(numero1, numero2) {
  let operacao = "divisao";
  switch (operacao) {
    case "soma":
      return numero1 + numero2;
      break;

    case "multiplicar":
      return numero1 * numero2;
      break;

    case "divisao":
      return numero1 / numero2;
      break;

    case "subtracao":
      return (numero1 -= numero2);
      break;

    default:
      console.log("Informe uma operação válida");
  }
  return `O resultado é ${operacao}`;
}
console.log(calculadora(10, 3));
