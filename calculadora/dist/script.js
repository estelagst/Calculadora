var operacao = prompt("Qual operação você deseja fazer? Digite 1 para  soma, 2 para subtração, 3 para multiplicação e 4 para divisão:   ");
var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "));
var segundoValor = parseFloat(prompt("Digite o segundo valor: "));
var resultado = 0;
var operador = '';
if (operacao == 1) {
  resultado = primeiroValor + segundoValor;
  operador = ' + ';
} else if (operacao ==2) {
  resultado = primeiroValor - segundoValor;
  operador = " - ";
} else if (operacao == 3) {
  resultado = primeiroValor * segundoValor;
  operador = " x ";
} else if (operacao == 4) {
  resultado = primeiroValor / segundoValor;
  operador = " / ";
}  else {
  alert("Opção inválida");
}

 document.write("<h2>" + primeiroValor + operador + segundoValor + " = " + resultado.toFixed(2) + "</h2>");




//if = se
// else = senão
// else if = senão se