import express, { json } from "express";

const app = express();
app.use(json());
app.get("/ping", (req, res) => {
  try {
    res.send("hello word");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
app.get("/tasks", (req, res) => {
  try {
    res.json([]);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default app;
