/* Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero. La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario. */

//El rango de visión de un dígito es su propio valor. 1 puede ver un dígito a la izquierda y un dígito a la derecha, 2 puede ver dos dígitos y así sucesivamente.
//Así, la soledad de un dígito N es la suma de los dígitos que puede ver.
//Dado un entero no negativo, su función debe determinar si hay al menos un dígito 1 en este entero de modo que su valor de soledad sea mínimo.

function range_vision(N) {
  //se convierte de N a String, permite trabajar c/ dígitos independientemente
  const numString = Array.from(String(N), Number);

  //almacenará el valor de la + y el dígito correspondiente
  const result = [];

  //itera c/ dígito de numString
  for (let i = 0; i < numString.length; i++) {
    //en c/ iteración guarda el valor actual
    const digit = numString[i];

    //inicializa en '0' y se usa para calcular la + de los N circundantes
    let sum = 0;

    //sumará los N circundantes según el valor del dígito actual
    for (
      //nos aseguramos que no se salga del límite del array
      let j = Math.max(0, i - digit);
      //nos aseguramos que no se exceda del límite del array
      j <= Math.min(i + digit, numString.length - 1);
      j++
    ) {
      //si 'j' es !== a 'i' se + el valor del dígito correspondiente a 'sum'
      if (j !== i) {
        sum += numString[j];
      }
    }

    //se agrega un objeto que contiene el valor de 'sum' y el dígito actual
    result.push({ value: sum, digit: digit });
  }

  //encuentra el valor mínimo en 'result'
  const minValue = Math.min(...result.map((obj) => obj.value));

  //filtra los objetos en 'result' con valor = al valor mínimo encontrado, extrae los dígitos correspondientes en 'minDigits'
  const minDigits = result
    .filter((obj) => obj.value === minValue)
    .map((obj) => obj.digit);

  //verifica si alguno de los dígitos es = a 1, guarda el resultado en 'lowestValue'
  const lowestValue = minDigits.includes(1);

  //determina la cantidad de dígitos en 'minDigits', asigna texto correcto a 'digitsText'
  const sumDigits = minDigits.length;
  const digitsText = sumDigits === 1 ? "el dígito" : "los dígitos";

  //se muestra en consola el valor mínimo y los dígitos correspondientes
  console.log(
    `El valor mínimo es ${minValue} y proviene de ${digitsText} ${minDigits.join(
      " y "
    )}`
  );

  //muestra en consola true o false, dependiendo si el valor mínimo fue calculado a partir de un dígito = 1 o no respectivamente
  console.log(
    `¿El valor mínimo fue calculado a partir de un dígito igual a 1? ${lowestValue}`
  );

  return minValue;
}

const num1 = 847400;
const num2 = 718991;
const num3 = 511248;
const num4 = 246253;
const num5 = 105295;
const num6 = 646669;
const num7 = 492391;
const num8 = 34315;
range_vision(num1); //false
range_vision(num2); //true
range_vision(num3); //true
range_vision(num4); //false
range_vision(num5); //true
range_vision(num6); //false
range_vision(num7); //true
range_vision(num8); //true

module.exports = range_vision;
