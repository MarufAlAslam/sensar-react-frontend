import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddNewProject = () => {
  const navigate = useNavigate();
  const gotoStep2 = () => {
    navigate("/projects/add-new/step-2");
  };
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add New Project</h2>
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
            <p className="text-xl text-white">Project Details</p>
            <p className="text-xl text-white">Step 1</p>
          </div>
        </div>
        <form action="">
          <div className="form-body bg-white p-8 rounded-b-[10px]">
            <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
              <div className="lg:w-[5/12] md:w-[1/2] w-full">
                <div className="form-group">
                  <p className="text-blue font-bold mb-4">For what Company *</p>
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
                  <p className="text-blue font-bold mb-4">Name project*</p>
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
                  <p className="text-blue font-bold mb-4">
                    Address for delivery *
                  </p>
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
              <div className="lg:w-[5/12] md:w-[1/2] w-full">
                <div className="form-group">
                  <p className="text-blue font-bold mb-4">
                    Supplier we will use it * (Multiple choise optional)
                  </p>
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
                  <p className="text-blue font-bold mb-4">
                    Date Start project / Date End project*
                  </p>
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
                  <p className="text-blue font-bold mb-4">Category Product</p>
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
            <div className="mt-6">
              <p className="text-blue font-bold mb-4">Category Product</p>
              <textarea
                className="w-full p-2 border rounded resize-none"
                name=""
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={gotoStep2}
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

export default AddNewProject;
