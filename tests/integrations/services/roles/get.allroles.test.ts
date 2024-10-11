import { api, token } from "../../../jest.setup";
it("Get all roles", async () => {
  const response = await api
    .get("/api/roles")
    .set("Cookie", `disruptiveToken=${token}`);

  expect(response.status).toBe(200);
  expect(response.body.info).toHaveProperty("roles");
  expect(response.body.info.roles).toBeInstanceOf(Array);
  expect(response.body.info.roles.length).toBeGreaterThan(0);
});
