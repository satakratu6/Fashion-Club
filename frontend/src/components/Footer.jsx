import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Fashion Club - Your ultimate destination for trendsetting styles and
            timeless essentials. From chic casuals to sophisticated statement
            pieces, we bring you high-quality, affordable fashion to elevate
            your wardrobe. Discover the latest in style, comfort, and elegance,
            all curated to fit your unique look.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 7973263806</li>
            <li>antra1941@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ FashionClub.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;