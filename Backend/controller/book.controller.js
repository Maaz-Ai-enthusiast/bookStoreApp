import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addBook = async (req, res) => {
    const { name, price, category, image, title } = req.body;

    // Validate request body
    if (!name || !price || !category || !image || !title) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const newBook = new Book({
        name,
        price,
        category,
        image,
        title,
    });

    try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "An error occurred while saving the book." });
    }
};