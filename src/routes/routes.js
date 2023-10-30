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
import ProductDetailsPage from "../pages/product-details";
import AddNewProduct from "../pages/add-new-product";
import MaterialsDetails from "../pages/material-details";
import AddNewMaterial from "../pages/add-new-material";
import Supplier from "../pages/supplier";
import AddNewSupplier from "../pages/add-new-supplier";
import Categories from "../pages/categories";
import AddNewCategory from "../pages/add-new-category";
import CustomProduct from "../pages/custom-product";
import User from "../pages/user";
import AddNewUser from "../pages/add-new-user";
import UserProfile from "../pages/user-profile";
import Invoice from "../pages/invoice";
import SelectProductCollection from "../pages/select-product-collection";
import ProductCategories from "../pages/product-categories";
import AddProductCategory from "../pages/add-product-category";
import ViewProject from "../pages/view-project";

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
        path: "/customer/all",
        element: <Customers />,
      },
      {
        path: "/customer/add-new",
        element: <AddNewCustomer />,
      },
      {
        path: "/supplier/all",
        element: <Supplier />,
      },
      {
        path: "/supplier/add-new",
        element: <AddNewSupplier />,
      },
      {
        path: "/projects/all",
        element: <Projects />,
      },
      {
        path: "/projects/add-new",
        element: <AddNewProject />,
      },
      {
        path: "/projects/add-new/collection",
        element: <SelectProductCollection />,
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
        path: "/projects/add-new/custom-product",
        element: <CustomProduct />,
      },
      {
        path: "/project/view/:id",
        element: <ViewProject />,
      },

      {
        path: "/products/all-products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "/products/add-new",
        element: <AddNewProduct />,
      },
      {
        path: "/products/categories",
        element: <ProductCategories />,
      },
      {
        path: "/products/categories/add-new",
        element: <AddProductCategory />,
      },
      {
        path: "/products/add-multiple",
        element: "Add Multiple Product",
      },
      {
        path: "/material",
        element: <Materials />,
      },
      {
        path: "/material/all-materials",
        element: <Materials />,
      },
      {
        path: "/material/:id",
        element: <MaterialsDetails />,
      },
      {
        path: "/material/add-new",
        element: <AddNewMaterial />,
      },
      {
        path: "/material/add-single",
        element: <AddNewMaterial />,
      },
      {
        path: "/material/add-multiple",
        element:  "Multiple Material",
      },
      {
        path: "/material/categories",
        element: <Categories />,
      },
      {
        path: "/material/categories/add-new",
        element: <AddNewCategory />,
      },
      {
        path: "/users/all",
        element: <User />,
      },
      {
        path: "/users/add-new",
        element: <AddNewUser />,
      },
      {
        path: "/users/:id",
        element: <UserProfile />,
      },
      {
        path: "/users/profile",
        element: <UserProfile />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);

export default router;
