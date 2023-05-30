/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:

Devuelve la cadena 'zero' si el número termina en 0
Devuelve la cadena 'five' si el número termina en 5
Devuelve la cadena 'even' si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena 'odd' si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas. */

function number_cardinality(N) {
  if (N % 10 === 0) {
    return "zero"; //si N termina en 0
  } else if (N % 10 === 5) {
    return "five"; //si N termina en 5
  } else if (N % 2 === 0) {
    return "even"; //si N es par y no termina en 0
  } else {
    return "odd"; //si N es impar y no termina en 5
  }
}

console.log(number_cardinality(800)); //zero
console.log(number_cardinality(505)); //five
console.log(number_cardinality(726)); //even
console.log(number_cardinality(389)); //odd

module.exports = number_cardinality;
