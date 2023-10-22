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

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: dashboard,
      submenu: [],
      link: "/",
    },
    {
      id: 2,
      name: "Supplier",
      icon: factory,
      submenu: [
        {
          id: 1,
          name: "All Supplier",
          link: "/supplier/all",
        },
        {
          id: 2,
          name: "Add Supplier",
          link: "/supplier/add-new",
        },
      ],
      link: "/supplier",
    },
    {
      id: 3,
      name: "Customer",
      icon: customer,
      submenu: [
        {
          id: 1,
          name: "All Customer",
          link: "/customer/all",
        },
        {
          id: 2,
          name: "Add Customer",
          link: "/customer/add-new",
        },
      ],
      link: "/customer",
    },
    {
      id: 4,
      name: "Projects",
      icon: projects,
      submenu: [
        {
          id: 1,
          name: "All Projects",
          link: "/projects/all",
        },
        {
          id: 2,
          name: "Add Projects",
          link: "/projects/add-new",
        },
      ],
      link: "/projects",
    },
    {
      id: 5,
      name: "Invoices",
      icon: invoices,
      submenu: [],
      link: "/invoices",
    },
    {
      id: 6,
      name: "Quotes",
      icon: quotes,
      submenu: [],
      link: "/quotes",
    },
    {
      id: 7,
      name: "User",
      icon: user,
      submenu: [
        {
          id: 1,
          name: "All Users",
          link: "/users/all",
        },
        {
          id: 2,
          name: "Add New",
          link: "/users/add-new",
        },
        // {
        //   id: 2,
        //   name: "Profile",
        //   link: "/users/profile",
        // },
      ],
      link: "/user",
    },
    {
      id: 8,
      name: "Message",
      icon: message,
      submenu: [],
      link: "/message",
    },
    {
      id: 9,
      name: "Products",
      icon: message,
      submenu: [
        {
          id: 1,
          name: "All Products",
          link: "/products/all-products",
        },
        {
          id: 2,
          name: "Add Single Product",
          link: "/products/add-new",
        },
        {
          id: 3,
          name: "Add Multiple Products",
          link: "/products/add-multiple",
        },
        {
          id: 4,
          name: "Categories",
          link: "/material/categories",
        },
      ],
      link: "/products",
    },
    {
      id: 10,
      name: "Material",
      icon: material,
      submenu: [
        {
          id: 1,
          name: "All Material",
          link: "/material/all-materials",
        },
        {
          id: 2,
          name: "Add Single Material",
          link: "/material/add-single",
        },
        {
          id: 3,
          name: "Add Multiple Material",
          link: "/material/add-multiple",
        },
        {
          id: 4,
          name: "Categories",
          link: "/material/categories",
        },
      ],
      link: "/material",
    },
  ];
  return (
    <div className="bg-[#4d44b5] p-[30px] pr-0 h-full min-h-screen sidebar">
      <div className="text-center pr-[30px]">
        <img src={logo} alt="logo" className="block mx-auto mb-10" />
      </div>

      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-1">
            {item.submenu.length > 0 ? (
              <>
                <button
                  className={"flex justify-start items-center w-full"}
                  onClick={(e) => {
                    e.target.classList.toggle("active");
                    const submenu = document.querySelector(
                      `.submenu-${item.id}`
                    );
                    submenu.classList.toggle("active");
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="block w-[20px] mr-4"
                  />
                  <span className="block pinkish">{item.name}</span>
                </button>
                <ul className={`ml-5 submenu submenu-${item.id}`}>
                  {item.submenu.map((sub) => (
                    <li key={sub.id} className="mb-1 submenu-item">
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
      </ul>
    </div>
  );
};

export default Sidebar;
