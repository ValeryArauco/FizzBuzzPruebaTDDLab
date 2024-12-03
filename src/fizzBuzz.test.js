import obtenerFizzBuzz from "./fizzBuzz.js";

describe("obtener fizz buzz para un numero", () => {
  it("deberia obtener fizz para un numero divisible entre 3", () => {
    expect(obtenerFizzBuzz(3)).toEqual("fizz");
  });
});