import React, { useEffect } from "react";

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import ProjectCard from "../project-card";

const AllProjects = () => {
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => {
        setProjects(res);
      });
  }, []);
  // const customers = [
  //   {
  //     id: 1,
  //     logo: customer1,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 2,
  //     logo: customer2,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 3,
  //     logo: customer3,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 4,
  //     logo: customer4,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 5,
  //     logo: customer5,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 6,
  //     logo: customer6,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 7,
  //     logo: customer7,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 8,
  //     logo: customer8,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 9,
  //     logo: customer9,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 10,
  //     logo: customer10,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 11,
  //     logo: customer11,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  //   {
  //     id: 12,
  //     logo: customer12,
  //     supplier: supplier,
  //     name: "Hermes",
  //     provider: "Stella Mezmi",
  //     phone: "123456789",
  //     email: "test@test.com",
  //     status: "in progress",
  //   },
  // ];
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
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
