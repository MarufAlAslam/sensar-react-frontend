import React, { useEffect } from "react";
import { useParams, useRouteError } from "react-router-dom";

const UserProfile = () => {
  const params = useParams();
  const { id } = params;
  const [user, setUser] = React.useState([]);

  useEffect(() => {
    fetch(`https://sensar.vercel.app/api/v1/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => {
        setUser(res);
      });
  }, [id]);

  console.log(user);
  return (
    <div>
      <div className="card p-10 rounded-[10px] bg-white">
        <div className="flex justify-between items-center">
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
            <img src={user.logo} alt="" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
            <div className="border p-5 w-full rounded-md mb-4">
              <p>First Name</p>
              <p className="text-2xl font-bold text-blue">{user.firstName}</p>
            </div>
            <div className="border p-5 w-full rounded-md mb-4">
              <p>Last Name</p>
              <p className="text-2xl font-bold text-blue">{user.lastName}</p>
            </div>
            <div className="border p-5 w-full rounded-md mb-4">
              <p>Email</p>
              <p className="text-2xl font-bold text-blue">{user.email}</p>
            </div>
            <div className="border p-5 w-full rounded-md mb-4">
              <p>Website</p>
              <p className="text-2xl font-bold text-blue">{user.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
