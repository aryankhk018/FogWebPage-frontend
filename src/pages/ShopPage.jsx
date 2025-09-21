import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/api";
import ShopBanner from "../components/ShopBanner";
import FilterBar from "../components/FilterBar";
import ProductForm from "../components/ProductForm";
import FilterSidebar from "../components/FilterSideBar";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination"; // You will create this next
import Loader from "../components/Loader";

const initialFilters = {
  sortBy: "default",
  limit: 8,
  page: 1,
  brandName: "",
  category: "",
  minPrice: "",
  maxPrice: "",
};
const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginationInfo, setPaginationInfo] = useState({});
  // const [filter, setFilter] = useState({
  //   sortBy: "default",
  //   limit: 16,
  //   page: 1,
  // });

  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  // Main function to fetch/refresh products
  const refreshProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts(filters);
      setProducts(response.data.products);
      setPaginationInfo({
        currentPage: response.data.currentPage,
        totalPages: response.data.totalPages,
        totalProducts: response.data.totalProducts,
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when filters change
  useEffect(() => {
    refreshProducts();
  }, [filters]);

  // Handler for filter/sort/limit changes
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
      page: 1, // Reset to first page on filter change
    }));
  };
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      page: 1,
    }));
  };
  const handleClearFilters = () => {
    setFilters(initialFilters);
    setIsSidebarOpen(false); // Also close the sidebar
  };
  // Handler for page changes from Pagination component
  const handlePageChange = (newPage) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      page: newPage,
    }));
  };

  // Modal control handlers
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // CRUD action handlers
  const handleSaveProduct = async (productData) => {
    const isEditing = !!editingProduct;
    let dataToSend = { ...productData };

    // If it's a NEW product, assign a random image
    if (!isEditing) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      dataToSend.imageUrl = `/images/${randomNumber}.png`;
    }

    // Define the API action (either updating or creating)
    const saveAction = isEditing
      ? updateProduct(editingProduct._id, dataToSend)
      : createProduct(dataToSend);

    // Use toast.promise to handle the API call and notifications
    toast.promise(
      saveAction.then(() => refreshProducts()), // refreshProducts is only called on success
      {
        loading: "Saving product...",
        success: `Product ${isEditing ? "updated" : "created"} successfully!`,
        error: (err) =>
          `Failed to save product: ${
            err.response?.data?.message || err.message
          }`,
      }
    );

    // Close the modal immediately
    handleCloseModal();
  };
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Use toast.promise for clear feedback
      toast.promise(
        deleteProduct(id).then(() => refreshProducts()), // Refresh only on success
        {
          loading: "Deleting product...",
          success: "Product deleted successfully!",
          error: (err) =>
            `Failed to delete product: ${
              err.response?.data?.message || err.message
            }`,
        }
      );
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          isSidebarOpen || isModalOpen ? "blur-sm" : ""
        }`}
      >
        <ShopBanner />
        <FilterBar
          filters={filters}
          paginationInfo={paginationInfo}
          onFilterChange={handleDropdownChange}
          onAddProductClick={handleOpenAddModal}
          onFilterIconClick={() => setIsSidebarOpen(true)}
        />

        <main className="max-w-screen-xl sm:w-full xl:mx-auto mt-9 pb-16">
          <ProductGrid
            products={products}
            onEdit={handleOpenEditModal}
            onDelete={handleDeleteProduct}
          />

          <Pagination
            currentPage={paginationInfo.currentPage}
            totalPages={paginationInfo.totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
      {/* Conditionally render the sidebar */}
      {isSidebarOpen && (
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClose={() => setIsSidebarOpen(false)}
          onClearFilters={handleClearFilters}
        />
      )}
      {/* Modal for Adding/Editing Products */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900/10 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <ProductForm
              product={editingProduct}
              onSave={handleSaveProduct}
              onCancel={handleCloseModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShopPage;
