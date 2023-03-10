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

app.post("/tasks", (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description)
      throw new Error("title and description is required");
    res.status(200).json({ id: Math.random(), title, description });
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default app;
