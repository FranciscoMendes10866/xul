import Fastify from "fastify";
import { getRepository } from "typeorm";

import { BookEntity, Book } from "./Models/book.js";

const app = Fastify();

app.get("/books", async (request, reply) => {
  const Books = getRepository(BookEntity);
  const data = await Books.find();
  return reply.send({ data });
});

app.post("/books", async (request, reply) => {
  const Books = getRepository(BookEntity);
  const book = new Book();
  book.name = request.body.name;
  book.description = request.body.description;
  book.format = request.body.format;
  const data = await Books.save(book);
  return reply.send({ data });
});

app.get("/books/:id", async (request, reply) => {
  const { id } = request.params;
  const Books = getRepository(BookEntity);
  const book = await Books.findOne(id);
  return reply.send({ book });
});

app.put("/books/:id", async (request, reply) => {
  const { id } = request.params;
  const Books = getRepository(BookEntity);
  await Books.update({ id }, { ...request.body });
  const book = await Books.findOne(id);
  return reply.send({ book });
});

app.delete("/books/:id", async (request, reply) => {
  const { id } = request.params;
  const Books = getRepository(BookEntity);
  const bookToRemove = await Books.findOne(id);
  await Books.remove(bookToRemove);
  return reply.send({ book: bookToRemove });
});

export default app;
