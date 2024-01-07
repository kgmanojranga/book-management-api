import {Request, Response} from "express";
import {createBooks, deleteBookById, getBooks, updateBookById} from "../models/bookModel";
import {idValidChecker, nameChecker} from "../helpers/helpers";

export const createBook = async (req: Request, res: Response) => {
    try {
        const values = req.body;

        // check whether user has entered values or not
        if(values.length === 0) return res.status(400).json({
            status: 'fail',
            message: "Bad request. Please enter values"
        })

        // check whether user has entered all three name, author and rating
        if(!values.name || !values.author || !values.rating ) return res.status(400).json({
            status: 'fail',
            message: 'Bad request. name, author and rating are required'
        });

        // check whether user has entered a unique name
        const response = await nameChecker(values.name);

        if(response) {
            return res.status(400).json(response);
        }

        const book = await createBooks(values);

        return res.status(200).json({
            status: 'success',
            data: book
        })

    } catch(error) {
        res.status(400).json({
            status: 'fail'
        })
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
        res.sendStatus(400);
    }
}

export const getBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const idChecker = await idValidChecker(id);

        // check whether id is valid or incorrect
        if(idChecker.statusCode === 400 || idChecker.statusCode === 404) {
            return res.status(idChecker.statusCode).json(idChecker);
        }

        return res.status( 200).json({
            status: 'success',
            data: idChecker.data
        })

    } catch(error) {
        res.status(400).json({status: 'fail'});
    }
}

export const updateBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const values = req.body;

        const idChecker = await idValidChecker(id);

        // check whether id is valid or incorrect
        if(idChecker.statusCode === 400 || idChecker.statusCode === 404) {
            return res.status(idChecker.statusCode).json(idChecker);
        }

        // check whether user has entered a unique name of a book
        const response = await nameChecker(values.name);

        if(response) {
            return res.status(400).json(response);
        }

        // update user using given values
        const updatedBook = await updateBookById(id, values);

        return res.status(200).json({
            status: 'success',
            data: updatedBook
        })
    } catch(error) {
        console.log(error);
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const idChecker = await idValidChecker(id);

        // check whether id is valid or incorrect
        if(idChecker.statusCode === 400 || idChecker.statusCode === 404) {
            return res.status(idChecker.statusCode).json(idChecker);
        }

        // delete user
        const deletedBook = await deleteBookById(id);

        return res.status(200).json({
            status: 'success',
            data: deletedBook
        })
    } catch(error) {
        console.log(error);
    }
}
