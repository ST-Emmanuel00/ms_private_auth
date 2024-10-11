import { api, db, token } from "../../../jest.setup";

describe("User Test", () => {


  test("get all user...[!] ", async () => {
    const response = await api
      .get("/api/users")
      .set("Cookie", `disruptiveToken=${token}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");  });
});