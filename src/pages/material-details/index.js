import React, { useEffect } from "react";
import { FaBell, FaCog, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import material1 from "../../assets/img/material1.png";
import material2 from "../../assets/img/material2.png";
import material3 from "../../assets/img/material3.png";
import material4 from "../../assets/img/material4.png";
import MaterialDetails from "../../components/material-details";

const MaterialsDetails = () => {
  const detailsData = [
    {
      id: 1,
      name: "Melamine",
      image: material1,
      tag: "Wood",
    },
    {
      id: 2,
      name: "Veneer",
      image: material2,
      tag: "Wood",
    },
    {
      id: 3,
      name: "Pinewood",
      image: material3,
      tag: "Silence Panel",
    },
    {
      id: 4,
      name: "MDF",
      image: material4,
      tag: "Aluminium",
    },
  ];

  const [filteredCollection, setFilteredCollection] =
    React.useState(detailsData);

  useEffect(() => {
    const filterBtn = document.querySelectorAll(".filterBtn");
    filterBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        filterBtn.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");
        const tag = e.target.textContent;
        if (tag === "All") {
          setFilteredCollection(detailsData);
          return;
        }
        const filteredData = detailsData.filter(
          (collection) => collection.tag === tag
        );
        setFilteredCollection(filteredData);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="customers">
      <div className="flex justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Materials</h2>
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

      <div className="flex my-7 justify-between items-center">
        <form
          action=""
          className="search flex justify-between items-center gap-3 bg-white px-6 py-3 rounded-full"
        >
          <FaSearch className="text-blue" />
          <input type="text" className="w-[300px]" name="" id="" />
        </form>

        <div className="right text-end flex justify-end items-center gap-7">
          {/* <p className="text-blue flex justify-start items-center gap-2">
            Newest <FaCaretDown className="text-xl" />
          </p> */}
          <select
            className="text-blue bg-transparent outline-none shadow-none border-none flex justify-start items-center gap-2"
            name=""
            id=""
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>

          <Link
            to={"/material/add-new"}
            className="btn-blue flex justify-center items-center gap-2 px-5 py-3"
          >
            <FaPlus /> <span>Material</span>
          </Link>
        </div>
      </div>

      <div className="filters mb-10 flex justify-center items-center gap-[15px]">
        <button className="btn filterBtn active">All</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Wood</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Fabric</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">PU</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Leather</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Glass</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Silence Panel</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Color</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Aluminium</button>
      </div>

      {filteredCollection.length === 0 ? (
        "No Data Found"
      ) : (
        <MaterialDetails collections={filteredCollection} />
      )}
    </div>
  );
};

export default MaterialsDetails;
