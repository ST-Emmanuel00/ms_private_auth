import { api, db, token } from "../../../jest.setup";
describe("Roles Controller Tests", () => {

  it("Update role", async () => {

    const updatedRoleData = {
      name: "superAdministrador",
      description: "meserito actualizado x2",
      status: false,
    };

    const role = await db.roles.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    const response = await api
      .put(`/api/roles/${role?.id}`)
      .send(updatedRoleData)
      .set("Cookie", `disruptiveToken=${token}`);

    expect(response.status).toBe(200);
    expect(response.body.info).toHaveProperty("updatedRole");
    expect(response.body.info.updatedRole.description).toBe(
      updatedRoleData.description
    );
  });
});
