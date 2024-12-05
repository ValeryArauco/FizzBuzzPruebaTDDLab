function esDivisibleEntreTres(numero) {
  return numero % 3 === 0;
}

function esDivisibleEntreCinco(numero) {
  return numero % 5 === 0;
}


function obtenerFizzBuzz(numero) {
  let resultado = numero;
  if (esDivisibleEntreCinco(numero) && esDivisibleEntreTres(numero)) {
    resultado = "FizzBuzz";
  } 
  else if (esDivisibleEntreTres(numero)) {
    resultado = "Fizz";
  }
  else if (esDivisibleEntreCinco(numero)) {
    resultado = "Buzz";
  }
  return resultado
}

export default obtenerFizzBuzz;