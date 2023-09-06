import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones", () => {
  test("should return an object", () => {
    const expectedUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const receivedUser = getUser();

    expect(expectedUser).toEqual(receivedUser);
  });

  test("should return an object when pass user name", () => {
    const name = "Jose";
    const expectedUser = {
      uid: "ABC567",
      username: name,
    };

    const receivedUser = getUsuarioActivo(name);

    expect(expectedUser).toEqual(receivedUser);
  });
});
