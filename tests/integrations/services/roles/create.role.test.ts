import { api, db, token } from "../../../jest.setup";

describe("Create role Tests", () => {

  test("create new role succeful...[!] ", async () => {

    const module = await db.modules.findFirst();

    const newRoleData = {
      name: "HiperAdministrador",
      description: "cajero super wow",
      permissions: [
        // Asegúrate de incluir permisos si es necesario
        {
          moduleId: module?.id, // Asegúrate de que estos IDs sean válidos en tu base de datos
          privilege: "POST",
        },
        {
          moduleId: module?.id,
          privilege: "GET",
        },
      ],
    };

    const response = await api
      .post("/api/roles")
      .send(newRoleData)
      .set("Cookie", `disruptiveToken=${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("info");
    expect(response.body).toHaveProperty("message");
  });
});


