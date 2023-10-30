// import { Table } from "antd";
import React, { useEffect } from "react";
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
    // clear local storage
    localStorage.removeItem("projectId");
    navigate("/projects/add-new/step-3");
  };
  const [projectId, setProjectId] = React.useState(null);
  const [project, setProject] = React.useState(null);

  useEffect(() => {
    const pId = localStorage.getItem("projectId");
    setProjectId(pId);
  }, []);

  useEffect(() => {
    projectId && fetch("https://sensar.vercel.app/api/v1/project/" + projectId)
      .then((res) => res.json())
      .then((res) => {
        setProject(res);
      });
  }, [projectId]);

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
              <Link to={"/projects/add-new/collection"} className="btn-blue flex justify-center items-center gap-2 px-5 py-3">
                <FaPlus /> <span>Product</span>
              </Link>
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

            {
              project?.projectDetails && <table className="table w-full mt-10 text-sm">
                <thead>
                  <tr>
                    <th className="p-3 border-b">
                      Item
                    </th>
                    <th className="p-3 border-b">
                      Model
                    </th>
                    <th className="p-3 border-b">
                      Dimension
                    </th>
                    <th className="p-3 border-b">
                      Material
                    </th>
                    <th className="p-3 border-b">
                      Quantity
                    </th>
                    <th className="w-[400px] text-left p-3 border-b">
                      Decription
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    project && (
                      <tr>
                        <td className="text-center border-t p-3">
                          {project?.data?.projectName}
                        </td>
                        <td className="text-center border-t p-3">
                          {project?.projectDetails && project?.projectDetails?.productType + "-" + project?.projectDetails?.collection}
                        </td>
                        <td className="text-center border-t p-3">
                          {project?.projectDetails && project?.projectDetails?.dimension}
                        </td>
                        <td className="text-center border-t p-3">
                          {project?.projectDetails && project?.projectDetails?.material}
                        </td>
                        <td className="text-center border-t p-3">
                          {project?.projectDetails && project?.projectDetails?.quantity}
                        </td>
                        <td className="text-left border-t p-3">
                          {project?.data?.projectDescription ? project?.data?.projectDescription : "No description"}
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            }
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
