/* eslint-disable react-hooks/exhaustive-deps */
// import axios from "axios";
import React, { useEffect } from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddProductCategory = () => {
    // const [imgUrl, setImgUrl] = React.useState(null);
    const [categoryName, setCategoryName] = React.useState(null);
    const [subCategories, setSubCategories] = React.useState([]);
    // const [previousData, setPreviousData] = React.useState([]);

    useEffect(() => {
        console.log(subCategories);
    }, [subCategories]);

    // console.log(imgUrl, categoryName);

    useEffect(() => {
        const subcategories = JSON.parse(localStorage.getItem("subcategories"));
        setSubCategories(subcategories);
    }, []);

    const addSubCategory = (e) => {
        e.preventDefault();

        const form = e.target;

        const subcategory = form.subcategory.value;

        const data = {
            subcategory,
        };

        const prvData = [...subCategories];

        // same name can't be added
        const isExist = prvData.find((item) => item.subcategory === subcategory);
        if (isExist) {
            Swal.fire({
                icon: "error",
                title: "Subcategory already exist",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        else {
            prvData.push(data);
        }

        setSubCategories(prvData);

        // localStorage.setItem("subcategories", JSON.stringify(previousData));

        Swal.fire({
            icon: "success",
            title: "Subcategory added successfully",
            showConfirmButton: false,
            timer: 1500,
        });
    }

    useEffect(() => {
        console.log(subCategories);
    }
        , [subCategories]);

    const getCategoryName = (e) => {
        setCategoryName(e.target.value)
    }


    useEffect(() => {
        console.log(categoryName);
    }, [categoryName]);


    const handlePublishCategory = () => {
        const nameCategory = categoryName;
        const subCategory = subCategories;

        const data = {
            nameCategory,
            subCategory
        }

        fetch(`https://sensar.vercel.app/api/v1/create-product-category`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "Category added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
    }
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
                <div
                    //   onSubmit={handleAddNewCategory}
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
                            onChange={getCategoryName}
                            required
                            id=""
                        />
                    </div>

                    <p className="text-blue pt-5 font-bold mb-4">
                        Subcategory (Optional)
                    </p>

                    <div className="flex justify-start items-center gap-4">
                        {/* <div className="photo">
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
            </div> */}

                        <form onSubmit={addSubCategory} className="flex border rounded overflow-hidden w-[300px] mt-4">
                            <input
                                type="text"
                                className="w-full p-2 border-r"
                                placeholder="Subcategory"
                                name="subcategory"
                                required
                                id="subcategory"
                            />
                            <button
                                type="submit"
                                // onClick={handleUpdateSubcategory}
                                className="btn bg-[#4D43B5] text-white px-4 py-2"
                            >
                                Add
                            </button>
                        </form>


                    </div>

                    <div className="mt-5">
                        {
                            subCategories?.map((subCategory) => (
                                <div className="flex justify-between items-center gap-4 my-3">
                                    <p className="text-blue font-bold mb-4">
                                        {subCategory?.subcategory}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const filteredSubCategories = subCategories.filter(
                                                (subCategoryItem) => subCategoryItem.subcategory !== subCategory.subcategory
                                            );
                                            setSubCategories(filteredSubCategories);
                                        }
                                        }
                                        className="btn bg-[#4D43B5] text-white px-4 py-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        }
                    </div>

                    <div className="text-right mt-7">
                        <button
                            type="button"
                            onClick={handlePublishCategory}
                            className="btn bg-[#4D43B5] text-white px-8 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductCategory;
