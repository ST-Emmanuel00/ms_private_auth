import { api } from "../../../jest.setup";

describe("Auht Test", () => {
  test("Login...[!]", async () => {
    const data = {
      email: "jane@example.com",
      password: "123456789",
    };

    const response = await api.post("/api/auth/login").send(data);
    expect(response.status).toBe(200);
    expect(response.body.info).toHaveProperty("token");
  });

  test("Login with incorrect password should fail", async () => {
    const data = {
      email: "jane@example.com",
      password: "wrongpassword",
    };

    const response = await api.post("/api/auth/login").send(data);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });

  test("Login with non-existent user should fail", async () => {
    const data = {
      email: "nonexistent@example.com",
      password: "123456789",
    };

    const response = await api.post("/api/auth/login").send(data);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");

  });

  test("Login with missing password should fail", async () => {
    const data = {
      email: "jane@example.com",
      // Password is missing
    };

    const response = await api.post("/api/auth/login").send(data);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });

  test("Login with invalid email format should fail", async () => {
    const data = {
      email: "notanemail",
      password: "123456789",
    };

    const response = await api.post("/api/auth/login").send(data);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0]).toHaveProperty("message");
  });
});
