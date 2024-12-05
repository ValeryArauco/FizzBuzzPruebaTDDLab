function esDivisibleEntreTres(numero) {
  let message = '';
  if (numero % 3 === 0){
    message = 'Fizz';
  }
  return message
}

function esDivisibleEntreCinco(numero) {
  let message = '';
  if (numero % 5 === 0){
    message = 'Buzz';
  }
  return message;
}


function obtenerFizzBuzz(numero) {
  let resultado = numero;
  resultado = esDivisibleEntreTres(numero) + esDivisibleEntreCinco(numero);
  if (resultado === ''){
    resultado = numero;
  }
  return resultado
}

export { obtenerFizzBuzz, esDivisibleEntreTres, esDivisibleEntreCinco };