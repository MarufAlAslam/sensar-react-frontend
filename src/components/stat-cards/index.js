import React from "react";
import d1 from "../../assets/img/d1.png";
import d2 from "../../assets/img/d2.png";
import d3 from "../../assets/img/d3.png";

const StatCards = () => {
  const items = [
    {
      id: 1,
      name: "Total Projects",
      value: 932,
      icon: d1,
    },
    {
      id: 2,
      name: "Pending Digital Proof",
      value: 14,
      icon: d2,
    },
    {
      id: 3,
      name: "Proof Validate",
      value: "$123,456",
      icon: d3,
    },
  ];
  return (
    <div className="grid gap-[20px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {items.map((item) => {
        return (
          <div className="bg-white rounded-[10px] p-5 flex gap-4 justify-start items-center">
            <img src={item.icon} className="w-[40px]" alt="" />
            <div className="">
              <p className="text-sm pinkish">{item.name}</p>
              <p className="font-bold text-blue">{item.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;
