import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import CollectionCard from "../collection-card";

const ProductDetails = ({ collections }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {collections.map((customer) => (
          <CollectionCard customer={customer} key={customer.id} />
        ))}
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:mb-0 mb-5 w-full mt-5 justify-between items-center">
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

export default ProductDetails;
