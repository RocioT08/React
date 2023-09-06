import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("08-imp-exp", () => {
  test("should return an hero by id", () => {
    const idParameter = 1;
    const expectedValue = heroes.find((record) => record.id === idParameter);
    const receivedValue = getHeroeById(idParameter);
    expect(expectedValue).toEqual(receivedValue);

    const { id, name, owner } = receivedValue;
    expect(idParameter).toBe(id);
    expect(name).toEqual("Batman");
    expect(owner).toBe("DC");
  });

  test("should return undefined when id does not exist", () => {
    const id = -1;
    const expectedValue = undefined;
    const receivedValue = getHeroeById(id);
    expect(expectedValue).toBe(receivedValue);
  });

  test("should return an array of heroes when owner is valid", () => {
    const owner = "DC";
    const receivedValue = getHeroesByOwner(owner);
    console.log("2 receivedValue = ", receivedValue);
    expect(receivedValue.length).toBeGreaterThan(0);
  });
});
