/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dropdown } from "antd";
import React from "react";
import { FaEllipsisH, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import customer1 from "../../assets/img/customer1.png";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        View / Edit Profile
      </a>
    ),
  },
  {
    key: "2",
    danger: true,
    label: "Delete",
    // get the exact id of the customer and pass it to the handleDelete function
  },
];

// const handleDelete = (id) => {
//   fetch("https://sensar.vercel.app/api/v1/customers/" + id, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     });
// };

const SupplierCard = ({ customer }) => {
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
      <img src={customer1} className="block mx-auto mb-5 w-[80px]" alt="" />
      <p className="text-blue text-lg font-bold">{customer.companyName}</p>
      <p className="text-sm text-[#a098ae] mb-2">
        {customer.firstName + " " + customer.lastName}
      </p>
      <p className="text-sm text-[#a098ae]">{customer.category}</p>

      <div className="links w-full mt-3 flex gap-4 justify-center items-center">
        <Link
          to={"tel:" + customer.phone}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaPhoneAlt />
        </Link>
        <Link
          to={"mailto:" + customer.email}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaEnvelope />
        </Link>
      </div>
    </div>
  );
};

export default SupplierCard;
