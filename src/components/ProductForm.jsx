import { useState, useEffect } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brandName: "",
    price: "",
    discountPercentage: 0,
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">
        {product ? "Edit Product" : "Add New Product"}
      </h2>
      {/* Add form fields for name, category, brandName, price, etc. */}
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="price" className="block mb-2 text-sm font-medium">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>{" "}
      <div>
        <label htmlFor="category" className="block mb-2 text-sm font-medium">
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="brandName" className="block mb-2 text-sm font-medium">
          BrandName
        </label>
        <input
          type="text"
          name="brandName"
          id="brandName"
          value={formData.brandName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label
          htmlFor="discountPercentage"
          className="block mb-2 text-sm font-medium"
        >
          Discount %
        </label>
        <input
          type="number"
          name="discountPercentage"
          id="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {/* ... Add other fields similarly ... */}
      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="py-2 px-4 rounded bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="py-2 px-4 rounded bg-[#B88E2F] text-white"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
