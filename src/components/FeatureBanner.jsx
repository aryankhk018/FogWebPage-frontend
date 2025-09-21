import TrophyIcon from "../assets/trophy.svg?react";
import WarrantyIcon from "../assets/warranty.svg?react";
import ShippingIcon from "../assets/shipping.svg?react";
import SupportIcon from "../assets/customerSupport.svg?react";

const FeatureBanner = () => {
  const features = [
    {
      icon: <TrophyIcon className="h-[60px] w-[60px]" />,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      icon: <WarrantyIcon className="h-[60px] w-[60px]" />,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: <ShippingIcon className="h-[60px] w-[60px]" />,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: <SupportIcon className="h-[60px] w-[60px]" />,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <div className="bg-[#FAF3EA] py-16 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center lg:justify-between gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-x-3 flex-grow justify-center sm:justify-start"
          >
            {feature.icon}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-lg sm:text-xl md:text-2xl">
                {feature.title}
              </h4>
              <p className="font-['Poppins'] font-medium text-base sm:text-lg text-gray-500">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBanner;
