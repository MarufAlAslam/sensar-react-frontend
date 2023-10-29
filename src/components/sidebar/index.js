import React from "react";
import logo from "../../assets/img/logo.png";
import dashboard from "../../assets/img/home.png";
import factory from "../../assets/img/factory.png";
import customer from "../../assets/img/teacher.png";
import projects from "../../assets/img/projects.png";
import invoices from "../../assets/img/invoices.png";
import quotes from "../../assets/img/quotes.png";
import user from "../../assets/img/user.png";
import message from "../../assets/img/message.png";
import material from "../../assets/img/material.png";
import { NavLink } from "react-router-dom";
import { Collapse } from "antd";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      label: <span className="flex items-center gap-3"><img src={dashboard} className="w-[20px]" alt="" />Dashboard</span>,
      icon: dashboard,
      children: <ul>
        <li>
          <NavLink
            to="/"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Dashboard</span>
          </NavLink>
        </li>
      </ul>,
      link: "/",
    },
    {
      id: 2,
      label: <span className="flex items-center gap-3"><img src={factory} className="w-[20px]" alt="" />Supplier</span>,
      icon: factory,
      children: <ul>
        <li>
          <NavLink
            to="/supplier/all"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Suppliers</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/supplier/add-new"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Supplier</span>
          </NavLink>
        </li>
      </ul>,
      link: "/supplier",
    },
    {
      id: 3,
      label: <span className="flex items-center gap-3"><img src={customer} className="w-[20px]" alt="" />Customer</span>,
      icon: customer,
      children: <ul>
        <li>
          <NavLink
            to="/customer/all"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Customer</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer/add-new"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Customer</span>
          </NavLink>
        </li>
      </ul>,
      link: "/customer",
    },
    {
      id: 4,
      label: <span className="flex items-center gap-3"><img src={projects} className="w-[20px]" alt="" />Projects</span>,
      icon: projects,
      children: <ul>
        <li>
          <NavLink
            to="/projects/all"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects/add-new"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Project</span>
          </NavLink>
        </li>
      </ul>,
      link: "/projects",
    },
    {
      id: 5,
      label: <span className="flex items-center gap-3"><img src={invoices} className="w-[20px]" alt="" />Invoices</span>,
      icon: invoices,
      children: <ul>
        <li>
          <NavLink
            to="/invoice"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Invoices</span>
          </NavLink>
        </li>
      </ul>,
      link: "/invoice",
    },
    {
      id: 6,
      label: <span className="flex items-center gap-3"><img src={quotes} className="w-[20px]" alt="" />Quotes</span>,
      icon: quotes,
      children: <ul></ul>,
      link: "/quotes",
    },
    {
      id: 7,
      label: <span className="flex items-center gap-3"><img src={user} className="w-[20px]" alt="" />User</span>,
      icon: user,
      children: <ul>
        <li>
          <NavLink
            to="/users/all"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users/add-new"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add User</span>
          </NavLink>
        </li>
      </ul>,
      link: "/user",
    },
    {
      id: 8,
      label: <span className="flex items-center gap-3"><img src={message} className="w-[20px]" alt="" />Message</span>,
      icon: message,
      children: <ul></ul>,
      link: "/message",
    },
    {
      id: 9,
      label: <span className="flex items-center gap-3"><img src={material} className="w-[20px]" alt="" />Products</span>,
      icon: message,
      children: <ul>
        <li>
          <NavLink
            to="/products/all-products"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/add-new"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Single Product</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/add-multiple"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Multiple Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products/categories"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Categories</span>
          </NavLink>
        </li>
      </ul>,
      link: "/products",
    },
    {
      id: 10,
      label: <span className="flex items-center gap-3"><img src={factory} className="w-[20px]" alt="" />Materials</span>,
      icon: material,
      children: <ul>
        <li>
          <NavLink
            to="/material/all-materials"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">All Material</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/material/add-single"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Single Material</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/material/add-multiple"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Add Multiple Material</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/material/categories"
            className={"flex justify-start items-center sidebar-link"}
          >
            <span className="block pinkish">Categories</span>
          </NavLink>
        </li>
      </ul>,
      link: "/material",
    },
  ];
  return (
    <div className="bg-[#4d44b5] p-[30px] pr-0 h-full min-h-screen sidebar">
      <div className="text-center pr-[30px]">
        <img src={logo} alt="logo" className="block mx-auto mb-10" />
      </div>

      {/* <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-1">
            {item.children.length > 0 ? (
              <>
                <button
                  className={"flex justify-start items-center w-full"}
                  onClick={(e) => {
                    e.target.classList.toggle("active");
                    const children = document.querySelector(
                      `.children-${item.id}`
                    );
                    children.classList.toggle("active");
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="block w-[20px] mr-4"
                  />
                  <span className="block pinkish">{item.name}</span>
                </button>
                <ul className={`ml-5 children children-${item.id}`}>
                  {item.children.map((sub) => (
                    <li key={sub.id} className="mb-1 children-item">
                      <NavLink
                        to={sub.link}
                        className={"flex justify-start items-center"}
                      >
                        <span className="block text-white">{sub.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                to={item.link}
                className={"flex justify-start items-center sidebar-link"}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="block w-[20px] mr-4"
                />
                <span className="block pinkish">{item.name}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul> */}

      <Collapse accordion items={menuItems} />
    </div>
  );
};

export default Sidebar;
