import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Customers from "../pages/customers";
import AddNewCustomer from "../pages/add-new";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/customer",
        element: <Customers />,
      },
      {
        path: "/customer/add-new",
        element: <AddNewCustomer />,
      },
    ],
  },
]);

export default router;
