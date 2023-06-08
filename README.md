# Node_Practice

## Technical Test for Admission to Formar Software Factory

### Exercises in Node.JS

1. Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero:
   Para múltiplos de 3, imprime “Fizz”
   Para múltiplos de 5, imprime “Buzz”
   Para múltiplos de 3 y 5, imprime “FizzBuzz”
   La función toma un número entero (N) como parámetro y devuelve la secuencia como un array hasta el índice N.

2. Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:
   Devuelve la cadena zero si el número termina en 0
   Devuelve la cadena five si el número termina en 5
   Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
   Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5

3. Crear la función range_vision() que, dado un entero no negativo, determine si hay al menos un dígito 1 en el entero que tiene el valor de visualización más bajo de todos los dígitos del entero.
   La función debe devolver un booleano: true cuando un dígito 1 tiene el valor de vista más bajo en el número dado, false de lo contrario.
   Imagine un número entero no negativo, digamos 34315. Cada dígito en el número entero tiene un llamado rango de visión.
   El primer dígito, 3, tiene un rango de visión de 3. En otras palabras, puede 3 "ver" 3 dígitos a cada lado de sí mismo.
   En nuestro ejemplo, puede mirar a la derecha de sí mismo y ver 4, 3 y 1. A la izquierda, no hay nada. El rango de visión de cada dígito es su propio valor.
   Ahora bien, el rango de visión de un dígito define el llamado valor de visión, que es la suma de los dígitos dentro del rango de visión.
   Entonces, el valor de visión del primer dígito, 3 es 4+3+1=8. Para el segundo dígito, 4 el valor de visión es 3+3+1+5=12.
