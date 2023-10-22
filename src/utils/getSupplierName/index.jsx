import React, { useEffect } from "react";

const GetSupplierName = ({ project }) => {
  const [supplier, setSupplier] = React.useState([]);

  useEffect(() => {
    fetch(
      `https://sensar.vercel.app/api/v1/supplier/${project?.data?.supplierName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())

      .then((res) => {
        setSupplier(res);
      });
  }, [project.data.supplierName]);

  return <div>{supplier.companyName}</div>;
};

export default GetSupplierName;
