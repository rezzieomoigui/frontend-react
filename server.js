const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Sample product data
const products = [
  {
    id: 1,
    name: "Pink Kitten Heels",
    price: 45,
    image: "/images/heels.png",
    description: "Glossy satin kitten heel made for main-character entrances."
  },
  {
    id: 2,
    name: "Y2K Mini Skirt",
    price: 35,
    image: "/images/skirt.jpg",
    description: "High-waisted mini skirt for that Y2K aesthetic."
  },
  {
    id: 3,
    name: "Trimmed Fur Coat",
    price: 120,
    image: "/images/furcoat.jpg",
    description: "Perfect for cold-weather glam with a vintage touch."
  }
];

// Routes
app.get("/", (req, res) => {
  res.send(`
    <h1>Vintage Vixen API</h1>
    <ul>
      <li><a href="/products">All Products</a></li>
      <li>/products/:id — Individual Product</li>
    </ul>
  `);
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));