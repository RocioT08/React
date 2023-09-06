import "@testing-library/jest-dom";
import { getSaludo } from "../../base/02-template-string";

describe("02-template-string", () => {
  test("should return an string", () => {
    const name = "Juan";
    const expectedValue = `Hola ${name}`;

    const receivedValue = getSaludo(name);
    console.log("getSaludo = ", receivedValue);

    expect(expectedValue).toEqual(receivedValue);
  });

  test("should return the defaul value Hola Carlos when parameter is not set", () => {
    const expectedValue = `Hola Carlos`;

    const receivedValue = getSaludo();
    console.log("getSaludo = ", receivedValue);

    expect(expectedValue).toEqual(receivedValue);
  });
});
