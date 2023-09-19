/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaChevronDown, FaEllipsisH } from "react-icons/fa";
import { Dropdown } from "antd";

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

const ProjectCard = ({ customer }) => {
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
      <img src={customer.logo} className="block mx-auto mb-5 w-[80px]" alt="" />
      <p className="text-sm text-[#a098ae]">customer</p>
      <p className="text-blue text-lg font-bold">{customer.name}</p>
      <p className="text-sm text-[#a098ae]">supplier</p>
      <img src={customer.supplier} className="w-[30px] mx-auto mt-2" alt="" />

      <p className="text-orange-600 mt-3 flex text-sm justify-center items-center gap-1">
        {customer.status} <FaChevronDown />
      </p>
    </div>
  );
};

export default ProjectCard;
