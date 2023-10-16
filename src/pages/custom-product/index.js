import React from "react";
import { FaUpload } from "react-icons/fa";

const CustomProduct = () => {
  return (
    <div>
      <form action="">
        <div className="field">
          <label htmlFor="" className="text-lg font-semibold">
            Product Database
          </label>
          <input
            type="text"
            className="border border-[#4d44b5] rounded-md w-full p-[10px] mt-[10px]"
          />
        </div>

        <div className="mt-5">
          <input type="file" name="file" id="file" />
          <label
            htmlFor="file"
            className="text-center inline-block p-3 border-2 border-dashed border-black"
          >
            <FaUpload className="block mx-auto mb-3" />
            <span>Upload File Technique</span> <br />
            <span className="text-xs text-gray-300">
              pdf, jpg, png, psg, dxf, dwg, skp, cad
            </span>
          </label>
        </div>

        <div className="mt-10">
          <label htmlFor="">Write Extra Note (optional)</label>
          <textarea
            name=""
            placeholder="Write Extra Note"
            id=""
            cols="30"
            rows="6"
            className="border border-[#4d44b5] rounded-md w-full p-[10px] mt-[10px]"
          ></textarea>
        </div>

        <div className="mt-10 text-center">
          <button className="btn-blue px-10 text-lg">ADD</button>
        </div>
      </form>
    </div>
  );
};

export default CustomProduct;
