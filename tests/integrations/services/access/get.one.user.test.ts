import { api, db, token } from "../../../jest.setup";


describe("Auht Test", () => {

  test("Get one user with invalid token should fail", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api
      .get(`/api/auth/user/${user?.id}`)
      .set("Cookie", `disruptiveToken=invalidtoken`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });

  test("Get one user without token should fail", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api.get(`/api/auth/user/${user?.id}`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });

  test("Get one user with non-existent user ID should fail", async () => {
    const response = await api
      .get(`/api/auth/user/nonexistentuserid`)
      .set("Cookie", `disruptiveToken=${token}`);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });
  test("get one user...[!]", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api
      .get(`/api/auth/user/${user?.id}`)
      .set("Cookie", `disruptiveToken=${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("info");
  });
});




