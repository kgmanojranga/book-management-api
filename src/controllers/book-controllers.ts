import {Request, Response} from "express";
import {createBooks, getBookById, getBooks} from "../models/bookModel";

export const createBook = async (req: Request, res: Response) => {
    try {
        const values = req.body;
        if(!values ) return res.sendStatus(400);

        const book = await createBooks(values);

        return res.status(200).json({
            status: 'success',
            data: book
        })

    } catch(error) {
        console.log(error);

        res.sendStatus(400);
    }
}

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await getBooks();

        return res.status(200).json({
            status: 'success',
            data: books
        })
    } catch(error) {
        console.log(error);

        res.sendStatus(400);
    }
}

export const getBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const book = await getBookById(id);

        return res.status( 200).json({
            status: 'success',
            data: book
        })

    } catch(error) {
        console.log(error);
        res.sendStatus(400);
    }
}