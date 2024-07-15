import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "Super_Bowl",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

export default db;
