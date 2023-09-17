import React from "react";
import { FaBell, FaCog, FaEllipsisH, FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import StatCards from "../../components/stat-cards";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">Dashboard</h2>
        <div className="actions text-right flex justify-end items-center gap-8">
          <form
            action=""
            className="search flex justify-between items-center gap-3 bg-white px-6 py-3 rounded-full"
          >
            <FaSearch className="text-blue" />
            <input type="text" className="w-[200px]" name="" id="" />
          </form>
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

      <div className="mt-6">
        <StatCards />
      </div>

      <div className="project-ongoing mt-6 bg-white rounded-[10px] p-5">
        <p className="text-lg font-bold text-blue">Project on going</p>
        <table className="table mt-6 stat-table w-full">
          <thead>
            <tr>
              <th className="text-center text-blue text-sm font-semibold">
                Name Supplier
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Customer
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Date
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Contact
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Status
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Digital Proof
              </th>
              <th className="text-center text-blue text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="py-4">
                <div className="flex justify-start items-center gap-4 border-l-2 pl-3 border-[#4d44b5]">
                  <input type="checkbox" name="" id="" />
                  <div className="avatar bg-[#c1bbeb] flex justify-center items-center text-white w-[40px] h-[40px] rounded-full">
                    <FaUser />
                  </div>
                  <p className="text-lg font-bold text-blue">Kuka Home</p>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">HERMES</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#a098ae]">January 25, 2023</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">Mana William </span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#ff6600] font-semibold">In process</span>
              </td>
              <td className="py-4 text-center">
                <div className="flex justify-center items-center gap-3">
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#ff6600]">
                    Waiting Answer
                  </button>
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#4d44b5]">
                    View
                  </button>
                </div>
              </td>
              <td className="py-4 text-center">
                <button className="btn">
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="flex justify-start items-center gap-4 border-l-2 pl-3 border-[#4d44b5]">
                  <input type="checkbox" name="" id="" />
                  <div className="avatar bg-[#c1bbeb] flex justify-center items-center text-white w-[40px] h-[40px] rounded-full">
                    <FaUser />
                  </div>
                  <p className="text-lg font-bold text-blue">Kuka Home</p>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">HERMES</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#a098ae]">January 25, 2023</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">Mana William </span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#ff6600] font-semibold">In process</span>
              </td>
              <td className="py-4 text-center">
                <div className="flex justify-center items-center gap-3">
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#ff6600]">
                    Waiting Answer
                  </button>
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#4d44b5]">
                    View
                  </button>
                </div>
              </td>
              <td className="py-4 text-center">
                <button className="btn">
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
            <tr>
              <td className="py-4">
                <div className="flex justify-start items-center gap-4 border-l-2 pl-3 border-[#4d44b5]">
                  <input type="checkbox" name="" id="" />
                  <div className="avatar bg-[#c1bbeb] flex justify-center items-center text-white w-[40px] h-[40px] rounded-full">
                    <FaUser />
                  </div>
                  <p className="text-lg font-bold text-blue">Kuka Home</p>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">HERMES</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#a098ae]">January 25, 2023</span>
              </td>
              <td className="py-4 text-center">
                <span className="text-blue font-semibold">Mana William </span>
              </td>
              <td className="py-4 text-center">
                <span className="text-[#ff6600] font-semibold">In process</span>
              </td>
              <td className="py-4 text-center">
                <div className="flex justify-center items-center gap-3">
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#ff6600]">
                    Waiting Answer
                  </button>
                  <button className="px-4 rounded-full py-2 text-xs text-white bg-[#4d44b5]">
                    View
                  </button>
                </div>
              </td>
              <td className="py-4 text-center">
                <button className="btn">
                  <FaEllipsisH />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;