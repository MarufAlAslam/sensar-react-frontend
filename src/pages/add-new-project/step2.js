// import { Table } from "antd";
import React from "react";
import {
  FaBell,
  FaCog,
  FaPlus,
  // FaTimes,
  // FaUpload,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const gotoStep3 = () => {
    navigate("/projects/add-new/step-3");
  };
  // const dataSource = [
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "1",
  //     item: 1,
  //     file_technique: (
  //       <>
  //         <input type="file" id="f" />
  //         <label
  //           for="f"
  //           className="w-[50px] h-[50px] m-auto flex justify-center items-center border"
  //         >
  //           <FaUpload className="text-blue" />
  //         </label>
  //       </>
  //     ),
  //     model_no: "Custom NM-1",
  //     dimension: "W 2000x H1200xD600 ",
  //     material: "Wood MDF",
  //     color: "MGPU103",
  //     quantity: "1",
  //     description: (
  //       <p className="text-xs text-left w-[200px]">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
  //         suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
  //         lacus vel facilisis.{" "}
  //       </p>
  //     ),
  //     action: (
  //       <div className="flex justify-center items-center gap-3">
  //         <button className="text-white bg-red-500 w-[30px] h-[30px] flex justify-center items-center rounded-full">
  //           <FaTimes />
  //         </button>
  //       </div>
  //     ),
  //   },
  // ];

  // const columns = [
  //   {
  //     title: "Item",
  //     dataIndex: "item",
  //     key: "item",
  //   },
  //   {
  //     title: "File technique",
  //     dataIndex: "file_technique",
  //     key: "file_technique",
  //   },
  //   {
  //     title: "Model NO.",
  //     dataIndex: "model_no",
  //     key: "model_no",
  //   },
  //   {
  //     title: "Dimension(mm)",
  //     dataIndex: "dimension",
  //     key: "dimension",
  //   },
  //   {
  //     title: "Material",
  //     dataIndex: "material",
  //     key: "material",
  //   },
  //   {
  //     title: "Color",
  //     dataIndex: "color",
  //     key: "color",
  //   },
  //   {
  //     title: "Quantity",
  //     dataIndex: "quantity",
  //     key: "quantity",
  //   },
  //   {
  //     title: "",
  //     dataIndex: "description",
  //     key: "description",
  //   },
  //   {
  //     title: "",
  //     dataIndex: "action",
  //     key: "action",
  //   },
  // ];
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
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
            <p className="text-xl text-white">Step 2</p>
          </div>
        </div>
        <form action="">
          <div className="form-body bg-white p-8 rounded-b-[10px]">
            <p className="text-blue font-bold mb-4">Product database</p>
            <input
              type="text"
              placeholder="SEARCH"
              className="w-full p-2 border rounded"
              name=""
              id=""
            />
            <p className="text-blue font-bold my-4">Custom Product Product</p>
            <div className="flex justify-start items-center gap-3 mb-5">
              <button className="btn-blue flex justify-center items-center gap-2 px-5 py-3">
                <FaPlus /> <span>Product</span>
              </button>
              <Link
                to={"/projects/add-new/custom-product"}
                className="btn-blue flex justify-center items-center gap-2 px-5 py-3"
              >
                <FaPlus /> <span>Custom Product</span>
              </Link>
            </div>
            <div className="overflow-x-auto">
              {/* <Table
                dataSource={dataSource}
                className="text-center md:w-full w-[400%]"
                columns={columns}
              /> */}
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={gotoStep3}
              type="button"
              className="btn-blue px-10"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;
