import {Request, Response} from "express";
import {createBooks} from "../models/bookModel";

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