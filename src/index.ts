import express from "express";
import cors from "cors";
import { addUser, getUsers, loginUser } from "./services/users.service.js";
import { getTodayMatches } from "./services/matches.service.js";

import bodyParser from "body-parser";
const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/users", async (req, res) => {
  const users = await getUsers();
  res.json(users);
});
app.get("/todayMatches", async (req, res) => {
  const matches = await getTodayMatches();

  res.status(200).send(matches);
});

app.post("/login", async (req, res) => {
  const connectUser = await loginUser(req.body);
  if (connectUser) {
    res.json({ success: true, message: "Login successful", user: connectUser });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.post("/register", async (req, res) => {
  await addUser(req.body);

  res.json({ success: true, message: "User created successfully" });
});
