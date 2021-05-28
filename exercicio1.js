//1 - crie um algoritmo que imprime no console de 10 a 60, iterando a cada 5, exceto para os numeros 35 e 45 que irão ser substituidos pela palavra "PULOU".

let contando = 5;

while (contando <= 55) {
  contando += 5;

  if (contando === 35 || contando === 45) {
    console.log("Pulou");
    continue;
  }
  console.log(contando);
}
