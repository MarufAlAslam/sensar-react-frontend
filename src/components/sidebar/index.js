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
      link: "/",
    },
    {
      id: 2,
      name: "Supplier",
      icon: factory,
      link: "/supplier",
    },
    {
      id: 3,
      name: "Customer",
      icon: customer,
      link: "/customer",
    },
    {
      id: 4,
      name: "Projects",
      icon: projects,
      link: "/projects",
    },
    {
      id: 5,
      name: "Invoices",
      icon: invoices,
      link: "/invoices",
    },
    {
      id: 6,
      name: "Quotes",
      icon: quotes,
      link: "/quotes",
    },
    {
      id: 7,
      name: "User",
      icon: user,
      link: "/user",
    },
    {
      id: 8,
      name: "Message",
      icon: message,
      link: "/message",
    },
    {
      id: 9,
      name: "Products",
      icon: message,
      link: "/products",
    },
    {
      id: 10,
      name: "Material",
      icon: material,
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
            <NavLink
              to={item.link}
              className={"flex justify-start items-center"}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="block w-[20px] mr-4"
              />
              <span className="block pinkish">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
