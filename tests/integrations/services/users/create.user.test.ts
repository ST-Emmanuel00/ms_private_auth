import { api, authenticate, db, token } from "../../../jest.setup";
describe("User Test", () => {


  test("create new user...[!] ", async () => {

    const role = await db.roles.findFirst();

    const userData = {
      name: "Emmanuel",
      lastName: "Tabares",
      sex: "Male",
      docType: "CC",
      docNumber: "1007238447",
      email: "scosorio88@misena.edu.co",
      phoneNumber: "3218298707",
      password: "Etabares00*",
      passwordConfirmation: "Etabares00*",
      birthday: "2000-05-03T10:30:45Z",
      roleId: role?.id,
    };

    const response = await api
      .post("/api/users")
      .send(userData)
      .set("Cookie", `disruptiveToken=${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("info");
    expect(response.body).toHaveProperty("message");
  });
});
