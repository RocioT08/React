import "@testing-library/jest-dom";
import { fetchDataAwait, fetchUserDataAwait } from "../../base/11-async-await";

describe("11-async-await", () => {
  test("should return an object as response await", async () => {
    const data = await fetchDataAwait();
    // console.log("..data = ", data, "--->", typeof data);

    expect(typeof data).toBe("object");
  });

  test("should return Not Found error when id does not exist await", async () => {
    const idParam = -1;
    const data = await fetchUserDataAwait(idParam);
    const { message } = data;

    expect(message).toContain("Not Found");
  });
});
