import { getGifs } from "../../helpers/ApiUtils";

describe("ApiUtils Helper Fetch", () => {
  test("should retrieve 10 elements when a category is sent", async () => {
    const gifsRetrieved = await getGifs("goku");
    expect(gifsRetrieved.length).toBe(10);
  });

  test("should retrieve 0 when category is empty", async () => {
    const gifsRetrieved = await getGifs("");
    //console.log(gifsRetrieved);
    expect(gifsRetrieved.length).toBe(0);
  });
});
