import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewProduct = () => {
  const [collections, setCollections] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [logoUrl, setLogoUrl] = React.useState(null);
  const handleLogoUpload = (e) => {
    const payload = new FormData();
    payload.append("image", e.target.files[0]);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=bcc56bad76ece711720725d2a509d3dc",
        payload
      )
      .then((response) => {
        // console.log("response", response);
        // console.log("response url", response.data.data.image.url);
        setLogoUrl(response.data.data.image.url);
        // console.log("success");
      })
      .catch((error) => {
        console.log("error", error);
        alert("try another image agian");
      });
    // imgbbUploader()
  };

  const handleAddNewProduduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const logo = logoUrl;
    const productName = form.productName.value;
    const reference = form.reference.value;
    const supplier = form.supplier.value;
    const collection = form.collection.value;
    const measurement = form.measurement.value;
    const price = form.price.value;

    const data = {
      logo,
      productName,
      reference,
      supplier,
      collection,
      measurement,
      price,
    };

    fetch("https://sensar.vercel.app/api/v1/create-product", {
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
          text: "Product has been added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset();
      });
  };

  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => {
        setCollections(res);
      });
  }, []);

  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/suppliers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => {
        setSuppliers(res);
      });
  }, []);
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add Single Product</h2>
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
          <p className="text-xl text-white">Product Details</p>
        </div>
        <form
          onSubmit={handleAddNewProduduct}
          action=""
          className="form-body bg-white p-8 rounded-b-[10px]"
        >
          <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
            <div className="lg:w-[2/12] md:w-1/2 w-full">
              <p className="text-blue font-bold">Photo Product *</p>
              <label
                htmlFor="logo"
                className="logo-uploader block text-center mt-4"
              >
                <input type="file" name="logo" id="logo" onChange={handleLogoUpload} />
                <span className="text-sm text-gray-400">
                  Drag and drop or click here to select file
                </span>
              </label>

              <img src={logoUrl} className="w-3/4 mt-5 mx-auto" alt="" />
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Name Product *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Product Name"
                  name="productName"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Reference *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Product Reference"
                  name="reference"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Supplier *</p>
                <select
                  name="supplier"
                  className="w-full p-2 border rounded"
                  id=""
                >
                  {suppliers.map((supplier) => (
                    <option value={supplier._id}>{supplier.companyName}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Collection *</p>
                <select
                  name="collection"
                  className="w-full p-2 border rounded"
                  id=""
                >
                  {collections.map((collection) => (
                    <option value={collection._id}>
                      {collection.categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">
                  Measurement (Multiple Possible) *
                </p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Measurement"
                  name="measurement"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Price *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Price"
                  name="price"
                  required
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="mt-32 text-center">
            <button type="submit" className="btn-blue px-10">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
