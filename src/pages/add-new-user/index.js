import axios from "axios";
import React from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewUser = () => {
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
  const handleAddNewSupplier = (e) => {
    e.preventDefault();

    const form = e.target;

    const logo = logoUrl;
    const companyName = form.companyName.value;
    const firstName = form.firstName.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const email = form.email.value;
    const lastName = form.lastName.value;
    const country = form.country.value;
    const province = form.province.value;
    const category = form.category.value;
    const description = form.description.value;

    const data = {
      logo,
      companyName,
      firstName,
      lastName,
      phone,
      email,
      address,
      country,
      province,
      category,
      description,
    };

    fetch("https://sensar.vercel.app/api/v1/create-supplier", {
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
          text: "Supplier has been added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset();
      });
  };
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Add New User</h2>
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
          <p className="text-xl text-white">Supplier / Factory Details</p>
        </div>
        <form
          onSubmit={handleAddNewSupplier}
          action=""
          className="form-body bg-white p-8 rounded-b-[10px]"
        >
          <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
            <div className="lg:w-[2/12] md:w-1/2 w-full">
              <p className="text-blue font-bold">Photo *</p>
              {logoUrl && (
                <img
                  src={logoUrl}
                  alt="logo"
                  className="w-full h-auto rounded-full"
                />
              )}
              <label
                htmlFor="logo"
                className="logo-uploader block text-center mt-4"
              >
                <input
                  type="file"
                  name="logo"
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
                <p className="text-blue font-bold mb-4">Username *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Samantha"
                  name="companyName"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">First Name*</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Jakarta"
                  name="firstName"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Website *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="+1234567890"
                  name="phone"
                  required
                  id=""
                />
              </div>
            </div>
            <div className="lg:w-[5/12] md:w-[1/2] w-full">
              <div className="form-group">
                <p className="text-blue font-bold mb-4">Email *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="william@mail.com"
                  name="email"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Last Name *</p>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Mana William"
                  name="lastName"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Password *</p>
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="United States"
                  name="country"
                  required
                  id=""
                />
              </div>
              <div className="form-group mt-6">
                <p className="text-blue font-bold mb-4">Role *</p>
                {/* <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Province "
                  name="province"
                  required
                  id=""
                /> */}
                <select
                  name="province"
                  className="w-full p-2 border rounded"
                  id=""
                >
                  <option value="administrator">Administrator</option>
                  <option value="supplier">Supplier</option>
                </select>
              </div>
            </div>
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

export default AddNewUser;
