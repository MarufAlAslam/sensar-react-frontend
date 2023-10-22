import React, { useEffect } from "react";
import {
  FaBell,
  FaCaretLeft,
  FaCaretRight,
  FaCog,
  FaEllipsisH,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    fetch("https://sensar.vercel.app/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((users) => {
        setUsers(users);
      });
  }, []);
  return (
    <div>
      <div className="md:flex hidden justify-between items-center">
        <h2 className="text-blue text-3xl font-bold">All Users</h2>
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

      <div className="mt-10 bg-white p-10 rounded-md">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-blue p-3 text-left border-b">Username</th>
              <th className="text-blue p-3 text-left border-b">Name</th>
              <th className="text-blue p-3 text-left border-b">Email</th>
              <th className="text-blue p-3 text-left border-b">Company</th>
              <th className="text-blue p-3 text-left border-b">Role</th>
              <th className="text-blue p-3 text-center border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="text-blue p-3 text-left border-b">
                  <Link to={`/users/${user._id}`}>{user.userName}</Link>
                </td>
                <td className="text-blue p-3 text-left border-b">
                  {user.firstName} {user.lastName}
                </td>
                <td className="text-blue p-3 text-left border-b">
                  {user.email}
                </td>
                <td className="text-blue p-3 text-left border-b">
                  <Link to={user.website}>{user.website}</Link>
                </td>
                <td className="text-blue p-3 text-left border-b">
                  {user.role}
                </td>
                <td className="text-blue p-3 text-center border-b">
                  <button>
                    <FaEllipsisH className="text-xl text-blue" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination text-center flex justify-center mt-14 items-center gap-3">
        <button className="">
          <FaCaretLeft className="text-3xl pinkish" />
        </button>
        <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
          1
        </button>
        <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
          2
        </button>
        <button className="btn-blue flex justify-center items-center w-[40px] h-[40px] text-white text-3xl">
          3
        </button>
        <button className="">
          <FaCaretRight className="text-3xl pinkish" />
        </button>
      </div>
    </div>
  );
};

export default User;
