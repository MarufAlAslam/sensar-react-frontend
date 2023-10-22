import React, { useEffect } from "react";
import { FaBell, FaCog, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewProject = () => {
  // const navigate = useNavigate();
  // const gotoStep2 = () => {
  //   navigate("/projects/add-new/step-2");
  // };

  const [companies, setCompanies] = React.useState([]);
  const [suppliers, setSuppliers] = React.useState([]);

  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/customers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((companies) => {
        setCompanies(companies);
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
      .then((suppliers) => {
        setSuppliers(suppliers);
      });
  }, []);

  const handleCreateNewProject = (e) => {
    e.preventDefault();
    const form = e.target;

    const companyName = form.companyName.value;
    const projectName = form.projectName.value;
    const deliveryAddress = form.deliveryAddress.value;
    const province = form.province.value;
    const supplierName = form.supplierName.value;
    const startDate = form.startDate.value;
    const countryName = form.countryName.value;
    const projectDescription = form.projectDescription.value;

    const data = {
      companyName,
      projectName,
      deliveryAddress,
      province,
      supplierName,
      startDate,
      countryName,
      projectDescription,
    };

    console.log("data", data);

    fetch("https://sensar.vercel.app/api/v1/create-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        Swal.fire({
          title: "Success!",
          text: "Project has been added successfully!",
          icon: "success",
          confirmButtonText: "Okay",
        });
        form.reset();
      })
      .catch((error) => {
        console.log("error", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
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
        <form action="" onSubmit={handleCreateNewProject}>
          <div className="form-body bg-white p-8 rounded-b-[10px]">
            <div className="flex md:flex-row flex-col gap-5 justify-between items-start">
              <div className="lg:w-[5/12] md:w-[1/2] w-full">
                <div className="form-group">
                  <p className="text-blue font-bold mb-4">For what Company *</p>
                  {/* <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Company Name"
                    name="companyName"
                    required
                    id=""
                  /> */}
                  <select
                    className="w-full p-2 border rounded"
                    name="companyName"
                    id=""
                  >
                    {companies.map((company) => (
                      <option value={company._id}>{company.companyName}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group mt-6">
                  <p className="text-blue font-bold mb-4">Name project*</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Name Project"
                    name="projectName"
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
                    placeholder="Address"
                    name="deliveryAddress"
                    required
                    id=""
                  />
                </div>
                <div className="form-group mt-6">
                  <p className="text-blue font-bold mb-4">Province *</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Name Province"
                    name="province"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="lg:w-[5/12] md:w-[1/2] w-full">
                <div className="form-group">
                  <p className="text-blue font-bold mb-4">
                    Supplier we will use it
                  </p>
                  {/* <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="william@mail.com"
                    name=""
                    required
                    id=""
                  /> */}
                  <select
                    name="supplierName"
                    className="w-full border rounded p-2"
                    id=""
                  >
                    {suppliers.map((supplier) => (
                      <option value={supplier._id}>
                        {supplier.companyName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group mt-6">
                  <p className="text-blue font-bold mb-4">
                    Date Start project / Date End project*
                  </p>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    placeholder="Mana William"
                    name="startDate"
                    required
                    id=""
                  />
                </div>
                <div className="form-group mt-6">
                  <p className="text-blue font-bold mb-4">Country *</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Name Country"
                    name="countryName"
                    required
                    id=""
                  />
                </div>
                <div className="form-group mt-6">
                  <p className="text-blue font-bold mb-4">Category Product</p>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="categoryProduct"
                    name=""
                    required
                    id=""
                  />
                  {/* <select name="" className="w-full p-2 border rounded" id="">
                    <option value="category 1">Category 1</option>
                    <option value="category 2">Category 2</option>
                    <option value="category 3">Category 3</option>
                  </select> */}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-blue font-bold mb-4">Description Project</p>
              <textarea
                className="w-full p-2 border rounded resize-none"
                name="projectDescription"
                id=""
                cols="30"
                rows="6"
              ></textarea>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              // onClick={gotoStep2}
              type="submit"
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
