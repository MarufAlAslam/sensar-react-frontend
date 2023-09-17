import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import check from "../../assets/img/check.png";

const Step3 = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Request quote</h2>
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
          <div className="flex justify-between items-center">
            <p className="text-xl text-white">Digital Proof Details</p>
            <p className="text-xl text-white">Step 3</p>
          </div>
        </div>
        <div className="py-36 bg-white rounded-b-[10px]">
          <div className="text-center">
            <img src={check} className="mx-auto w-[60px] mb-4" alt="" />
            <h2 className="font-bold text-blue text-[35px]">REQUEST SEND</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
