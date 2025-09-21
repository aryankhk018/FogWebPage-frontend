import RightArrowIcon from "../assets/arrow.svg?react"; // An arrow icon

const ShopBanner = () => {
  return (
    <div className="relative h-[316px] w-full">
      <img
        src="/images/landing.png" // Make sure your image is here
        alt="Shop banner background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <h1 className="font-['Poppins'] text-[48px] font-medium">Shop</h1>
        <div className="flex items-center font-['Poppins'] text-[16px]">
          <span className="font-medium">Home</span>
          <RightArrowIcon className="h-5 w-5 mx-2" />
          <span className="font-light">Shop</span>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
