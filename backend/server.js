const express = require("express");
const cors = require("cors");
const path = require("path")
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "..", "images")));
// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Crumb & Co. by MRYM!",
        status: "Backend is running successfully"
    });
});
// Bakery products
const products = [
    // ==================== COOKIES (1–10) ====================
    {
        id: 1,
        name: "Chocolate Chip Cookies",
        category: "Cookies",
        description: "Golden cookies loaded with delicious chocolate chips.",
        price: 49,
        stock: 20,
        available: true,
        image: "/images/chocolate-chip-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 2,
        name: "maddiiee",
        category: "Cookies",
        description: "Rich cocoa cookies filled with chocolate chunks.",
        price: 59,
        stock: 20,
        available: true,
        image: "/images/double-chocolate-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 3,
        name: "saffoo",
        category: "Cookies",
        description: "Soft red velvet cookies with a delicious creamy flavour.",
        price: 59,
        stock: 20,
        available: true,
        image: "/images/red-velvet-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 4,
        name: "sannn",
        category: "Cookies",
        description: "Buttery cookies with a delightful pistachio flavour.",
        price: 69,
        stock: 20,
        available: true,
        image: "/images/pistachio-dream-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 5,
        name: "Biscoff Bliss Cookies",
        category: "Cookies",
        description: "Cookies inspired by the sweet, caramelised flavour of Biscoff biscuits.",
        price: 69,
        stock: 20,
        available: true,
        image: "/images/biscoff-bliss-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 6,
        name: "Classic Butter Cookies",
        category: "Cookies",
        description: "Crisp, golden butter cookies with a classic homemade taste.",
        price: 30,
        stock: 20,
        available: true,
        image: "/images/classic-butter-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 7,
        name: "White Chocolate Cookies",
        category: "Cookies",
        description: "Delicious cookies filled with creamy white chocolate chunks.",
        price: 59,
        stock: 20,
        available: true,
        image: "/images/white-chocolate-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 8,
        name: "Oreo herbs",
        category: "Cookies",
        description: "Chocolate cookies loaded with crunchy chocolate biscuit pieces.",
        price: 59,
        stock: 20,
        available: true,
        image: "/images/oreo-crunch-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 9,
        name: "Peanut Butter Cookies",
        category: "Cookies",
        description: "Delicious cookies with a rich and nutty peanut butter flavour.",
        price: 49,
        stock: 20,
        available: true,
        image: "/images/peanut-butter-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },
    {
        id: 10,
        name: "Salted Caramel Cookies",
        category: "Cookies",
        description: "Sweet caramel cookies balanced with a hint of salt.",
        price: 59,
        stock: 20,
        available: true,
        image: "/images/salted-caramel-cookies.jpeg",
        discount: 0,
        sizes: ["Single Cookie", "Pack of 4", "Pack of 6", "Pack of 12"]
    },

    // ==================== PASTRIES (11–20) ====================
    {
        id: 11,
        name: "Chocolate Velvet Pastry",
        category: "Pastries",
        description: "Chocolate sponge layered with smooth, creamy frosting.",
        price: 99,
        stock: 20,
        available: true,
        image: "/images/chocolate-velvet-pastry.jpeg",
        discount: 0,
        sizes: ["Single Pastry"]
    },
    {
        id: 12,
        name: "Strawberry Kiss Pastry",
        category: "Pastries",
        description: "Soft sponge layered with sweet strawberry cream.",
        price: 99,
        stock: 20,
        available: true,
        image: "/images/strawberry-kiss-pastry.jpeg",
        discount: 0,
        sizes: ["Single Pastry"]
    },
    {
        id: 13,
        name: "Pineapple Paradise Pastry",
        category: "Pastries",
        description: "Light sponge with pineapple cream and fruity flavour.",
        price: 89,
        stock: 20,
        available: true,
        image: "/images/pineapple-paradise-pastry.jpeg",
        discount: 0,
        sizes: ["Single Pastry"]
    },
    {
        id: 14,
        name: "kulsum Eclair ",
        category: "Pastries",
        description: "A delicate pastry filled with cream and topped with chocolate.",
        price: 99,
        stock: 20,
        available: true,
        image: "/images/chocolate-eclair.jpeg",
        discount: 0,
        sizes: ["Single Éclair"]
    },
    {
        id: 15,
        name: "Mumma Croissant",
        category: "Pastries",
        description: "A flaky, golden pastry with a rich buttery taste.",
        price: 99,
        stock: 20,
        available: true,
        image: "/images/butter-croissant.jpeg",
        discount: 0,
        sizes: ["Single Croissant"]
    },
    {
    id: 16,
    name: "Red Velvet Pastry",
    category: "Pastries",
    description: "Red velvet sponge paired with smooth cream frosting.",
    price: 109,
    stock: 20,
    available: true,
    image: "/images/red-velvet-pastry.jpeg",
    discount: 0,
    sizes: ["Single Pastry"]
}
];
// Products route
app.get("/api/products", (req, res) => {
    res.json({
        message: "Crumb & Co. product API is working!",
        count: products.length,
        products: products
    });
});

// Get one product by ID
app.get("/api/products/:id", (req, res) => {
    const product = products.find(
        item => item.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// Start server
app.listen(PORT, () => {
    console.log(`Crumb & Co. backend running at http://localhost:${PORT}`);
});