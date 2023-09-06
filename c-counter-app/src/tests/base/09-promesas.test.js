import "@testing-library/jest-dom";
import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("09-promesas", () => {
  test("should return an hero by a valid Id async", (done) => {
    const idParameter = 1;
    getHeroeByIdAsync(idParameter).then((resp) => {
      expect(heroes[0]).toBe(resp);
      done();
    });
  });

  test("should return an error message with an invalid Id async", (done) => {
    const idParameter = -1;
    const expectetedValue = "No se pudo encontrar el héroe";
    getHeroeByIdAsync(idParameter).catch((error) => {
      console.log("error", error);
      expect(expectetedValue).toBe(error);
      done();
    });
  });
});
