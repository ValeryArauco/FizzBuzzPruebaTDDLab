import obtenerFizzBuzz from "./fizzBuzz.js";

describe("obtener fizz buzz para un numero", () => {
  it("deberia devolver el mismo número", () => {
    expect(obtenerFizzBuzz(1)).toEqual(1);
  });

  it("deberia devolver Fizz si es dvisible entre 3", () => {
    expect(obtenerFizzBuzz(3)).toEqual('Fizz');
  });
  
  it("deberia devolver Buzz si es dvisible entre 5", () => {
    expect(obtenerFizzBuzz(5)).toEqual('Buzz');
  });

  it("deberia devolver FizzBuzz si es dvisible entre 3 y 5", () => {
    expect(obtenerFizzBuzz(15)).toEqual('FizzBuzz');
  });
});