import { useState, useEffect } from "react";
import Range from "rc-slider";
import "rc-slider/assets/index.css";
const FilterSidebar = ({
  filters,
  onFilterChange,
  onClose,
  onClearFilters,
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApply = () => {
    onFilterChange(localFilters); // Send all filters back to parent at once
    onClose();
  };
  const handleClear = () => {
    // This now calls the parent function to clear the main state
    onClearFilters();
  };
  return (
    <div
      className="fixed mt-8 inset-0 bg-gray-900/10 backdrop-blur-sm z-40"
      onClick={onClose}
    >
      <div
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 p-6 space-y-4 font-['Poppins']"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-4">Filters</h3>

        {/* Brand Name Filter */}
        <div>
          <label htmlFor="brandName">Brand</label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            value={localFilters.brandName || ""}
            onChange={handleChange} // Use local handler
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={localFilters.category || ""}
            onChange={handleChange} // Use local handler
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minPrice"
              value={localFilters.minPrice || ""}
              onChange={handleChange}
              placeholder="Min"
              className="w-1/2 p-2 border rounded"
            />
            <input
              type="number"
              name="maxPrice"
              value={localFilters.maxPrice || ""}
              onChange={handleChange}
              placeholder="Max"
              className="w-1/2 p-2 border rounded"
            />
          </div>
        </div>
        {/* ... similar changes for price inputs ... */}

        {/* The button now calls handleApply */}
        <div className="w-full mt-8 space-y-2">
          <button
            onClick={handleApply}
            className="w-full py-2 px-4 rounded bg-[#B88E2F] text-white"
          >
            Apply Filters
          </button>

          {/* --- ADD THIS BUTTON --- */}
          <button
            onClick={handleClear}
            className="w-full py-2 px-4 rounded bg-gray-200 text-black hover:bg-gray-300"
          >
            Remove All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
