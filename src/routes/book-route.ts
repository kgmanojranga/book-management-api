import express from 'express';
import {createBook, getAllBooks, getBook} from "../controllers/book-controllers";

const router = express.Router();

router.route('/').post(createBook).get(getAllBooks);
router.route("/:id").get(getBook);

export default router;