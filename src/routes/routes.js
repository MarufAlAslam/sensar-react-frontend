import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import Customers from "../pages/customers";
import AddNewCustomer from "../pages/add-new-customer";
import Dashboard from "../pages/dashboard";
import Projects from "../pages/projects";
import AddNewProject from "../pages/add-new-project";
import Step2 from "../pages/add-new-project/step2";
import Step3 from "../pages/add-new-project/step3";
import Products from "../pages/products";
import Materials from "../pages/materials";

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
        path: "/projects/add-new",
        element: <AddNewProject />,
      },
      {
        path: "/projects/add-new/step-2",
        element: <Step2 />,
      },
      {
        path: "/projects/add-new/step-3",
        element: <Step3 />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/material",
        element: <Materials />,
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);

export default router;
