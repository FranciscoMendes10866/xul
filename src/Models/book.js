import { EntitySchema } from "typeorm";

export class Book {
  constructor(name, description, format) {
    this.name = name;
    this.description = description;
    this.format = format;
  }
}

export const BookEntity = new EntitySchema({
  name: "Books",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    format: {
      type: String,
    },
  },
});
