import React, { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import SupplierCard from "../supplier-card";

const AllSupplier = () => {
  const [customers, setCustomers] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const getSuppliers = () => {
    fetch("https://sensar.vercel.app/api/v1/suppliers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getSuppliers();
  }, []);

  const deleteCard = (id) => {
    fetch(`https://sensar.vercel.app/api/v1/supplier/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res);
        // setCustomers(customers.filter((customer) => customer.id !== id));
        getSuppliers();
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {loading
          ? "Loading"
          : customers.map((customer) => (
              <SupplierCard
                customer={customer}
                deleteCard={deleteCard}
                key={customer.id}
              />
            ))}
      </div>
      {!loading && (
        <div className="flex md:flex-row flex-col md:gap-0 gap-3 md:pb-0 pb-5 w-full mt-5 justify-between items-center">
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
      )}
    </>
  );
};

export default AllSupplier;
