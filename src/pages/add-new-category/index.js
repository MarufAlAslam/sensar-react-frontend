/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect } from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewCategory = () => {
  const [imgUrl, setImgUrl] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState(null);
  const [subCategories, setSubCategories] = React.useState([]);
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
  const handleUpdateSubcategory = (e) => {
    const subcategory = document.getElementById("subcategory").value;
    setCategoryName(subcategory);
    const payload = new FormData();
    payload.append("image", document.getElementById("photo_material").files[0]);
    // alert(subcategory);

    // get the image from photo_material and upload it to imgbb
    // get the url of the image from imgbb

    // const photo_material = document.getElementById("photo_material").files[0];
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=bcc56bad76ece711720725d2a509d3dc",
        payload
      )
      .then((response) => {
        // console.log("response", response);
        // console.log("response url", response.data.data.image.url);
        setImgUrl(response.data.data.image.url);
        // console.log("success");
      })
      .catch((error) => {
        console.log("error", error);
        alert("try another image agian");
      });

    // console.log(data);

    // fetch("https://sensar.vercel.app/api/v1/create-subcategory", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     Swal.fire({
    //       title: "Success!",
    //       text: "Subcategory has been added successfully!",
    //       icon: "success",
    //       confirmButtonText: "Okay",
    //     });
    //     // form.reset();
    //   });
  };
  // console.log(imgUrl, categoryName);

  useEffect(() => {
    const subcategories = JSON.parse(localStorage.getItem("subcategories"));
    setSubCategories(subcategories);
  }, []);

  console.log(subCategories);
  useEffect(() => {
    setSubCategories([
      ...subCategories,
      {
        categoryName,
        imgUrl,
      },
    ]);
  }, []);

  console.log(subCategories);
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

          <p className="text-blue pt-5 font-bold mb-4">
            Subcategory (Optional)
          </p>

          <div className="flex justify-start items-center gap-4">
            <div className="photo">
              <label htmlFor="" className="text-xs text-blue">
                Photo Material
              </label>
              <input type="file" name="photo_material" id="photo_material" />
              <label
                htmlFor="photo_material"
                className="file-label text-xs block border border-dashed p-4 mt-3 w-[150px] text-center"
              >
                Drag and drop or click here to select file
              </label>
            </div>

            <div className="flex border rounded overflow-hidden w-[300px] mt-4">
              <input
                type="text"
                className="w-full p-2 border-r"
                placeholder="Subcategory"
                name="subcategory"
                required
                id="subcategory"
              />
              <button
                type="button"
                onClick={handleUpdateSubcategory}
                className="btn bg-[#4D43B5] text-white px-4 py-2"
              >
                Add
              </button>
            </div>

            <div className="flex justify-start items-center gap-2"></div>
          </div>

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
