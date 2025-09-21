import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const fetchProducts = (params = {}) => {
  return API.get("/products", { params });
};

export const createProduct = (productData) => {
  return API.post("/products", productData);
};

export const updateProduct = (id, productData) => {
  return API.put(`/products/${id}`, productData);
};

export const deleteProduct = (id) => {
  return API.delete(`/products/${id}`);
};
