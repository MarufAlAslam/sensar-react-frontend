import React from "react";
import { FaEllipsisH, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerCard = ({ customer }) => {
  return (
    <div className="p-[20px] bg-white rounded-[10px] text-center">
      <div className="text-right">
        <button className="btn">
          <FaEllipsisH className="text-[#a098ae]" />
        </button>
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
