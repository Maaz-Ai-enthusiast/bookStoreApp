import express from "express";
import { getBook,addBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/create", addBook);

export default router;