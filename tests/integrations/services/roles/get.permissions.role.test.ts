import { api, db, token } from "../../../jest.setup";

describe("Permissions Controller Tests", () => {
  // let moduleId: string | null = null;

  // beforeAll(async () => {
  //   const module = await db.modules.findFirst();
  //   moduleId = module?.id || null;
  // });

  // it("Get permissions for a role with invalid role ID should fail", async () => {
  //   const invalidRoleId = "invalid-role-id";

  //   const response = await api
  //     .get(`/api/permissions/${invalidRoleId}`)
  //     .set("Cookie", `disruptiveToken=${token}`);

  //     console.log("get permission response", response.body)

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("errors");

  //   expect(response.body.errors[0]).toHaveProperty("message");
  //   expect(response.body.errors[0]).toHaveProperty("type");
  //   expect(response.body.errors[0]).toHaveProperty("value");
  //   expect(response.body.errors[0]).toHaveProperty("path");
  //   expect(response.body.errors[0]).toHaveProperty("location");

  // });

  // it("Get permissions for a non-existent role should fail", async () => {
  //   const nonExistentRoleId = "nonexistentroleid";

  //   const response = await api
  //     .get(`/api/permissions/${nonExistentRoleId}`)
  //     .set("Cookie", `disruptiveToken=${token}`);

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("errors");
  //   expect(response.body.errors[0]).toHaveProperty("message");
  //   expect(response.body.errors[0]).toHaveProperty("type");
  //   expect(response.body.errors[0]).toHaveProperty("value");
  //   expect(response.body.errors[0]).toHaveProperty("path");
  //   expect(response.body.errors[0]).toHaveProperty("location");
  // });

  // it("Get permissions for a role without authentication should fail", async () => {
  //   const role = await db.roles.findFirst({
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });

  //   const response = await api.get(`/api/permissions/${role?.id}`);

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("errors");
  //   expect(response.body.errors[0]).toHaveProperty("message");
  // });

  // it("Get permissions for a role with invalid token should fail", async () => {
  //   const role = await db.roles.findFirst({
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });

  //   const response = await api
  //     .get(`/api/permissions/${role?.id}`)
  //     .set("Cookie", `disruptiveToken=invalidtoken`);

  //   expect(response.status).toBe(400);
  //   expect(response.body).toHaveProperty("errors");
  //   expect(response.body.errors[0]).toHaveProperty("message");
  //   expect(response.body.errors[0]).toHaveProperty("type");
  //   expect(response.body.errors[0]).toHaveProperty("value");
  //   expect(response.body.errors[0]).toHaveProperty("path");
  //   expect(response.body.errors[0]).toHaveProperty("location");
  // });

  // it("Get permissions for a role", async () => {
  //   const role = await db.roles.findFirst({
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   });
  //   const response = await api
  //     .get(`/api/permissions/${role?.id}`)
  //     .set("Cookie", `disruptiveToken=${token}`);

  //   expect(response.status).toBe(200);
  //   expect(response.body).toHaveProperty("info");
  //   expect(response.body).toHaveProperty("message");

  // });
});