import React from "react";
import { FaBell, FaCog, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AllCustomers from "../../components/customers";

const Customers = () => {
  return (
    <div className="customers">
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Customers</h2>
        <div className="actions text-right flex justify-end items-center gap-8">
          <button className="btn relative action-btn w-[50px] h-[50px] flex justify-center items-center text-[#a098ae] bg-white rounded-full">
            <FaBell className="text-2xl" />
            <div className="status bg-[#4d44b5] w-[8px] h-[8px] rounded-full absolute top-[10px] right-[10px]"></div>
          </button>
          <Link
            to={"/settings"}
            className="btn relative action-btn w-[50px] h-[50px] flex justify-center items-center text-[#a098ae] bg-white rounded-full"
          >
            <FaCog className="text-2xl" />
          </Link>
          <Link
            to={"/profile"}
            className="flex justify-end gap-4 text-end items-center"
          >
            <div className="">
              <p className="text-blue text-lg font-bold">Nawfel M.</p>
              <p className="text-sm pinkish">Admin</p>
            </div>
            <div className="w-[50px] h-[50px] flex justify-center items-center text-[#a098ae] bg-white rounded-full">
              <FaUser className="text-2xl" />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-3 md:p-0 p-3 md:my-7 justify-between items-center">
        <form
          action=""
          className="search flex justify-between items-center gap-3 bg-white px-6 py-3 rounded-full"
        >
          <FaSearch className="text-blue" />
          <input type="text" className="w-[300px]" name="" id="" />
        </form>

        <div className="right text-end flex justify-end items-center gap-7">
          {/* <p className="text-blue flex justify-start items-center gap-2">
            Newest <FaCaretDown className="text-xl" />
          </p> */}
          <select
            className="text-blue bg-transparent outline-none shadow-none border-none flex justify-start items-center gap-2"
            name=""
            id=""
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <Link
            to={"/customer/add-new"}
            className="btn-blue flex justify-center items-center gap-2 px-5 py-3"
          >
            <FaPlus /> <span>Customer</span>
          </Link>
        </div>
      </div>

      <AllCustomers />
    </div>
  );
};

export default Customers;
