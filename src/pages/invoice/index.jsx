import React, { useEffect } from "react";

const Invoice = () => {
  const [customers, setCustomers] = React.useState([]);

  useEffect(() => {
    fetch(`https://sensar.vercel.app/api/v1/customers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((res) => {
        setCustomers(res);
      });
  }, []);
  return (
    <div>
      <div className="card p-10 bg-white">
        <h2 className="text-3xl font-bold">Invoices</h2>
        <div className="card mt-8 border md:w-1/2 w-full p-4">
          <div className="flex justify-between items-start border-b mb-5 pb-2">
            <div className="left w-1/2">
              <p className="font-bold">Overdue</p>
              <p className="text-2xl">
                $20,321.78 <span className="text-red text-lg">USD</span>
              </p>
            </div>
            <div className="left w-1/2">
              <p className="font-bold">Due within next 30 days</p>
              <p className="text-2xl">
                $0.00 <span className="text-red text-lg">USD</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex justify-start items-center">
            <form
              action=""
              className="w-full flex gap-4 justify-between items-center"
            >
              <select name="" className="border w-full p-3 rounded" id="">
                {customers.map((customer) => (
                  <option value={customer.companyName}>
                    {customer.companyName}
                  </option>
                ))}
              </select>
              <select name="" className="border w-full p-3 rounded" id="">
                <option value="inactive">Inactive</option>
                <option value="active">Inactive</option>
              </select>
              <input
                type="date"
                className="border p-3 rounded w-full"
                name=""
                id=""
              />
              <input
                type="date"
                className="border p-3 rounded w-full"
                name=""
                id=""
              />
            </form>
          </div>
        </div>

        <div className="mt-14">
          <table className="w-full table">
            <thead>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Number</th>
              <th className="p-3 border-b">Customer</th>
              <th className="p-3 border-b">Amount Due</th>
              <th className="p-3 border-b">Actions</th>
            </thead>

            <tbody>
              <tr>
                <td className="text-center p-3 border-t border-b">
                  <span className="bg-red-400 px-2 py-1 rounded-md text-white">
                    Waiting
                  </span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">3 days ago</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">30</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Hermes</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">$3000</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Record Payment</span>
                </td>
              </tr>
              <tr>
                <td className="text-center p-3 border-t border-b">
                  <span className="bg-red-400 px-2 py-1 rounded-md text-white">
                    Waiting
                  </span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">3 days ago</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">30</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Hermes</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">$3000</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Record Payment</span>
                </td>
              </tr>
              <tr>
                <td className="text-center p-3 border-t border-b">
                  <span className="bg-red-400 px-2 py-1 rounded-md text-white">
                    Waiting
                  </span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">3 days ago</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">30</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Hermes</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">$3000</span>
                </td>
                <td className="text-center p-3 border-t border-b">
                  <span className="text-black">Record Payment</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
