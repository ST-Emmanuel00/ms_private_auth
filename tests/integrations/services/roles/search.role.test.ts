import { api, db, token } from "../../../jest.setup";
it("Search roles", async () => {
  const response = await api
    .get("/api/roles/search?name=superAdministrador")
    .set("Cookie", `disruptiveToken=${token}`);

  expect(response.status).toBe(200);
  expect(response.body.info).toHaveProperty("roles");
  expect(response.body.info.roles).toBeInstanceOf(Array);
});

it("Toggle role status", async () => {
  const role = await db.roles.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  const response = await api
    .put(`/api/roles/status/${role?.id}`)
    .set("Cookie", `disruptiveToken=${token}`);

  expect(response.status).toBe(200);
  expect(response.body.info).toHaveProperty("updatedRole");
  expect(response.body.info).toHaveProperty("updatedUsers");
});
