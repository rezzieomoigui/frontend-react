import { useState } from "react";

export default function AddProductForm({ products, setProducts }) {
  const SERVER_URL = "https://vintagevixen-server-2.onrender.com";

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.title.length < 3)
      newErrors.title = "Title must be at least 3 characters";

    if (!/^\$\d+/.test(formData.price))
      newErrors.price = "Price must start with $";

    if (formData.description.length < 5)
      newErrors.description = "Description must be at least 5 characters";

    if (!formData.image) newErrors.image = "Image required";
    if (!formData.category) newErrors.category = "Category required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    fetch(`${SERVER_URL}/api/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts([...products, data.product]);

          setSuccess("Product added successfully!");

          setFormData({
            title: "",
            price: "",
            image: "",
            description: "",
            category: "",
          });

          setErrors({});
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Product</h2>

      {success && <p className="success">{success}</p>}

      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
      <p className="error">{errors.title}</p>

      <input name="price" value={formData.price} onChange={handleChange} placeholder="$25" />
      <p className="error">{errors.price}</p>

      <input name="image" value={formData.image} onChange={handleChange} placeholder="/images/item.jpg" />
      <p className="error">{errors.image}</p>

      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <p className="error">{errors.category}</p>

      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <p className="error">{errors.description}</p>

      <button type="submit">Add Product</button>
    </form>
  );
}