import React from "react";

import customer1 from "../../assets/img/customer1.png";
import customer2 from "../../assets/img/customer2.png";
import customer3 from "../../assets/img/customer3.png";
import customer4 from "../../assets/img/customer4.png";
import customer5 from "../../assets/img/customer5.png";
import customer6 from "../../assets/img/customer6.png";
import customer7 from "../../assets/img/customer7.png";
import customer8 from "../../assets/img/customer8.png";
import customer9 from "../../assets/img/customer9.png";
import customer10 from "../../assets/img/customer10.png";
import customer11 from "../../assets/img/customer11.png";
import customer12 from "../../assets/img/customer12.png";
import CustomerCard from "../customer-card";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const AllCustomers = () => {
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
    {
      id: 3,
      logo: customer3,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 4,
      logo: customer4,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 5,
      logo: customer5,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 6,
      logo: customer6,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 7,
      logo: customer7,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 8,
      logo: customer8,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 9,
      logo: customer9,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 10,
      logo: customer10,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 11,
      logo: customer11,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
    },
    {
      id: 12,
      logo: customer12,
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
          <CustomerCard customer={customer} key={customer.id} />
        ))}
      </div>
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
    </>
  );
};

export default AllCustomers;
