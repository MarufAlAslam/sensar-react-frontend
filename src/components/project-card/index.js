/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { Dropdown } from "antd";
import noLogo from "../../assets/img/no_logo.png";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        View
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Edit Product
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Status Proof
      </a>
    ),
  },
  {
    key: "4",
    danger: true,
    label: "Delete",
  },
];

const ProjectCard = ({ project }) => {
  console.log("project", project.data);
  const [customer, setCustomer] = React.useState([]);
  const [supplier, setSupplier] = React.useState([]);
  

  useEffect(() => {
    fetch(
      `https://sensar.vercel.app/api/v1/customer/${project?.data?.companyName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        setCustomer(res);
      });
  }, [project.data.companyName]);

  useEffect(() => {
    fetch(
      `https://sensar.vercel.app/api/v1/supplier/${project?.data?.supplierName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        setSupplier(res);
      });
  }, [project.data.supplierName]);

  // console.log("customer", customer);

  return (
    <div className="p-[20px] bg-white rounded-[10px] text-center">
      <div className="text-right">
        {/* <button className="btn">
          <FaEllipsisH className="text-[#a098ae]" />
        </button> */}
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <FaEllipsisH className="text-[#a098ae] ml-auto block" />
          </a>
        </Dropdown>
      </div>
      <img
        src={customer && customer?.logo === "" ? noLogo : customer?.logo}
        className="block mx-auto mb-5 w-[80px]"
        alt=""
      />
      <p className="text-sm text-[#a098ae]">customer</p>
      <p className="text-blue text-lg font-bold">{customer?.companyName}</p>
      <p className="text-sm text-[#a098ae]">supplier</p>
      <img
        src={supplier && supplier?.logo === "" ? noLogo : supplier?.logo}
        className="w-[30px] mx-auto mt-2"
        alt=""
      />

      {/* <p className="text-orange-600 mt-3 flex text-sm justify-center items-center gap-1">
        {project.status} <FaChevronDown />
      </p> */}
    </div>
  );
};

export default ProjectCard;
