import { api, db, token } from "../../../jest.setup";
it("Get one role", async () => {
  const role = await db.roles.findFirst({
    orderBy: {
      createdAt: "desc",
    },
  });
  const response = await api
    .get(`/api/roles/${role?.id}`)
    .set("Cookie", `disruptiveToken=${token}`);

  expect(response.status).toBe(200);
  expect(response.body.info).toHaveProperty("role");
});
