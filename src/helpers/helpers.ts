import {getBookByName, getBookById} from "../models/bookModel";

export const idValidChecker = async (id: string) => {
    // check whether user id is valid
    if(id.length !== 24) return {
        status: 'fail',
        statusCode: 400,
        message: 'Not a valid id',
        data: {}
    }

    const bookExist = await getBookById(id);

    // check whether user exist or not
    if(bookExist.length === 0) return {
        status: 'fail',
        statusCode: 404,
        message: 'Book was not found',
        data: {}
    }

    return {
        status: 'success',
        statusCode: 200,
        data: bookExist,
        message: "book exists"
    }
}
export const nameChecker = async (name: string) => {
    // check whether user has entered a unique name
    if(name) {
        const existingName = await getBookByName(name);
        if(existingName.length !== 0) return {
            status: 'fail',
            message: 'Entered name exists;'
        }
    }
}