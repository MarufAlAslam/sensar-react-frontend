/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaChevronRight, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const ProductCard = ({ customer }) => {
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
      <p className="text-blue text-lg font-bold">{customer.name}</p>
      <p className="text-sm text-[#a098ae]">{customer.provider}</p>

      <div className="links w-full mt-5 flex gap-4 justify-center items-center">
        <Link
          to={"/products/" + customer.id}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
