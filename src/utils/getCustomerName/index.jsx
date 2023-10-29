import React, { useEffect } from "react";

const GetCustomerName = ({ project }) => {
  const [customer, setCustomer] = React.useState([]);
  useEffect(() => {
    fetch(
      `https://sensar.vercel.app/api/v1/customer/${project?.data?.companyName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        setCustomer(res);
      });
  }, [project?.data.companyName]);

  return <div>{customer?.companyName}</div>;
};

export default GetCustomerName;
