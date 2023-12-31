import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { FaBell, FaCog, FaPlus, FaTrashAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://sensar.vercel.app/api/v1/product-categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                setCategories(res);
            });
    }, []);

    console.log(categories);

    const deleteCategory = (id) => {
        fetch(`https://sensar.vercel.app/api/v1/product-category/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setCategories(categories.filter((cat) => cat._id !== id));

                Swal.fire({
                    icon: "success",
                    title: "Category deleted successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => console.log(err));
    }



    const items = categories.map((category) => {
        return {
            key: category._id,
            label: (
                <div className="flex w-full justify-between pr-10">
                    <span>{category.nameCategory}</span>
                    <button
                        onClick={() => deleteCategory(category._id)}
                        className="hover:bg-red-100 px-2"
                    >
                        <FaTrashAlt className="text-red-500" />
                    </button>
                </div>
            ),
            children: category.subCategory
                ? category.subCategory.map((subCategory) => (
                    <div className="flex justify-between items-center">
                        <div>
                            - {" "}
                            <span>{subCategory.subcategory}</span>
                        </div>
                    </div>
                ))
                : "No Subcategory",
        };
    });

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div>
            <div className="md:flex hidden justify-between items-center">
                <h2 className="text-blue text-3xl font-bold">Categories</h2>
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

            <div className="flex justify-end mt-5 items-center gap-3 mb-5">
                <Link
                    to={"/products/categories/add-new"}
                    className="btn-blue flex justify-center items-center gap-2 px-5 py-3"
                >
                    <FaPlus /> <span>Category</span>
                </Link>
            </div>

            <div className="form mt-5">
                <div className="form-header bg-[#4D43B5] py-2 px-8 rounded-t-[10px]">
                    <p className="text-xl text-white">Categories</p>
                </div>
                <div className="card-body bg-white p-8 rounded-b-[10px]">
                    <h3 className="text-xl font-bold mb-5">Category List</h3>
                    <Collapse
                        items={items}
                        defaultActiveKey={["1"]}
                        accordion
                        onChange={onChange}
                        className="bg-white border-none shadow-none rounded-0"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;
