import db from "../database/db.js";
import bcrypt from "bcrypt";

export const getUsers = async () => {
  const [users] = await db.query<any[]>("SELECT * FROM users");
  return users;
};

export const addUser = async (user: any) => {
  const salt = bcrypt.genSaltSync(10);

  const hashedPassword = bcrypt.hashSync(user.password, salt);
  if (user.role == undefined) {
    await db.query("INSERT INTO users (firstname,lastname,email, password,role, salt) VALUES (?, ?, ?, ?, ?, ?)", [
      user.firstname,
      user.lastname,
      user.email,
      hashedPassword,
      "user",
      salt,
    ]);
  }
};

export const loginUser = async (userToConnect: any) => {
  const users = await getUsers();
  const userFound = users.find((u) => u.email === userToConnect.email);

  if (userFound && bcrypt.compareSync(userToConnect.password, userFound.password)) {
    return true;
  } else {
    return false;
  }
};
