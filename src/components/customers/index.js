import React, { useEffect, useState } from "react";
import CustomerCard from "../customer-card";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Swal from "sweetalert2";

const AllCustomers = () => {
  const [customers, setCustomers] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const getCustomers = () => {
    fetch("https://sensar.vercel.app/api/v1/customers")
      .then((res) => res.json())
      .then((res) => {
        setCustomers(res);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    getCustomers();
  }, []);

  const deleteCard = (id) => {
    fetch(`https://sensar.vercel.app/api/v1/customer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res);
        // setCustomers(customers.filter((customer) => customer.id !== id));
        Swal.fire({
          title: "Success!",
          text: "Customer deleted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        getCustomers();
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {loading
          ? "Loading"
          : customers.map((customer) => (
              <CustomerCard
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

export default AllCustomers;
