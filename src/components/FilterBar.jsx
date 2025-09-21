import React from "react";
import FilterIcon from "../assets/filter.svg?react";
import GridIcon from "../assets/round.svg?react";
import ListIcon from "../assets/viewList.svg?react";

const FilterBar = ({
  filters,
  paginationInfo,
  onFilterChange,
  onAddProductClick,
  onFilterIconClick,
}) => {
  const startItem = (paginationInfo.currentPage - 1) * filters.limit + 1;
  const endItem = Math.min(
    startItem + filters.limit - 1,
    paginationInfo.totalProducts
  );

  return (
    <div className="bg-[#F9F1E7] font-['Poppins'] py-4 md:py-6">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center flex-wrap">
          {/* Top Row: Filter and View Options */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <button
                onClick={onFilterIconClick}
                className="flex items-center space-x-2"
              >
                <FilterIcon className="h-6 w-6 " />
                <span className="text-[20px] font-medium">Filter</span>
              </button>
            </div>

            {/* View icons - Hidden on mobile, shown on large screens */}
            <div className="hidden lg:flex items-center space-x-4">
              <GridIcon className="h-7 w-7" />
              <ListIcon className="h-6 w-6" />
              <div className="border-l-2 border-[#9F9F9F] h-9 ml-2"></div>
            </div>

            {paginationInfo.totalProducts > 0 && (
              <span className="text-[16px] mt-2 lg:mt-0 ">
                Showing {startItem}–{endItem} of {paginationInfo.totalProducts}{" "}
                results
              </span>
            )}
          </div>

          {/* Right Side: Show and Sort Options */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4 lg:mt-0 flex-wrap justify-center sm:justify-end">
            <div className="flex items-center space-x-4 hidden sm:block">
              <label htmlFor="limit" className="text-[20px] font-medium">
                Show
              </label>
              <select
                id="limit"
                name="limit"
                value={filters.limit}
                onChange={onFilterChange}
                className="w-[55px] h-[55px] text-center text-[20px] bg-white text-[#9F9F9F]"
              >
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="16">16</option>
              </select>
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <label htmlFor="sortBy" className="text-[20px] font-medium">
                Sort by
              </label>
              <select
                id="sortBy"
                name="sortBy"
                value={filters.sortBy}
                onChange={onFilterChange}
                className="w-[188px] h-[55px] px-5 text-left text-[20px] bg-white text-[#9F9F9F]"
              >
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* "Add Product" button - mobile version */}
        <div className="flex justify-center mt-4 lg:hidden">
          <button
            onClick={onAddProductClick}
            className="bg-white text-[#B88E2F] font-semibold text-[16px] py-3 px-8 hover:bg-gray-100"
          >
            Add Product
          </button>
        </div>

        {/* "Add Product" button for desktop (centered with absolute positioning) */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={onAddProductClick}
            className="bg-white text-[#B88E2F] font-semibold text-[16px] py-3 px-8 hover:bg-gray-100"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
