import express from 'express';
import {createBook} from "../controllers/book-controllers";

const router = express.Router();

router.route('/').post(createBook);
router.route("/:id")

export default router;