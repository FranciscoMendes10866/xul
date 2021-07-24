import app from "./app.js";
import { connection } from "./database/index.js";

const start = async () => {
  try {
    await connection();
    await app.listen(3333);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
