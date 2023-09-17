import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Customers from "../pages/customers";
import AddNewCustomer from "../pages/add-new";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customer",
        element: <Customers />,
      },
      {
        path: "/customer/add-new",
        element: <AddNewCustomer />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <h2>Page Not Yet Added</h2>,
      },
    ],
  },
]);

export default router;
