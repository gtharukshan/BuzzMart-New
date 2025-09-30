const request = require("supertest");
const express = require("express");

const app = express();
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

describe("GET /hello", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
