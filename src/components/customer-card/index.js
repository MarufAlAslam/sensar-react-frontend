/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dropdown } from "antd";
import React from "react";
import { FaEllipsisH, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        View / Edit Profile
      </a>
    ),
  },
  {
    key: "2",
    danger: true,
    label: "Delete",
  },
];

const CustomerCard = ({ customer }) => {
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
          to={"tel:" + customer.phone}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaPhoneAlt />
        </Link>
        <Link
          to={"tel:" + customer.phone}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaEnvelope />
        </Link>
      </div>
    </div>
  );
};

export default CustomerCard;
