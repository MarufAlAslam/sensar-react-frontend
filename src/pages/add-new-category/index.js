import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewCategory = () => {
  const handleAddNewCategory = (e) => {
    e.preventDefault();

    const form = e.target;

    const categoryName = form.categoryName.value;

    const data = {
      categoryName,
    };

    fetch("https://sensar.vercel.app/api/v1/create-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: "Category has been added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset();
      });
  };

  //   const handleSubCategory = (e) => {
  //     e.preventDefault();

  //     const form = e.target;

  //     const logo = form.logo.files[0];
  //     const subcategory = form.subcategory.value;

  //     const data = {
  //       logo,
  //       subcategory,
  //     };

  //     const previousData = localStorage.getItem("subcategories");
  //     previousData.push(data);

  //     console.log(previousData);
  //   };
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add New Category</h2>
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
          <p className="text-xl text-white">Category Details</p>
        </div>
        <form
          onSubmit={handleAddNewCategory}
          action=""
          className="form-body bg-white p-8 rounded-b-[10px]"
        >
          <div className="form-group mb-4">
            <p className="text-blue font-bold mb-4">Name Category *</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Wood"
              name="categoryName"
              required
              id=""
            />
          </div>

          {/* <p className="text-blue pt-5 font-bold mb-4">
            Subcategory (Optional)
          </p>

          <form
            onSubmit={handleSubCategory}
            className="flex justify-start items-center gap-4"
          >
            <div className="uploader min-w-[140px] w-[140px]">
              <p className="text-blue font-bold">Photo Material *</p>
              <label
                htmlFor="logo"
                className="logo-uploader block text-center mt-4 p-2"
              >
                <input type="file" name="logo" id="logo" />
                <span className="text-[10px] text-gray-400">
                  Drag and drop or click here to select file
                </span>
              </label>
            </div>

            <div className="w-full">
              <div className="flex items-center">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Melamine"
                  name="subcategory"
                  id=""
                />
                <button type="submit" className="btn btn-blue rounded-none">
                  Add
                </button>
              </div>
            </div>
          </form> */}

          <div className="text-right mt-7">
            <button
              type="submit"
              className="btn bg-[#4D43B5] text-white px-8 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCategory;
