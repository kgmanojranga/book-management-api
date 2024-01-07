import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});


export const BookModel = mongoose.model("Book", bookSchema);

// Create a book on database
export const createBooks = (values: Record<string, any>) => new BookModel(values).save();

// Get all book from database
export const getBooks = () => BookModel.find();

// Get a book using book id
export const getBookById = (id: string) => BookModel.find({_id: id});

// Get a book using book name
export const getBookByName = (name: string) => BookModel.find({name: name});

// Update a book using book id
export const updateBookById = (id: string, values: Record<string, any>) => BookModel.findByIdAndUpdate(id, values, {
    new: true,
    runValidators: true
})

export const deleteBookById = (id: string) => BookModel.findByIdAndDelete(id);