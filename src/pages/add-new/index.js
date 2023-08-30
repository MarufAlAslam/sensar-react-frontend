import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddNewCustomer = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add New Customers</h2>
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

      <div className="form mt-5">
        <div className="form-header bg-[#4D43B5] py-2 px-8 rounded-t-[10px]">
          <p className="text-xl text-white">Customer Details</p>
        </div>
        <form action="" className="form-body bg-white p-8 rounded-b-[10px]">
          <div className="flex gap-5 justify-between items-start">
            <div className="lg:w-[2/12] md:w-1/2 w-full">
              <p className="text-blue font-bold">Logo Company *</p>
              <label
                htmlFor="logo"
                className="logo-uploader block text-center mt-4"
              >
                <input type="file" name="" id="logo" />
                <span className="text-sm text-gray-400">
                  Drag and drop or click here to select file
                </span>
              </label>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Name of Company *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Samantha"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">
                  First Name* (Representant)
                </p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Jakarta"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Phone *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="+1234567890"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Address *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                  name=""
                  required
                  id=""
                />
              </div>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Email *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="william@mail.com"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Last Name *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Mana William"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Country *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="+1234567890"
                  name=""
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Province *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
                  name=""
                  required
                  id=""
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCustomer;
