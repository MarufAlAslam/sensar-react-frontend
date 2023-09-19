import React, { useEffect } from "react";
import { FaBell, FaCog, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductDetails from "../../components/product-details";
import collection1 from "../../assets/img/collection5.png";
import collection2 from "../../assets/img/collection2.png";
import collection3 from "../../assets/img/collection3.png";
import collection4 from "../../assets/img/collection4.png";

const ProductDetailsPage = () => {
  const detailsData = [
    {
      id: 1,
      name: "Name Collection",
      image: collection1,
      tag: "Workstation/Desk",
    },
    {
      id: 2,
      name: "Name Collection",
      image: collection2,
      tag: "Sofa",
    },
    {
      id: 3,
      name: "Name Collection",
      image: collection3,
      tag: "Chair",
    },
    {
      id: 4,
      name: "Name Collection",
      image: collection4,
      tag: "Partition",
    },
    {
      id: 5,
      name: "Name Collection",
      image: collection1,
      tag: "Wall Panel",
    },
    {
      id: 6,
      name: "Name Collection",
      image: collection2,
      tag: "Silence Booth",
    },
    {
      id: 7,
      name: "Name Collection",
      image: collection3,
      tag: "Chair",
    },
    {
      id: 8,
      name: "Name Collection",
      image: collection4,
      tag: "Partition",
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
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Products</h2>
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

      <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-3 md:p-0 p-3 md:my-7 justify-between items-center">
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
            to={"/products/add-new"}
            className="btn-blue flex justify-center items-center gap-2 px-5 py-3"
          >
            <FaPlus /> <span>Product</span>
          </Link>
        </div>
      </div>

      <div className="filters mb-10 flex flex-wrap justify-center items-center gap-[15px]">
        <button className="btn filterBtn active">All</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Workstation/Desk</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Sofa</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Chair</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Partition</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Wall Panel</button>
        <span className="text-blue">|</span>
        <button className="btn filterBtn">Silence Booth</button>
      </div>

      <ProductDetails collections={filteredCollection} />
    </div>
  );
};

export default ProductDetailsPage;
