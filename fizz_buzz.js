/* Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero:

Para múltiplos de 3, imprime “Fizz”
Para múltiplos de 5, imprime “Buzz”
Para múltiplos de 3 y 5 respectivamente, imprime “FizzBuzz”
La función toma un número entero N como parámetro y devuelve la secuencia como un array hasta el índice N.*/

function fizz_buzz(N) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    if (i % 15 === 0) {
      //si N es múltiplo de 3 y 5 respectivamente => FizzBuzz
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      //si N es múltiplo de 3 => Fizz
      result.push("Fizz");
    } else if (i % 5 === 0) {
      //si N es múltiplo de 5 => Buzz
      result.push("Buzz");
    } else {
      //si no es múltiplo de ninguno de los anteriores => N
      result.push(i);
    }
  }
  return result;
}

console.log(fizz_buzz(75));

module.exports = fizz_buzz;
