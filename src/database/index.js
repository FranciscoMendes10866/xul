import { createConnection } from "typeorm";

import { BookEntity } from "../Models/book.js";

export const connection = async () => {
  return await createConnection({
    name: "default",
    type: "sqlite",
    database: "src/database/dev.db",
    entities: [BookEntity],
    logging: true,
    synchronize: true,
  });
};
