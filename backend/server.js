import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// });

app.get('/api/books', (req, res) => {
    const books = [
        {
            id: 1,
            title: "Book 1",
            content: "This is book 1"
        },
        {
            id: 2,
            title: "Book 2",
            content: "This is book 2"
        },
        {
            id: 3,
            title: "Book 3",
            content: "This is book 3"
        },
        {
            id: 4,
            title: "Book 4",
            content: "This is book 4"
        },
        {
            id: 5,
            title: "Book 5",
            content: "This is book 5"
        },
    ]
    res.send(books);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})