import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onEdit, onDelete }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:gird-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-2xl md:w-full lg:w-full px-4 sm:w-[322px] ">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
