import db from "../database/db.js";

export const getTodayMatches = async () => {
  const [matches] = await db.query("SELECT * FROM matches WHERE DATE(date) = CURDATE()");
  return matches;
};
