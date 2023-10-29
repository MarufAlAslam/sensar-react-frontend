/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dropdown } from "antd";
import React, { useEffect } from "react";
import { FaEllipsisH, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
// import customer1 from "../../assets/img/customer1.png";
import noLogo from "../../assets/img/no_logo.png";
// import axios from "axios";
import Swal from "sweetalert2";

const SupplierCard = ({ customer, deleteCard }) => {
  const [editModalVisible, setEditModalVisible] = React.useState(false);
  const [supplier, setSupplier] = React.useState([]);
  const [logoUrl, setLogoUrl] = React.useState(null);

  const handleEdit = (id) => {
    setEditModalVisible(true);

    console.log(id);

    fetch("https://sensar.vercel.app/api/v1/supplier/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setSupplier(res);
      });
  };
  // console.log("customer", customer);
  useEffect(() => {
    setLogoUrl(supplier.logo);
  }, [supplier]);
  const items = [
    {
      key: "1",
      label: (
        <button onClick={() => handleEdit(customer._id)}>Edit</button>
      ),
      onClick: () => handleEdit(customer._id),
    },
    {
      key: "2",
      danger: true,
      label: <button onClick={() => deleteCard(customer._id)}>Delete</button>,
      onClick: () => deleteCard(customer._id),
      // get the exact id of the customer and pass it to the handleDelete function
    },
  ];

  const handleEditSupplier = (e) => {
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

    fetch("https://sensar.vercel.app/api/v1/supplier/" + customer._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        // console.log("success");
        Swal.fire({
          title: "Success!",
          text: "Supplier updated successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        setEditModalVisible(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }

  const hideModal = () => {
    setEditModalVisible(false);
  }
  return (
    <div className="p-[20px] bg-white rounded-[10px] text-center">
      {
        editModalVisible && <>
          <div className="modal-bg bg-black opacity-50 fixed top-0 left-0 h-screen w-full z-10"></div>
          <div className="modal overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-5 rounded-[20px] w-[90%] h-[80vh]">
            <div className="text-right">
              <button onClick={hideModal}>
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>

            <hr className="my-4" />
            <form
              onSubmit={handleEditSupplier}
              action=""
              className="form-body bg-white p-8 rounded-b-[10px] text-left"
            >
              <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
                <div className="lg:w-[2/12] md:w-1/2 w-full">
                  <p className="text-blue font-bold">Logo Company *</p>
                  {logoUrl && (
                    <img
                      src={logoUrl}
                      alt="logo"
                      className="w-[75%] mt-4 mx-auto h-auto rounded-full"
                    />
                  )}
                  {/* <label
                    htmlFor="logo"
                    className="logo-uploader block text-center mt-4"
                  >
                    <input type="file" name="logo" id="logo" onChange={handleLogoUpload} />
                    <span className="text-sm text-gray-400">
                      Drag and drop or click here to select file
                    </span>
                  </label> */}
                </div>
                <div className="lg:w-[5/12] md:w-[1/2] w-full">
                  <div className="form-group">
                    <p className="text-blue font-bold mb-4">Name of Company *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.companyName : ""}
                      placeholder="Samantha"
                      name="companyName"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">
                      First Name* (Representant)
                    </p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.firstName : ""}
                      placeholder="Jakarta"
                      name="firstName"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">Phone *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.phone : ""}
                      placeholder="+1234567890"
                      name="phone"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">Address *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.address : ""}
                      placeholder="Address"
                      name="address"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">Category Product *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.category : ""}
                      placeholder="Category product"
                      name="category"
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
                      defaultValue={supplier ? supplier.email : ""}
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
                      defaultValue={supplier ? supplier.lastName : ""}
                      placeholder="Mana William"
                      name="lastName"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">Country *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.country : ""}
                      placeholder="United States"
                      name="country"
                      required
                      id=""
                    />
                  </div>
                  <div className="form-group mt-6">
                    <p className="text-blue font-bold mb-4">Province *</p>
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      defaultValue={supplier ? supplier.province : ""}
                      placeholder="Province "
                      name="province"
                      required
                      id=""
                    />
                  </div>
                </div>
              </div>

              <div className="form-group lg:w-10/12 px-12 py-6 ml-auto">
                <p className="text-blue font-bold mb-4">description *</p>
                <textarea
                  name="description"
                  id="description"
                  className="w-full p-2 border rounded"
                  defaultValue={supplier ? supplier.description : ""}
                  cols="30"
                  rows="5"
                  required
                  placeholder="Description"
                ></textarea>
                {/* <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Samantha"
              name="companyName"
              required
              id=""
            /> */}
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
          </div></>
      }
      <div className="text-right">
        {/* <button className="btn">
          <FaEllipsisH className="text-[#a098ae]" />
        </button> */}
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <FaEllipsisH className="text-[#a098ae] ml-auto block" />
          </a>
        </Dropdown>
      </div>
      <img
        src={customer.logo !== "" ? customer.logo : noLogo}
        className="block mx-auto mb-5 w-[80px]"
        alt=""
      />
      <p className="text-blue text-lg font-bold">{customer?.companyName}</p>
      <p className="text-sm text-[#a098ae] mb-2">
        {customer.firstName + " " + customer.lastName}
      </p>
      <p className="text-sm text-[#a098ae]">{customer.category}</p>

      <div className="links w-full mt-3 flex gap-4 justify-center items-center">
        <Link
          to={"tel:" + customer.phone}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaPhoneAlt />
        </Link>
        <Link
          to={"mailto:" + customer.email}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaEnvelope />
        </Link>
      </div>
    </div>
  );
};

export default SupplierCard;
