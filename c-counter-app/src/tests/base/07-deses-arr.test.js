import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base/07-deses-arr";

describe("07-deses-arr", () => {
  test("should return an array with 2 elements", () => {
    const expectedValue = ["ABC", 123];
    const receivedValue = retornaArreglo();

    expect(expectedValue).toEqual(receivedValue);
    expect(2).toBe(receivedValue.length);
  });
});
