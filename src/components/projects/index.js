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
import supplier from "../../assets/img/supplier.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ProjectCard from "../project-card";

const AllProjects = () => {
  const customers = [
    {
      id: 1,
      logo: customer1,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 2,
      logo: customer2,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 3,
      logo: customer3,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 4,
      logo: customer4,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 5,
      logo: customer5,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 6,
      logo: customer6,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 7,
      logo: customer7,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 8,
      logo: customer8,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 9,
      logo: customer9,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 10,
      logo: customer10,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 11,
      logo: customer11,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
    {
      id: 12,
      logo: customer12,
      supplier: supplier,
      name: "Hermes",
      provider: "Stella Mezmi",
      phone: "123456789",
      email: "test@test.com",
      status: "in progress",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {customers.map((customer) => (
          <ProjectCard customer={customer} key={customer.id} />
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

export default AllProjects;
