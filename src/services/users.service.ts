import db from "../database/db.js";

export const getUsers = async () => {
  const users = await db.query("SELECT * FROM users");
  return users;
};
