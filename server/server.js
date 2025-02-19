import express from 'express';
import cors from 'cors';


const app = express();
const corsOptions = {
    origin: "http://localhost:5173"
}

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({PRODUCTS: [
        {
            id: 1,
            productName: "Iphone",
            price: 777.0,
            productImage: "americano"
        },
        {
            id: 2,
            productName: "Iphone2",
            price: 877.0,
            productImage: "americano"
        },
        {
            id: 3,
            productName: "Iphone3",
            price: 977.0,
            productImage: "americano"
        },
        {
            id: 4,
            productName: "Iphone3",
            price: 977.0,
            productImage: "americano"
        },
        {
            id: 5,
            productName: "Iphone3",
            price: 977.0,
            productImage: "americano"
        },
        {
            id: 6,
            productName: "Iphone3",
            price: 977.0,
            productImage: "americano"
        },
        {
            id: 7,
            productName: "Iphone3",
            price: 977.0,
            productImage: "americano"
        },
    ]})
})

app.listen(5500, () => {
    console.log('Secure Express server running on port 5500');
});