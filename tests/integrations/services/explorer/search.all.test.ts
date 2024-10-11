import { api, token } from "../../../jest.setup";

describe("Explorer test", () => {
    it("Search all...[!]", async () => {
        const data = {
            searchTerm: "example",
        };

        const response = await api.post(`/api/explorer/all/?searchTerm=${data}`).set("Cookie", `disruptiveToken=${token}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("info");
        expect(response.body).toHaveProperty("message");
        expect(response.body.info).toHaveProperty("users");
        expect(response.body.info).toHaveProperty("modules");
        expect(response.body.info).toHaveProperty("roles");

    });


});
