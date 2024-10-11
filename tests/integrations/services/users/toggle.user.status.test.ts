import { api, db, token } from "../../../jest.setup";

describe("User Test", () => {
   test("toggle user status...[!] ", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api
      .put(`/api/users/status/${user?.id}`)
      .set("Cookie", `disruptiveToken=${token}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("info");  });
});