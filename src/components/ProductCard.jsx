import DeleteIcon from "../assets/delete.svg?react";
import { EditOutlined } from "@ant-design/icons";
const ProductCard = ({ product, onEdit, onDelete }) => {
  const hasDiscount = product.discountPercentage > 0;

  return (
    <div className="relative group font-['Poppins'] bg-[#F4F5F7] w-[285px] h-[446px]  flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-[301px] object-cover"
        />
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-[#E97171] flex items-center justify-center">
            <p className="text-white font-medium text-[16px]">
              -{product.discountPercentage}%
            </p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-2xl font-semibold text-[#3A3A3A]">
          {product.name}
        </h3>
        <p className="text-gray-500 font-medium my-1">{product.category}</p>
        <div className="flex items-center gap-4">
          <p className="text-xl font-semibold text-[#3A3A3A]">
            Rp {product.discountedPrice.toLocaleString()}
          </p>
          {hasDiscount && (
            <p className="text-base text-[#B0B0B0] line-through">
              Rp {product.price.toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* Hover Overlay - Covers the entire card */}
      <div className="absolute inset-0 bg-[#3A3A3A] flex items-center justify-center opacity-0 group-hover:opacity-75 transition-opacity duration-300">
        {/* <button className="bg-white text-[#B88E2F] font-semibold py-3 px-10">
          Add to cart
        </button> */}
        <div className="flex space-x-4 text-white font-semibold mt-6 text-[16px]">
          <button
            onClick={() => onEdit(product)}
            className="flex items-center gap-1"
          >
            <EditOutlined className="w-4 h-4" />
            <span>Update</span>
          </button>
          <button
            onClick={() => onDelete(product._id)}
            className="flex items-center gap-1"
          >
            <DeleteIcon className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
