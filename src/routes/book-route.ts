import express from 'express';
import {createBook, getAllBooks, getBook, updateBook} from "../controllers/book-controllers";

const router = express.Router();

router.route('/').post(createBook).get(getAllBooks);
router.route("/:id").get(getBook).patch(updateBook);

export default router;