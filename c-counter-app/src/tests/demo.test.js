/*
Powered by: Oswaldo Tutillo
Last Update: 02/feb/2021
File Under Test: src/tests/demo.test.js
*/

describe("Test under src/tests/demo.test.js", () => {
  test("should be true", () => {
    const isActive = true;
    expect(isActive).toBeTruthy();
  });

  test("should the strings be equal", () => {
    // 1. inicializacion
    const expectedMessage = "Hello World";

    // 2. acciones
    const receivedMessage = `Hello World`;

    // 3. afirmacion
    expect(expectedMessage).toEqual(receivedMessage);
  });
});
