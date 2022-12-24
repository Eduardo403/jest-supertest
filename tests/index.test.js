import app from "../src/app.js";
import request from "supertest";
describe("get / tasks", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("post / tasks", () => {
  const newTask = {
    title: "test tasks",
    description: "test description",
  };
  //should respond with a 200 status code
  test("should respond with a 200 status code ", async () => {
    const respond = await request(app).post("/tasks").send(newTask);
    expect(respond.statusCode).toBe(200);
  });
  //should respond with a content type of applicaton /json
  test("should have a content-type: application/json in header", async () => {
    const response = await request(app).post("/tasks").send(newTask);
    expect(response.headers["Content-Type"]).toBe("json");
  });
  //should respond with a json object containing the new tasks with an id
  test("should respond with a tasks id", async () => {
    const respond = await request(app).post("/tasks").send(newTask);
    expect(respond.body.id).toBeDefined();
  });
  //when title and description is missing
});
