import { api, db, token } from "../../../jest.setup";

describe("User Test", () => {

  test("delete user...[!] ", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api
      .delete(`/api/users/${user?.id}`)
      .set("Cookie", `disruptiveToken=${token}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");  });
});
