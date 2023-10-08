/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaChevronRight, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        View
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Edit Product
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/">
        Status Proof
      </a>
    ),
  },
  {
    key: "4",
    danger: true,
    label: "Delete",
  },
];

const MaterialCard = ({ material }) => {
  const [supplier, setSupplier] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const getSupplierDetails = () => {
    setLoading(true);
    fetch("https://sensar.vercel.app/api/v1/supplier/" + material.supplier)
      .then((res) => res.json())
      .then((res) => {
        setSupplier(res);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getSupplierDetails();
  }, []);
  return (
    <div className="p-[20px] bg-white rounded-[10px] text-center">
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
        src={material.img}
        className="block mx-auto mb-5 w-[80px] h-[80px] object-cover rounded-full"
        alt=""
      />
      <p className="text-blue text-lg font-bold">{material.name}</p>
      {!loading && supplier && (
        <p className="text-sm text-[#a098ae]">{supplier.companyName}</p>
      )}

      <div className="links w-full mt-5 flex gap-4 justify-center items-center">
        <Link
          to={"/material/" + material._id}
          className="customer-link flex rounded-full justify-center items-center w-[40px] h-[40px] bg-[#4d44b5] text-white"
        >
          <FaChevronRight />
        </Link>
      </div>
    </div>
  );
};

export default MaterialCard;
