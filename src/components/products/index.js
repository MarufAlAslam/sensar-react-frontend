import React from "react";

import customer1 from "../../assets/img/customer1.png";
import customer2 from "../../assets/img/customer2.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ProductCard from "../product-card";

const AllProducts = () => {
  const customers = [
    {
      id: 1,
      logo: customer1,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 2,
      logo: customer2,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {customers.map((customer) => (
          <ProductCard customer={customer} key={customer.id} />
        ))}
      </div>
      <div className="flex w-full mt-5 justify-between items-center">
        <p className="text-sm pinkish">
          Showing <span className="text-blue">1-5</span> from{" "}
          <span className="text-blue">100</span> data
        </p>
        <div className="pagination text-right flex justify-end items-center gap-3">
          <button className="">
            <FaCaretLeft className="text-3xl pinkish" />
          </button>
          <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
            1
          </button>
          <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
            2
          </button>
          <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
            3
          </button>
          <button className="">
            <FaCaretRight className="text-3xl pinkish" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
