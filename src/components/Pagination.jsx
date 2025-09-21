const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-4 mt-16 font-['Poppins']">
      {/* Previous Button */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="h-12 px-6 rounded-lg text-xl font-light bg-[#F9F1E7] text-black hover:bg-[#e4d9ca]"
        >
          Prev
        </button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`h-12 w-12 rounded-lg text-xl font-medium transition-colors ${
            currentPage === number
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-black hover:bg-[#e4d9ca]"
          }`}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="h-12 px-6 rounded-lg text-xl font-light bg-[#F9F1E7] text-black hover:bg-[#e4d9ca]"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
