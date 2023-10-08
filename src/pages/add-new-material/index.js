import axios from "axios";
import React, { useEffect } from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewMaterial = () => {
  const [logoUrl, setLogoUrl] = React.useState(null);
  const [collections, setCollections] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);
  const [loadingCollection, setLoadingCollection] = React.useState(false);
  const [loadingSupplier, setLoadingSupplier] = React.useState(false);
  useEffect(() => {
    setLoadingCollection(true);
    fetch("https://sensar.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((res) => {
        setCollections(res);
        setLoadingCollection(false);
      });
    setLoadingSupplier(true);
    fetch("https://sensar.vercel.app/api/v1/suppliers")
      .then((res) => res.json())
      .then((res) => {
        setSuppliers(res);
        setLoadingSupplier(false);
      });
  }, []);
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
  const handleAddSingleMaterial = (e) => {
    e.preventDefault()
    const form = e.target;

    const logo = logoUrl;
    const type = "single";
    const name = form.name.value;
    const reference = form.reference.value;
    const supplier = form.supplier.value;
    const collection = form.collection.value;
    const tags = form.tags.value;
    const price = form.price.value;
    const description = form.description.value;

    const data = {
      img: logo,
      type,
      name,
      reference,
      supplier,
      collection,
      tags,
      price,
      description,
    };

    fetch("https://sensar.vercel.app/api/v1/create-material/single", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success!",
          text: "Material has been added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset();
      });
  };
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add Single Material</h2>
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
          onSubmit={handleAddSingleMaterial}
          action=""
          className="form-body bg-white p-8 rounded-b-[10px]"
        >
          <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
            <div className="lg:w-[2/12] md:w-1/2 w-full">
              <p className="text-blue font-bold">Photo Material *</p>
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt="logo"
                  name="logo"
                  className="w-full h-auto rounded-[3px]"
                />
              )}
              <label
                htmlFor="logo"
                className="logo-uploader block text-center mt-4"
              >
                <input
                  type="file"
                  name=""
                  id="logo"
                  onChange={handleLogoUpload}
                />
                <span className="text-sm text-gray-400">
                  Drag and drop or click here to select file
                </span>
              </label>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Name Material *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Material Name"
                  name="name"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Reference *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Reference Name"
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
                  {/* <option value="MEET&CO">MEET&CO</option>
                  <option value="MEET&CO">JANNO</option>
                  <option value="MEET&CO">BRANDOM</option> */}
                  {loadingSupplier ? (
                    <option value="" disabled>
                      Loading Supplier
                    </option>
                  ) : (
                    suppliers.map((supplier) => (
                      <option value={supplier._id}>
                        {supplier.companyName}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">
                  Collection Material *
                </p>
                <select
                  name="collection"
                  className="w-full p-2 border rounded"
                  id=""
                >
                  {/* <option value="MEET&CO">MEET&CO</option>
                  <option value="MEET&CO">JANNO</option>
                  <option value="MEET&CO">BRANDOM</option> */}
                  {loadingCollection ? (
                    <option value="" disabled>
                      Loading Collection
                    </option>
                  ) : (
                    collections.map((collection) => (
                      <option value={collection._id}>
                        {collection.categoryName}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Tags *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Tags, Comma Seperated"
                  name="tags"
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
          <div className="mt-5">
            <p className="text-blue font-bold mb-4">Description</p>
            <textarea
              className="w-full p-2 border rounded"
              name="description"
              id=""
              placeholder="Material Description"
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <div className="mt-20 text-center">
            <button type="submit" className="btn-blue px-10">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewMaterial;
