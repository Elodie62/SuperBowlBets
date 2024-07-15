import express from "express";
import { getUsers } from "./services/users.service.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  console.log("users", users);
  res.json(users);
});
