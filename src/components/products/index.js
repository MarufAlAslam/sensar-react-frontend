import React, { useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ProductCard from "../product-card";

const AllProducts = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  // const customers = [
  //   {
  //     id: 1,
  //     logo: product1,
  //     name: "Name Supplier",
  //   },
  //   {
  //     id: 2,
  //     logo: product2,
  //     name: "Name Supplier",
  //   },
  // ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:mb-0 mb-5  w-full mt-5 justify-between items-center">
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
