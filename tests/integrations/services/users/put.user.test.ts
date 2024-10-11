import { api, db, token } from "../../../jest.setup";

describe("User Test", () => {

  test("put user...[!] ", async () => {
    const user = await db.users.findFirst({
      orderBy: {
        updatedAt: "desc",
      },
    });

    const userData = {
      name: "Pedro",
      lastName: "Pascal",
      sex: "Female",
      phoneNumber: "3000000000",
    };
    const response = await api
      .put(`/api/users/${user?.id}`)
      .send(userData)
      .set("Cookie", `disruptiveToken=${token}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("info");
  });
});