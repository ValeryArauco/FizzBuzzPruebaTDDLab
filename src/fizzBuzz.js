function obtenerFizzBuzz(numero) {
  let resultado = numero;
  if (numero % 3 === 0) {
    resultado = "Fizz";
  }
  else if (numero % 5 === 0) {
    resultado = "Buzz";
  }
  return resultado
}

export default obtenerFizzBuzz;