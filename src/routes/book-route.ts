import express from 'express';
import * as bookControllers from "../controllers/book-controllers";

const router = express.Router();

router.route('/').post(bookControllers.createBook).get(bookControllers.getAllBooks);
router.route("/:id").get(bookControllers.getBook).patch(bookControllers.updateBook).delete(bookControllers.deleteBook);

export default router;