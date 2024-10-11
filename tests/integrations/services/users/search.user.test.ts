import { api, token } from "../../../jest.setup";

describe("User Test", () => {
  
  test("search user...[!] ", async () => {
    const search = "";
    const isActive = true;
    const response = await api
      .get(`/api/users/search/?search=${search}&isActive=${isActive}`)
      .set("Cookie", `disruptiveToken=${token}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");  });
});